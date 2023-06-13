import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Modal from "..";
import Input from "@/components/Input";
import Button from "@/components/Button";
import studyTopicSchema from "./validation";

import { Form } from "@/components/Form";
import { IModalProps } from "../interface";
import { LearnUpContext } from "@/context";
import { IStudyTopicProps } from "@/context/interface";

export const EditStudyTopicModal = ({ isOpen, onClose }: IModalProps) => {
  if (!isOpen) return null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IStudyTopicProps>({
    resolver: zodResolver(studyTopicSchema),
  });

  const { editStudyTopic } = useContext(LearnUpContext);

  return (
    <Modal title="Editar Tópico de Estudo" isOpen={isOpen} onClose={onClose}>
      <Form onSubmit={handleSubmit(editStudyTopic)}>
        <Input
          type="text"
          name="name"
          label="Nome"
          placeholder="Desenvolvimento Web Front-End"
          model="input-label"
          register={register}
          error={errors.name}
        />
        <Input
          type="text"
          name="description"
          label="Descrição"
          placeholder="Aulas sobre desenvolvimento web com jav..."
          model="input-label"
          register={register}
          error={errors.description}
        />
        <Input
          type="text"
          name="categories"
          label="Categorias"
          placeholder="Front-End, JavaScript"
          model="input-label"
          register={register}
          error={errors.categories}
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

export default EditStudyTopicModal;
