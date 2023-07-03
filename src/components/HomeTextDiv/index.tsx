import React from "react";
import { ITextContainerProps, WordProps } from "./interface";

const Word = ({ word, highlightedWord, className }: WordProps) => {
  const parts = word.split(/(?=[A-Z])/);
  const highlightedParts = highlightedWord?.replace(",", "").split(/(?=[A-Z])/);

  return (
    <span>
      {parts.map((part, index) => {
        const subparts = part.split(",");
        return (
          <span
            key={index}
            className={`${
              highlightedWord &&
              subparts[0] == highlightedParts[1] &&
              "text-brand-1"
            } ${part === highlightedParts[0] && "text-brand-5"}`}
          >
            {part}
          </span>
        );
      })}
    </span>
  );
};

const TextContainer = ({
  text,
  className = "bg-grey-2 w-text_container radius-4 rounded-lg  overflow-hidden  animate-fade-in-and-left",
  highlightedWord = "",
}: ITextContainerProps) => {
  const words = text?.split(" ");

  return (
    <div className={className}>
      <p className={"h-auto animate-fade-in-and-up p-4 text-white opacity-0"}>
        {words?.map((word, index) => (
          <React.Fragment key={index}>
            <Word word={word} highlightedWord={highlightedWord} />
            {word === highlightedWord ? ", " : " "}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

const HomeTextDiv = () => {
  return (
    <div className="hidden absolute bottom-24 left-1/4 max-w-xl animate-fade-in-and-left flex-col gap-5 xl:flex">
      <TextContainer
        text="Bem-vindo ao learnUp a plataforma de aprendizagem definitiva para ajudá-lo a alcançar o seu potencial máximo nos estudos!"
        highlightedWord="learnUp"
      />
      <div className="radius-4  bottom-24 left-1/4 w-text_container animate-fade-in-and-left overflow-hidden rounded-lg  bg-grey-2">
        <p className="h-auto animate-fade-in-and-up p-4 text-white opacity-0">
          Seja você um <span className="text-brand-5">estudante</span>, um{" "}
          <span className="text-brand-5">profissional</span> buscando por
          atualização ou alguém que simplesmente deseja{" "}
          <span className="text-brand-5">aprender algo novo</span>, a LearnUp é
          a plataforma perfeita para você.
        </p>
      </div>
    </div>
  );
};

export default HomeTextDiv;
