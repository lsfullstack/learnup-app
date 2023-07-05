import { IStudyTopic } from "@/components/StudyTopicCard/interface";
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
  retrieveStudyTopic: (studyTopicId: string) => Promise<void>;
  editStudyTopic: ({}: IStudyTopicProps) => Promise<void>;
  deleteStudyTopic: () => Promise<void>;
  createLesson: ({}: ILessonProps) => Promise<void>;
  listLessons: (studyTopicId: string) => Promise<void>;
  editLesson: ({}: ILessonProps) => Promise<void>;
  deleteLesson: () => Promise<void>;
  addVideo: ({}: ILinkProps) => Promise<void>;
  addAnnotation: ({}: IAnnotationProps) => Promise<void>;
  addExtraContent: ({}: ILinkProps) => Promise<void>;
  studyTopicsSeach: (search: string) => void;
  getStudyTopics: () => Promise<void>;
  studyTopics: IStudyTopicProps[];
  createLessonIsOpen: boolean;
  editLessonIsOpen: boolean;
  deleteLessonIsOpen: boolean;
  setCreateLessonIsOpen: Dispatch<SetStateAction<boolean>>;
  setEditLessonIsOpen: Dispatch<SetStateAction<boolean>>;
  setDeleteLessonIsOpen: Dispatch<SetStateAction<boolean>>;
  createTimelineIsOpen: boolean;
  editTimelineIsOpen: boolean;
  deleteTimelineIsOpen: boolean;
  setCreateTimelineIsOpen: Dispatch<SetStateAction<boolean>>;
  setEditTimelineIsOpen: Dispatch<SetStateAction<boolean>>;
  setDeleteTimelineIsOpen: Dispatch<SetStateAction<boolean>>;
  lessons: ILesson[];
  selectedLesson: ILesson | null;
  setSelectedLesson: Dispatch<SetStateAction<ILesson | null>>;
  selectedStudyTopic: IStudyTopic | null;
  setSelectedStudyTopic: Dispatch<SetStateAction<IStudyTopic | null>>;
  selectedTimeline: ITimeline | null;
  setSelectedTimeline: Dispatch<SetStateAction<ITimeline | null>>;
  createTimeline: ({}: ITimelineProps) => Promise<void>;
  editTimeline: ({}: ITimelineProps) => Promise<void>;
  deleteTimeline: () => Promise<void>;
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
  categories: string[];
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

export interface ILesson {
  id: string;
  title: string;
}

export interface ITimelineProps {
  time: string;
  description: string;
}

export interface ITimeline extends ITimelineProps {
  id: string;
}
