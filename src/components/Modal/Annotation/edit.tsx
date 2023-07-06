import { FaTrash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import Modal from "..";
import Input from "@/components/Input";
import Button from "@/components/Button";
import annotationSchema from "./validation";
import DeleteAnnotationModal from "./delete";

import { IModalProps } from "../interface";
import { LearnUpContext } from "@/context";
import { IAnnotationProps } from "@/context/interface";

export const EditAnnotationModal = ({ isOpen, onClose }: IModalProps) => {
  if (!isOpen) return null;

  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAnnotationProps>({
    resolver: zodResolver(annotationSchema),
  });

  const { editAnnotation, selectedAnnotation } = useContext(LearnUpContext);

  return (
    <>
      <Modal title="Editar Anotações" isOpen={isOpen} big>
        <form
          className="flex w-full flex-col items-end gap-2 p-4"
          onSubmit={handleSubmit(editAnnotation)}
        >
          <Input
            name="annotation"
            placeholder={selectedAnnotation?.annotation}
            model="textarea"
            register={register}
            error={errors.annotation}
          />
          <div className="flex w-full items-center justify-between">
            <FaTrash
              size={30}
              cursor="pointer"
              className="text-feedback-error-1"
              onClick={() => setIsDeleteOpen(true)}
            />
            <div className="flex gap-4 sm:w-1/2">
              <Button styleType="grey-2" onClick={() => onClose(false)}>
                Cancelar
              </Button>
              <Button type="submit" styleType="blue">
                Salvar
              </Button>
            </div>
          </div>
        </form>
      </Modal>
      <DeleteAnnotationModal isOpen={isDeleteOpen} onClose={setIsDeleteOpen} />
    </>
  );
};

export default EditAnnotationModal;
