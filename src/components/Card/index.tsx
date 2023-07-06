import { useContext, useState } from "react";
import { IoEllipsisHorizontal } from "react-icons/io5";

import { ICardProps } from "./interface";
import { TargetLink } from "../TargetLink";
import { LearnUpContext } from "@/context";

import Menu from "../Menu";
import EditTimelineModal from "../Modal/Timeline/edit";
import DeleteTimelineModal from "../Modal/Timeline/delete";
import EditExtraContentModal from "../Modal/ExtraContent/edit";
import DeleteExtraContentModal from "../Modal/ExtraContent/delete";

const Card = ({ timeline, extraContent }: ICardProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const { setSelectedTimeline, setSelectedExtraContent } =
    useContext(LearnUpContext);

  return (
    <div className="flex items-center justify-between gap-2 border border-grey-5 bg-grey-6 px-4 py-1">
      {timeline && (
        <>
          <p className="truncate font-semibold text-grey-1">
            {timeline.time} - {timeline.description}
          </p>

          <div className="relative">
            <IoEllipsisHorizontal
              className="cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                setSelectedTimeline(timeline);
              }}
              size={24}
            />

            {isMenuOpen && (
              <Menu>
                <p
                  className="cursor-pointer text-grey-3"
                  onClick={() => setEditModal(true)}
                >
                  Editar
                </p>
                <EditTimelineModal isOpen={editModal} onClose={setEditModal} />
                <p
                  className="cursor-pointer text-feedback-error-2"
                  onClick={() => setDeleteModal(true)}
                >
                  Excluir
                </p>
                <DeleteTimelineModal
                  isOpen={deleteModal}
                  onClose={setDeleteModal}
                />
              </Menu>
            )}
          </div>
        </>
      )}

      {extraContent && (
        <>
          <TargetLink href={extraContent.link} styleType="blue">
            {extraContent.title}
          </TargetLink>

          <div className="relative">
            <IoEllipsisHorizontal
              className="cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                setSelectedExtraContent(extraContent);
              }}
              size={24}
            />

            {isMenuOpen && (
              <Menu>
                <p
                  className="cursor-pointer text-grey-3"
                  onClick={() => setEditModal(true)}
                >
                  Editar
                </p>
                <EditExtraContentModal
                  isOpen={editModal}
                  onClose={setEditModal}
                />
                <p
                  className="cursor-pointer text-feedback-error-2"
                  onClick={() => setDeleteModal(true)}
                >
                  Excluir
                </p>
                <DeleteExtraContentModal
                  isOpen={deleteModal}
                  onClose={setDeleteModal}
                />
              </Menu>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
