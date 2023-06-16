"use client";

import { createContext, useEffect, useState } from "react";
import {
  ILearnUpProviderProps,
  ILearnUpContextProps,
  IUserProps,
  ISignInProps,
  IRegisterUserProps,
  IStudyTopicProps,
  ILessonProps,
  IAnnotationProps,
  ILinkProps,
} from "./interface";
import api from "@/services/api";
import { useRouter } from "next/navigation";

export const LearnUpContext = createContext<ILearnUpContextProps>(
  {} as ILearnUpContextProps
);

const LearnUpProvider = ({ children }: ILearnUpProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<IUserProps>({} as IUserProps);
  const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);
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
    router.push("/login");
  };

  const registerUser = async ({
    username,
    name,
    email,
    password,
  }: IRegisterUserProps) => {
    try {
      await api.post("/users", { username, name, email, password });
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const createStudyTopic = async ({
    name,
    description,
    categories,
  }: IStudyTopicProps) => {
    try {
      await api.post("/study-topics", { name, description, categories });
    } catch (error) {
      console.log(error);
    }
  };

  const editStudyTopic = async ({
    name,
    description,
    categories,
  }: IStudyTopicProps) => {
    try {
      await api.patch(`/study-topics/:studyTopicId`, {
        name,
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
      await api.post("/lesson/:studyTopicId", { title });
    } catch (error) {
      console.log(error);
    }
  };

  const editLesson = async ({ title }: ILessonProps) => {
    try {
      await api.patch("/lesson/:lessonId", { title });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLesson = async () => {
    try {
      await api.delete("/lesson/:lessonId");
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

  const studyTopicsSeach = (search: string) => {

  }

  const getStudyTopics = async () => {
    const res = await api.get("/study-topics");
    const studyTopicsList: IStudyTopicProps[] = res.data;
    setStudyTopics(studyTopicsList);
  }

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
        editStudyTopic,
        deleteStudyTopic,
        createLesson,
        editLesson,
        deleteLesson,
        addVideo,
        addAnnotation,
        addExtraContent,
        studyTopicsSeach,
        getStudyTopics,
        studyTopics,
      }}
    >
      {children}
    </LearnUpContext.Provider>
  );
};

export default LearnUpProvider;
