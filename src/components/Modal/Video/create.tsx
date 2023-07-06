import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Modal from "..";
import videoSchema from "./validation";
import Input from "@/components/Input";
import Button from "@/components/Button";

import { Form } from "@/components/Form";
import { IModalProps } from "../interface";
import { LearnUpContext } from "@/context";
import { IVideoProps } from "@/context/interface";

export const AddVideoModal = ({ isOpen, onClose }: IModalProps) => {
  if (!isOpen) return null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IVideoProps>({
    resolver: zodResolver(videoSchema),
  });

  const { addVideo } = useContext(LearnUpContext);

  return (
    <Modal title="Adicionar Vídeo" isOpen={isOpen}>
      <Form onSubmit={handleSubmit(addVideo)}>
        <Input
          type="text"
          name="title"
          label="Título"
          placeholder="Digite o título do vídeo"
          model="input-label"
          register={register}
          error={errors.title}
        />
        <Input
          type="text"
          name="link"
          label="Link"
          placeholder="Digite o link do vídeo"
          model="input-label"
          register={register}
          error={errors.link}
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

export default AddVideoModal;
