import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Modal from "..";
import Input from "@/components/Input";
import lessonSchema from "./validation";
import Button from "@/components/Button";

import { Form } from "@/components/Form";
import { IModalProps } from "../interface";
import { LearnUpContext } from "@/context";
import { ILessonProps } from "@/context/interface";

export const EditLessonModal = ({ isOpen, onClose }: IModalProps) => {
  if (!isOpen) return null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILessonProps>({
    resolver: zodResolver(lessonSchema),
  });

  const { editLesson, selectedLesson } = useContext(LearnUpContext);

  return (
    <Modal title="Editar Aula" isOpen={isOpen}>
      <Form onSubmit={handleSubmit(editLesson)}>
        <Input
          type="text"
          name="title"
          label="Título"
          placeholder={selectedLesson?.title}
          model="input-label"
          register={register}
          error={errors.title}
        />
        <div className="flex w-full gap-4">
          <Button styleType="grey-2" onClick={() => onClose(false)}>
            Cancelar
          </Button>
          <Button type="submit" styleType="blue">
            Salvar
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default EditLessonModal;
