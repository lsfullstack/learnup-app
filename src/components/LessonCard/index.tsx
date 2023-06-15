"use client";

import { useState } from "react";
import { ILessonCardProps } from "./interface";
import { MdOutlineRateReview } from "react-icons/md";
import { IoEllipsisHorizontal } from "react-icons/io5";

import Menu from "../Menu";
import EditLessonModal from "../Modal/Lesson/edit";
import DeleteLessonModal from "../Modal/Lesson/delete";

const LessonCard = ({ title }: ILessonCardProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <div className="flex justify-between gap-2 border border-grey-5 bg-white px-4 py-2 transition duration-300 hover:bg-grey-6">
      <p className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-grey-1 hover:underline">
        {title}
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
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        {isMenuOpen && (
          <Menu>
            <p
              className="cursor-pointer text-grey-3"
              onClick={() => setEditModal(true)}
            >
              Editar
            </p>
            <EditLessonModal isOpen={editModal} onClose={setEditModal} />
            <p
              className="cursor-pointer text-feedback-error-2"
              onClick={() => setDeleteModal(true)}
            >
              Excluir
            </p>
            <DeleteLessonModal isOpen={deleteModal} onClose={setDeleteModal} />
          </Menu>
        )}
      </div>
    </div>
  );
};

export default LessonCard;
