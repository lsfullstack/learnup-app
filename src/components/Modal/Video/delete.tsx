import { useContext } from "react";

import Modal from "..";
import Button from "@/components/Button";

import { IModalProps } from "../interface";
import { LearnUpContext } from "@/context";

export const DeleteVideoModal = ({ isOpen, onClose }: IModalProps) => {
  if (!isOpen) return null;

  const { deleteVideo } = useContext(LearnUpContext);

  return (
    <Modal title="Excluir Vídeo" isOpen={isOpen}>
      <p className="py-2 text-center text-xl font-bold">
        Realmente deseja excluir este vídeo? Esta ação não poderá ser desfeita.
      </p>
      <div className="flex w-full gap-4">
        <Button styleType="grey-2" onClick={() => onClose(false)}>
          Cancelar
        </Button>
        <Button styleType="red" onClick={() => deleteVideo()}>
          Excluir
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteVideoModal;
