import { useContext } from "react";

import Modal from "..";
import Button from "@/components/Button";

import { IModalProps } from "../interface";
import { LearnUpContext } from "@/context";

export const DeleteLessonModal = ({ isOpen, onClose }: IModalProps) => {
  if (!isOpen) return null;

  const { deleteLesson } = useContext(LearnUpContext);

  return (
    <Modal title="Excluir Aula" isOpen={isOpen}>
      <p className="py-2 text-center text-xl font-bold">
        Realmente deseja excluir esta aula? Esta ação não poderá ser desfeita.
      </p>
      <div className="flex w-full gap-4">
        <Button styleType="grey-2" onClick={() => onClose(false)}>
          Cancelar
        </Button>
        <Button styleType="red" onClick={() => deleteLesson()}>
          Excluir
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteLessonModal;
