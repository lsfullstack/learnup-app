"use client";

import { useState } from "react";
import { TbPlus } from "react-icons/tb";

import Button from "../Button";
import AddExtraContentModal from "../Modal/ContentLesson/extraContent";

const ExtraContentSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center justify-between gap-2 px-8 py-4 sm:flex-row">
        <h2 className=" text-xl font-bold text-grey-1">Conteúdo Extra</h2>
        <Button
          styleType="white"
          icon={<TbPlus />}
          onClick={() => setIsOpen(true)}
        >
          Adicionar Link
        </Button>
        <AddExtraContentModal isOpen={isOpen} onClose={setIsOpen} />
      </div>
      <div className="flex items-center justify-center bg-grey-6 px-4 py-8 shadow-card">
        <p className="font-medium text-grey-3">
          Você ainda não possui nenhum conteúdo extra
        </p>
      </div>
    </div>
  );
};

export default ExtraContentSection;
