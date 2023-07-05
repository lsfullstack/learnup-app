import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Modal from "..";
import Input from "@/components/Input";
import Button from "@/components/Button";
import timelineSchema from "./validation";

import { Form } from "@/components/Form";
import { IModalProps } from "../interface";
import { LearnUpContext } from "@/context";
import { ITimelineProps } from "@/context/interface";

export const CreateTimelineModal = ({ isOpen, onClose }: IModalProps) => {
  if (!isOpen) return null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITimelineProps>({
    resolver: zodResolver(timelineSchema),
  });

  const { createTimeline } = useContext(LearnUpContext);

  return (
    <Modal title="Adicionar Capítulo" isOpen={isOpen}>
      <Form onSubmit={handleSubmit(createTimeline)}>
        <Input
          type="text"
          name="time"
          label="Tempo"
          placeholder="Digite o tempo do vídeo"
          model="input-label"
          register={register}
          error={errors.time}
        />
        <Input
          type="text"
          name="description"
          label="Descrição"
          placeholder="Digite a descrição do capítulo"
          model="input-label"
          register={register}
          error={errors.description}
        />
        <div className="flex w-full flex-row-reverse gap-4">
          <Button type="submit" styleType="blue">
            Salvar
          </Button>
          <Button styleType="grey-2" onClick={() => onClose(false)}>
            Cancelar
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default CreateTimelineModal;
