import { useState } from "react";
import Button from "../Button";
import { TbPlus } from "react-icons/tb";

interface ILessonAddToListProp {
  categoryType: "video" | "anotacoes" | "conteudo-extra";
}

const LessonAddToCategory = ({ categoryType }: ILessonAddToListProp) => {
  const [category, setCategory] = useState(categoryType);
  return (
    <>
      {category === "video" && (
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-0">
            <h2>Vídeo Aula</h2>
            <div className="w-[220px]">
              <Button
                styleType="white"
                icon={<TbPlus />}
                children="Adicionar"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-md bg-grey-5 p-8 font-paragraph shadow">
            <p>Você não adicionou nenhum vídeo</p>
          </div>
        </div>
      )}
      {category === "anotacoes" && (
        <div className="flex flex-col gap-6">
          <div className="flex justify-between gap-0">
            <h2>Anotações</h2>
            <div className="w-[220px]">
              <Button
                styleType="white"
                icon={<TbPlus />}
                children="Adicionar"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-md bg-grey-5 p-8 font-paragraph shadow">
            <p>Você não adicionou nenhuma anotação</p>
          </div>
        </div>
      )}
      {category === "conteudo-extra" && (
        <div className="flex flex-col gap-6">
          <div className="flex justify-between gap-0">
            <h2>Conteúdo Extra</h2>
            <div className="w-[220px]">
              <Button
                styleType="white"
                icon={<TbPlus />}
                children="Adicionar"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-md bg-grey-5 p-8 font-paragraph shadow-card">
            <p>Você não adicionou nenhum conteúdo extra</p>
          </div>
        </div>
      )}
    </>
  );
};

export default LessonAddToCategory;
