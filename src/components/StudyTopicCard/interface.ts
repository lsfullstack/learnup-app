export interface IStudyTopic {
  id?: string;
  title: string;
  description: string;
  categories: string[];
}

export interface IStudyTopicCardProps {
  studyTopic: IStudyTopic;
}
