"use client";

import { useContext, useState } from "react";
import { MdOutlineRateReview } from "react-icons/md";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { useParams, useRouter } from "next/navigation";

import { LearnUpContext } from "@/context";
import { ILessonCardProp } from "./interface";

import Menu from "../../Menu";
import EditLessonModal from "../../Modal/Lesson/edit";
import DeleteLessonModal from "../../Modal/Lesson/delete";

const LessonCard = ({ lesson }: ILessonCardProp) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter()
  const {studyTopicId} = useParams()

  const { setSelectedLesson, selectedLesson, setEditLessonIsOpen, editLessonIsOpen, deleteLessonIsOpen, setDeleteLessonIsOpen } = useContext(LearnUpContext);

  return (
    <div className="flex justify-between gap-2 border border-grey-5 bg-white px-4 py-2 transition duration-300 hover:bg-grey-6">
      <p
        className="cursor-pointer truncate font-semibold text-grey-1 hover:underline"
        onClick={() => {
          setSelectedLesson(lesson)
          router.push(`/dashboard/studyTopic/${studyTopicId}/lessonPage/${lesson.id}`);
        }}
      >
        {lesson.title}
      </p>
      <div className="relative flex items-center gap-2">
        <MdOutlineRateReview
          className="h-6 w-6 text-status_review-reviewed"
          title="Updated review"
        />
         {/* <MdOutlineRateReview
          className="h-6 w-6 text-status_review-attention"
          title="Review reminder"
        />
        <MdOutlineRateReview
          className="h-6 w-6 text-status_review-overdue"
          title="Revision required"
        /> */}
        <IoEllipsisHorizontal
          className="h-5 w-5 cursor-pointer"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            setSelectedLesson(lesson);
          }}
        /> 
        {isMenuOpen && (
          <Menu>
            <p
              className="cursor-pointer text-grey-3"
              onClick={() => setEditLessonIsOpen(true)}
            >
              Editar
            </p>
            <EditLessonModal
              isOpen={editLessonIsOpen}
              onClose={setEditLessonIsOpen}
            />
            <p
              className="cursor-pointer text-feedback-error-2"
              onClick={() => setDeleteLessonIsOpen(true)}
            >
              Excluir
            </p>
            <DeleteLessonModal
              isOpen={deleteLessonIsOpen}
              onClose={setDeleteLessonIsOpen}
            />
          </Menu>
        )}
      </div>
    </div>
  );
};

export default LessonCard;
