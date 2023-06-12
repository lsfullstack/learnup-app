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

export const AddExtraContentModal = ({ isOpen, onClose }: IModalProps) => {
  if (!isOpen) return null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILinkProps>({
    resolver: zodResolver(linkSchema),
  });

  const { addExtraContent } = useContext(LearnUpContext);

  return (
    <Modal title="Adicionar Conteúdo Extra" isOpen={isOpen} onClose={onClose}>
      <Form onSubmit={handleSubmit(addExtraContent)}>
        <Input
          type="text"
          name="link-1"
          label="Link 1"
          placeholder="Insira o link"
          model="input-label"
          register={register}
          error={errors.link}
        />
        <div className="cursor-pointer self-start rounded bg-add-link px-4 py-2">
          <p className="text-sm font-semibold text-brand-3">
            Adicionar campo para link
          </p>
        </div>
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

export default AddExtraContentModal;
