import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ILearnUpContextProps {
  isLoggedIn: boolean;
  user: IUserProps;
  dropdownIsOpen: boolean;
  setDropdownIsOpen: Dispatch<SetStateAction<boolean>>;
  menuIsOpen: boolean;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
  signIn: ({}: ISignInProps) => void;
  signOut: () => void;
  registerUser: ({}: IRegisterUserProps) => void;
  createStudyTopic: ({}: IStudyTopicProps) => Promise<void>;
  editStudyTopic: ({}: IStudyTopicProps) => Promise<void>;
  deleteStudyTopic: () => Promise<void>;
  createLesson: ({}: ILessonProps) => Promise<void>;
  editLesson: ({}: ILessonProps) => Promise<void>;
  deleteLesson: () => Promise<void>;
  addVideo: ({}: ILinkProps) => Promise<void>;
  addAnnotation: ({}: IAnnotationProps) => Promise<void>;
  addExtraContent: ({}: ILinkProps) => Promise<void>;
  studyTopicsSeach: (search: string) => void;
  getStudyTopics: () => Promise<void>;
  studyTopics: IStudyTopicProps[];
}

export interface ILearnUpProviderProps {
  children: ReactNode;
}

export interface IUserProps {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  isActive: boolean;
}

export interface ISignInProps {
  email: string;
  password: string;
  rememberme: boolean;
}

export interface IRegisterUserProps {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IStudyTopicProps {
  id?: string;
  title: string;
  description: string;
  categories: string;
}

export interface ILessonProps {
  title: string;
}

export interface IAnnotationProps {
  annotation: string;
}

export interface ILinkProps {
  link: string;
}

export interface ISeachProps {
  search: string;
}
