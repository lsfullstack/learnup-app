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

export const EditTimelineModal = ({ isOpen, onClose }: IModalProps) => {
  if (!isOpen) return null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITimelineProps>({
    resolver: zodResolver(timelineSchema),
  });

  const { editTimeline, selectedTimeline } = useContext(LearnUpContext);

  return (
    <Modal title="Editar Capítulo" isOpen={isOpen}>
      <Form onSubmit={handleSubmit(editTimeline)}>
        <Input
          type="text"
          name="time"
          label="Tempo"
          placeholder={selectedTimeline?.time}
          model="input-label"
          register={register}
          error={errors.time}
        />
        <Input
          type="text"
          name="description"
          label="Descrição"
          placeholder={selectedTimeline?.description}
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

export default EditTimelineModal;
