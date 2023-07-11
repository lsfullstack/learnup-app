"use client";

import { createContext, useEffect, useState } from "react";
import {
  ILearnUpProviderProps,
  ILearnUpContextProps,
  IUserProps,
  ISignInProps,
  IRegisterUserProps,
  IStudyTopicProps,
  IAnnotationProps,
  ILesson,
  ILessonProps,
  ITimelineProps,
  ITimeline,
  IVideo,
  IVideoProps,
  IExtraContentProps,
  IAnnotation,
  IExtraContent,
} from "./interface";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import { IStudyTopic } from "@/components/StudyTopicCard/interface";

export const LearnUpContext = createContext<ILearnUpContextProps>(
  {} as ILearnUpContextProps
);

const LearnUpProvider = ({ children }: ILearnUpProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<IUserProps>({} as IUserProps);
  const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);
  const [createLessonIsOpen, setCreateLessonIsOpen] = useState<boolean>(false);
  const [editLessonIsOpen, setEditLessonIsOpen] = useState<boolean>(false);
  const [deleteLessonIsOpen, setDeleteLessonIsOpen] = useState<boolean>(false);
  const [createTimelineIsOpen, setCreateTimelineIsOpen] =
    useState<boolean>(false);
  const [editTimelineIsOpen, setEditTimelineIsOpen] = useState<boolean>(false);
  const [deleteTimelineIsOpen, setDeleteTimelineIsOpen] =
    useState<boolean>(false);
  const [createVideoIsOpen, setCreateVideoIsOpen] = useState<boolean>(false);
  const [editVideoIsOpen, setEditVideoIsOpen] = useState<boolean>(false);
  const [deleteVideoIsOpen, setDeleteVideoIsOpen] = useState<boolean>(false);
  const [createAnnotationIsOpen, setCreateAnnotationIsOpen] =
    useState<boolean>(false);
  const [editAnnotationIsOpen, setEditAnnotationIsOpen] =
    useState<boolean>(false);
  const [deleteAnnotationIsOpen, setDeleteAnnotationIsOpen] =
    useState<boolean>(false);
  const [createExtraContentIsOpen, setCreateExtraContentIsOpen] =
    useState<boolean>(false);
  const [editExtraContentIsOpen, setEditExtraContentIsOpen] =
    useState<boolean>(false);
  const [deleteExtraContentIsOpen, setDeleteExtraContentIsOpen] =
    useState<boolean>(false);
  const [selectedLesson, setSelectedLesson] = useState<ILesson | null>(null);
  const [selectedStudyTopic, setSelectedStudyTopic] =
    useState<IStudyTopic | null>(null);
  const [selectedTimeline, setSelectedTimeline] = useState<ITimeline | null>(
    null
  );
  const [selectedVideo, setSelectedVideo] = useState<IVideo | null>(null);
  const [selectedAnnotation, setSelectedAnnotation] =
    useState<IAnnotation | null>(null);
  const [selectedExtraContent, setSelectedExtraContent] =
    useState<IExtraContent | null>(null);
  const [lessons, setLessons] = useState<ILesson[]>([]);
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [token, setToken] = useState(
    localStorage.getItem("@learn-up:token") || ""
  );
  const [studyTopics, setStudyTopics] = useState<IStudyTopicProps[]>([]);
  const router = useRouter();

  useEffect(() => {
    const loadUser = async () => {
      if (token !== "") {
        try {
          api.defaults.headers.Authorization = `Bearer ${token}`;
          const res = await api.get("/users/profile");
          setUser(res.data);
          setIsLoggedIn(true);
        } catch (error) {
          console.error(error);
          localStorage.removeItem("@learn-up:token");
        }
      }
    };
    loadUser();
  }, [token]);

  const signIn = async ({ email, password, rememberme }: ISignInProps) => {
    try {
      const res = await api.post("/login", { email, password });
      localStorage.setItem("@learn-up:token", res.data.token);
      setToken(res.data.token);
      router.replace("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = () => {
    localStorage.removeItem("@learn-up:token");
    setIsLoggedIn(false);
    setUser({} as IUserProps);
    router.push("/homepage/login");
  };

  const registerUser = async ({
    username,
    name,
    email,
    password,
  }: IRegisterUserProps) => {
    try {
      await api.post("/users", { username, name, email, password });
      router.push("/homepage/login");
    } catch (error) {
      console.log(error);
    }
  };

  const createStudyTopic = async ({
    title,
    description,
    categories,
  }: IStudyTopicProps) => {
    try {
      await api.post("/study-topics", { title, description, categories });
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveStudyTopic = async (studyTopicId: string) => {
    try {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      const response = await api.get<IStudyTopic>(
        `/study-topics/${studyTopicId}`
      );

      setSelectedStudyTopic(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveLesson = async (lessonId: string) => {
    try {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      const response = await api.get<ILesson>(`/lesson/${lessonId}`);
      setSelectedLesson(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const editStudyTopic = async ({
    title,
    description,
    categories,
  }: IStudyTopicProps) => {
    try {
      await api.patch(`/study-topics/:studyTopicId`, {
        title,
        description,
        categories,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteStudyTopic = async () => {
    try {
      await api.delete(`/study-topics/:studyTopicId`);
    } catch (error) {
      console.log(error);
    }
  };

  const createLesson = async ({ title }: ILessonProps) => {
    try {
      const response = await api.post<ILesson>(
        `/lesson/${selectedStudyTopic?.id}`,
        { title }
      );

      setLessons([response.data, ...lessons]);
      setCreateLessonIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const listLessons = async (studyTopicId: string) => {
    try {
      const response = await api.get(`/lesson/study-topic/${studyTopicId}`);

      setLessons(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const editLesson = async ({ title }: ILessonProps) => {
    try {
      const response = await api.patch(`/lesson/${selectedLesson?.id}`, {
        title,
      });

      const findLesson = lessons.find(
        (lesson) => lesson.id === selectedLesson?.id
      );

      const lessonIndex = lessons.indexOf(findLesson!);

      lessons.splice(lessonIndex, 1, response.data);

      setEditLessonIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLesson = async () => {
    try {
      await api.delete(`/lesson/${selectedLesson?.id}`);

      const findLesson = lessons.find(
        (lesson) => lesson.id === selectedLesson?.id
      );
      const lessonIndex = lessons.indexOf(findLesson!);

      lessons.splice(lessonIndex, 1);

      setDeleteLessonIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const createTimeline = async ({ time, description }: ITimelineProps) => {
    try {
      await api.post<ITimeline>(`/timeline/:id-video`, { time, description });

      setCreateTimelineIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const editTimeline = async ({ time, description }: ITimelineProps) => {
    try {
      await api.patch<ITimeline>(`/timeline/${selectedTimeline?.id}`, {
        time,
        description,
      });

      setEditTimelineIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTimeline = async () => {
    try {
      await api.delete(`/timeline/${selectedTimeline?.id}`);

      setDeleteTimelineIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const addVideo = async ({ title, link }: IVideoProps) => {
    try {
      await api.post<IVideo>(`/video/${selectedLesson?.id}`, { title, link });

      setCreateVideoIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const editVideo = async ({ title, link }: IVideoProps) => {
    try {
      await api.patch<IVideo>(`/video/${selectedVideo?.id}`, { title, link });

      setEditVideoIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteVideo = async () => {
    try {
      await api.delete(`/video/${selectedVideo?.id}`);

      setDeleteVideoIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const addAnnotation = async ({ annotation }: IAnnotationProps) => {
    try {
      await api.post<IAnnotation>(`/annotation/${selectedLesson?.id}`, {
        annotation,
      });

      setCreateAnnotationIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const editAnnotation = async ({ annotation }: IAnnotationProps) => {
    try {
      await api.patch<IAnnotation>(`/annotation/${selectedAnnotation?.id}`, {
        annotation,
      });

      setEditAnnotationIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAnnotation = async () => {
    try {
      await api.delete(`/annotation/${selectedAnnotation?.id}`);

      setDeleteAnnotationIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const addExtraContent = async ({ title, link }: IExtraContentProps) => {
    try {
      await api.post<IExtraContent>(`/extra-content/${selectedLesson?.id}`, {
        title,
        link,
      });

      setCreateExtraContentIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const editExtraContent = async ({ title, link }: IExtraContentProps) => {
    try {
      await api.patch<IExtraContent>(
        `/extra-content/${selectedExtraContent?.id}`,
        {
          title,
          link,
        }
      );

      setEditExtraContentIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteExtraContent = async () => {
    try {
      await api.delete(`/extra-content/${selectedExtraContent?.id}`);

      setDeleteExtraContentIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const studyTopicsSeach = (search: string) => {};

  const getStudyTopics = async () => {
    api.defaults.headers.Authorization = `Bearer ${token}`;
    const res = await api.get("/study-topics");
    const studyTopicsList: IStudyTopicProps[] = res.data;
    setStudyTopics(studyTopicsList);
  };

  return (
    <LearnUpContext.Provider
      value={{
        isLoggedIn,
        user,
        dropdownIsOpen,
        setDropdownIsOpen,
        menuIsOpen,
        setMenuIsOpen,
        signIn,
        signOut,
        registerUser,
        createStudyTopic,
        retrieveStudyTopic,
        retrieveLesson,
        editStudyTopic,
        deleteStudyTopic,
        createLesson,
        listLessons,
        editLesson,
        deleteLesson,
        addVideo,
        editVideo,
        deleteVideo,
        addAnnotation,
        editAnnotation,
        deleteAnnotation,
        addExtraContent,
        editExtraContent,
        deleteExtraContent,
        studyTopicsSeach,
        getStudyTopics,
        studyTopics,
        createLessonIsOpen,
        editLessonIsOpen,
        deleteLessonIsOpen,
        setCreateLessonIsOpen,
        setEditLessonIsOpen,
        setDeleteLessonIsOpen,
        createTimelineIsOpen,
        editTimelineIsOpen,
        deleteTimelineIsOpen,
        setCreateTimelineIsOpen,
        setEditTimelineIsOpen,
        setDeleteTimelineIsOpen,
        createVideoIsOpen,
        editVideoIsOpen,
        deleteVideoIsOpen,
        setCreateVideoIsOpen,
        setEditVideoIsOpen,
        setDeleteVideoIsOpen,
        createAnnotationIsOpen,
        editAnnotationIsOpen,
        deleteAnnotationIsOpen,
        setCreateAnnotationIsOpen,
        setEditAnnotationIsOpen,
        setDeleteAnnotationIsOpen,
        createExtraContentIsOpen,
        editExtraContentIsOpen,
        deleteExtraContentIsOpen,
        setCreateExtraContentIsOpen,
        setEditExtraContentIsOpen,
        setDeleteExtraContentIsOpen,
        lessons,
        selectedLesson,
        setSelectedLesson,
        selectedStudyTopic,
        setSelectedStudyTopic,
        selectedTimeline,
        setSelectedTimeline,
        selectedVideo,
        setSelectedVideo,
        selectedAnnotation,
        setSelectedAnnotation,
        selectedExtraContent,
        setSelectedExtraContent,
        createTimeline,
        editTimeline,
        deleteTimeline,
      }}
    >
      {children}
    </LearnUpContext.Provider>
  );
};

export default LearnUpProvider;
