import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Modal from "..";
import Input from "@/components/Input";
import Button from "@/components/Button";
import annotationSchema from "./validation";

import { IModalProps } from "../interface";
import { LearnUpContext } from "@/context";
import { IAnnotationProps } from "@/context/interface";

export const AddAnnotationModal = ({ isOpen, onClose }: IModalProps) => {
  if (!isOpen) return null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAnnotationProps>({
    resolver: zodResolver(annotationSchema),
  });

  const { addAnnotation } = useContext(LearnUpContext);

  return (
    <Modal title="Adicionar Anotações" isOpen={isOpen} big>
      <form
        className="flex w-full flex-col items-end gap-2 p-4"
        onSubmit={handleSubmit(addAnnotation)}
      >
        <Input
          name="annotation"
          placeholder="Digite suas anotações"
          model="textarea"
          register={register}
          error={errors.annotation}
        />
        <div className="flex gap-4 sm:w-1/2">
          <Button styleType="grey-2" onClick={() => onClose(false)}>
            Cancelar
          </Button>
          <Button type="submit" styleType="blue">
            Salvar
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddAnnotationModal;
