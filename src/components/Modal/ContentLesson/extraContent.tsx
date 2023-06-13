import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
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

  const [count, setCount] = useState(0);
  const [addLink, setAddLink] = useState<number[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILinkProps>({
    resolver: zodResolver(linkSchema),
  });

  const { addExtraContent } = useContext(LearnUpContext);

  const newInput = () => {
    setCount((count) => {
      return count + 1;
    });

    setAddLink((prev) => [...prev, count]);
  };

  return (
    <Modal title="Adicionar Conteúdo Extra" isOpen={isOpen}>
      <Form onSubmit={handleSubmit(addExtraContent)}>
        <Input
          type="text"
          name="link"
          label="Link 1"
          placeholder="Insira o link"
          model="input-label"
          register={register}
          error={errors.link}
        />
        <Input
          type="text"
          name="link-2"
          label="Link 2"
          placeholder="Insira o link"
          model="input-label"
          register={register}
        />
        <Input
          type="text"
          name="link-3"
          label="Link 3"
          placeholder="Insira o link"
          model="input-label"
          register={register}
        />
        {addLink.map((_, num) => (
          <Input
            type="text"
            name={`link-${num + 4}`}
            label={`Link ${num + 4}`}
            placeholder="Insira o link"
            model="input-label"
            register={register}
          />
        ))}

        <div className="mb-2 cursor-pointer self-start rounded bg-add-link px-4 py-2">
          <p className="text-sm font-semibold text-brand-3" onClick={newInput}>
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
