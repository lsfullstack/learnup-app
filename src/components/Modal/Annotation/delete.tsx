import { useContext } from "react";

import Modal from "..";
import Button from "@/components/Button";

import { IModalProps } from "../interface";
import { LearnUpContext } from "@/context";

export const DeleteAnnotationModal = ({ isOpen, onClose }: IModalProps) => {
  if (!isOpen) return null;

  const { deleteAnnotation } = useContext(LearnUpContext);

  return (
    <Modal title="Excluir Anotações" isOpen={isOpen}>
      <p className="py-2 text-center text-xl font-bold">
        Realmente deseja excluir estas anotações? Esta ação não poderá ser
        desfeita.
      </p>
      <div className="flex w-full gap-4">
        <Button styleType="grey-2" onClick={() => onClose(false)}>
          Cancelar
        </Button>
        <Button styleType="red" onClick={() => deleteAnnotation()}>
          Excluir
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteAnnotationModal;
