import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Modal from "..";
import Input from "@/components/Input";
import Button from "@/components/Button";
import extraContentSchema from "./validation";

import { Form } from "@/components/Form";
import { IModalProps } from "../interface";
import { LearnUpContext } from "@/context";
import { IExtraContentProps } from "@/context/interface";

export const AddExtraContentModal = ({ isOpen, onClose }: IModalProps) => {
  if (!isOpen) return null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IExtraContentProps>({
    resolver: zodResolver(extraContentSchema),
  });

  const { addExtraContent } = useContext(LearnUpContext);

  return (
    <Modal title="Adicionar Conteúdo Extra" isOpen={isOpen}>
      <Form onSubmit={handleSubmit(addExtraContent)}>
        <Input
          type="text"
          name="title"
          label="Título"
          placeholder="Insira o título"
          model="input-label"
          register={register}
          error={errors.title}
        />
        <Input
          type="text"
          name="link"
          label="Link"
          placeholder="Insira o link"
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

export default AddExtraContentModal;
