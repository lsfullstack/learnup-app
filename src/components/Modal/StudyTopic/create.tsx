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

export const CreateStudyTopicModal = ({ isOpen, onClose }: IModalProps) => {
  if (!isOpen) return null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IStudyTopicProps>({
    resolver: zodResolver(studyTopicSchema),
  });

  const { createStudyTopic } = useContext(LearnUpContext);

  return (
    <Modal title="Criar Tópico de Estudo" isOpen={isOpen}>
      <Form onSubmit={handleSubmit(createStudyTopic)}>
        <Input
          type="text"
          name="title"
          label="Nome"
          placeholder="Digite o nome do tópico"
          model="input-label"
          register={register}
          error={errors.title}
        />
        <Input
          type="text"
          name="description"
          label="Descrição"
          placeholder="Digite uma descrição"
          model="input-label"
          register={register}
          error={errors.description}
        />
        <Input
          type="text"
          name="categories"
          label="Categorias"
          placeholder="Digite as categorias"
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

export default CreateStudyTopicModal;
