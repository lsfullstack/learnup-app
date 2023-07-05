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
  ILinkProps,
  ILesson,
  ILessonProps,
  ITimelineProps,
  ITimeline,
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
  const [selectedLesson, setSelectedLesson] = useState<ILesson | null>(null);
  const [selectedStudyTopic, setSelectedStudyTopic] =
    useState<IStudyTopic | null>(null);
  const [selectedTimeline, setSelectedTimeline] = useState<ITimeline | null>(
    null
  );
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
      await api.patch(`/timeline/${selectedTimeline?.id}`, {
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

  const addVideo = async ({ link }: ILinkProps) => {
    try {
      await api.post("/video/:lessonId", { link });
    } catch (error) {
      console.log(error);
    }
  };

  const addAnnotation = async ({ annotation }: IAnnotationProps) => {
    try {
      await api.post("/annotation/:lessonId", { annotation });
    } catch (error) {
      console.log(error);
    }
  };

  const addExtraContent = async ({ link }: ILinkProps) => {
    try {
      await api.post("/extraContent/:lessonId", { link });
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
        editStudyTopic,
        deleteStudyTopic,
        createLesson,
        listLessons,
        editLesson,
        deleteLesson,
        addVideo,
        addAnnotation,
        addExtraContent,
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
        lessons,
        selectedLesson,
        setSelectedLesson,
        selectedStudyTopic,
        setSelectedStudyTopic,
        selectedTimeline,
        setSelectedTimeline,
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
