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
          <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
            <FaTrash
              size={30}
              cursor="pointer"
              className="hidden text-feedback-error-1 sm:block"
              onClick={() => setIsDeleteOpen(true)}
            />
            <div className="flex w-full gap-4 md:w-7/12">
              <Button styleType="grey-2" onClick={() => onClose(false)}>
                Cancelar
              </Button>
              <Button type="submit" styleType="blue">
                Salvar
              </Button>
            </div>
            <div className="flex w-full flex-col gap-4 sm:hidden">
              <div className="my-2 h-[2px] w-full bg-[#D9D9D9]" />
              <Button styleType="red" onClick={() => setIsDeleteOpen(true)}>
                Excluir
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
