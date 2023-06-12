import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Modal from "..";
import Input from "@/components/Input";
import Button from "@/components/Button";

import { Form } from "@/components/Form";
import { IModalProps } from "../interface";
import { LearnUpContext } from "@/context";
import { annotationSchema } from "./validations";
import { IAnnotationProps } from "@/context/interface";

export const AddAnnotationsModal = ({ isOpen, onClose }: IModalProps) => {
  if (!isOpen) return null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAnnotationProps>({
    resolver: zodResolver(annotationSchema),
  });

  const { addAnnotation } = useContext(LearnUpContext);

  return (
    <Modal title="Adicionar Anotações" isOpen={isOpen} onClose={onClose}>
      <Form onSubmit={handleSubmit(addAnnotation)}>
        <Input
          type="text"
          name="annotation"
          placeholder="Digite suas anotações"
          model="input-basic"
          register={register}
          error={errors.annotation}
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

export default AddAnnotationsModal;
