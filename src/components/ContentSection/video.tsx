"use client";

import { useState } from "react";
import { TbPlus } from "react-icons/tb";

import Button from "../Button";
import AddVideoModal from "../Modal/Video/create";

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between gap-0">
        <h2 className="text-xl font-bold text-grey-1">Vídeo Aula</h2>
        <Button
          styleType="white"
          icon={<TbPlus />}
          onClick={() => setIsOpen(true)}
        >
          Adicionar
        </Button>
        <AddVideoModal isOpen={isOpen} onClose={setIsOpen} />
      </div>
      <div className="flex items-center justify-center bg-grey-6 px-4 py-8 shadow-card">
        <p className="font-medium text-grey-3">
          Você ainda não possui nenhum vídeo
        </p>
      </div>
    </div>
  );
};

export default VideoSection;
