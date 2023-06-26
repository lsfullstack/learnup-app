import LessonCard from "./LessonCard";
import { ILessonListProp } from "./interface";

const LessonList = ({ lessons }: ILessonListProp) => {
  return lessons.length > 0 ? (
    <div className="py-4">
      {lessons.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} />
      ))}
    </div>
  ) : (
    <div className="flex h-full min-h-[30vh] w-full items-center justify-center">
      <p className="text-center font-medium text-grey-3">
        Você ainda não possui nenhuma aula neste tópico.
      </p>
    </div>
  );
};

export default LessonList;
