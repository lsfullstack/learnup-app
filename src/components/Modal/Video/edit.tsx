import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import Modal from "..";
import Input from "@/components/Input";
import videoSchema from "./validation";
import DeleteVideoModal from "./delete";
import Button from "@/components/Button";

import { Form } from "@/components/Form";
import { IModalProps } from "../interface";
import { LearnUpContext } from "@/context";
import { IVideoProps } from "@/context/interface";

export const EditVideoModal = ({ isOpen, onClose }: IModalProps) => {
  if (!isOpen) return null;

  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IVideoProps>({
    resolver: zodResolver(videoSchema),
  });

  const { editVideo, selectedVideo } = useContext(LearnUpContext);

  return (
    <>
      <Modal title="Editar Vídeo" isOpen={isOpen}>
        <Form onSubmit={handleSubmit(editVideo)}>
          <Input
            type="text"
            name="title"
            label="Título"
            placeholder={selectedVideo?.title}
            model="input-label"
            register={register}
            error={errors.title}
          />
          <Input
            type="text"
            name="link"
            label="Link"
            placeholder={selectedVideo?.link}
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
          <div className="my-2 h-[2px] w-full bg-[#D9D9D9]" />
          <Button styleType="red" onClick={() => setIsDeleteOpen(true)}>
            Excluir
          </Button>
        </Form>
      </Modal>
      <DeleteVideoModal isOpen={isDeleteOpen} onClose={setIsDeleteOpen} />
    </>
  );
};

export default EditVideoModal;
