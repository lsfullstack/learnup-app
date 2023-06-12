import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Modal from "..";
import Input from "@/components/Input";
import Button from "@/components/Button";

import { Form } from "@/components/Form";
import { linkSchema } from "./validations";
import { IModalProps } from "../interface";
import { LearnUpContext } from "@/context";
import { ILinkProps } from "@/context/interface";

export const AddVideoModal = ({ isOpen, onClose }: IModalProps) => {
  if (!isOpen) return null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILinkProps>({
    resolver: zodResolver(linkSchema),
  });

  const { addVideo } = useContext(LearnUpContext);

  return (
    <Modal title="Adicionar Vídeo" isOpen={isOpen} onClose={onClose}>
      <Form onSubmit={handleSubmit(addVideo)}>
        <Input
          type="text"
          name="link"
          label="Link"
          placeholder="Digite o link do vídeo"
          model="input-label"
          register={register}
          error={errors.link}
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

export default AddVideoModal;
