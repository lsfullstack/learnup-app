"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { dashboarSchema } from "./validations";
import { useContext, useEffect, useState } from "react";
import { ILearnUpContextProps, ISeachProps } from "@/context/interface";
import { LearnUpContext } from "@/context";
import CreateStudyTopicModal from "@/components/Modal/StudyTopic/create";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { FiPlus } from "react-icons/fi";
import StudyTopicCard from "@/components/StudyTopicCard";

const Dashboard = () => {
  const { register, handleSubmit } = useForm<ISeachProps>({
    resolver: zodResolver(dashboarSchema),
  });
  const { studyTopicsSeach, studyTopics, getStudyTopics } =
    useContext<ILearnUpContextProps>(LearnUpContext);
  const [createStudyTopicModal, setCreateSudyTopicModal] =
    useState<boolean>(false);

  useEffect(() => {
    getStudyTopics();
    window.onload = () => {
      getStudyTopics();
    };
  }, []);

  return (
    <section className="mt-8 h-full text-center">
      <CreateStudyTopicModal
        isOpen={createStudyTopicModal}
        onClose={() => setCreateSudyTopicModal(false)}
      />
      <h1 className="text-heading_2 font-heading_2 sm:text-heading_1 sm:font-heading_1">
        Tópicos de Estudo
      </h1>
      <div className="mt-4 flex flex-col gap-4 sm:flex-row-reverse sm:justify-between">
        <div className="w-full min-w-[240px] sm:max-w-lg">
          <Input
            model="input-search"
            placeholder="Digite sua pesquisa"
            name="search"
            register={register}
            type="search"
            // onSubmit={handleSubmit(studyTopicsSeach)}
          />
        </div>
        <div className="w-full sm:max-w-[200px]">
          <Button
            styleType="blue"
            empty
            icon={<FiPlus />}
            onClick={() => setCreateSudyTopicModal(true)}
          >
            Criar novo tópico
          </Button>
        </div>
      </div>
      {studyTopics.length === 0 ? (
        <div className="mt-8 flex w-full flex-col items-center justify-center">
          <p className="text-center">
            Você ainda não possui nenhum tópico de estudo criado.
          </p>
          <p className="text-center">
            Crie seu primeiro tópico e comece a estudar!
          </p>
        </div>
      ) : (
        <div className="my-4 grid w-full gap-4  lg:grid-cols-2 2xl:grid-cols-3">
          {studyTopics.map((studyTopic) => (
            <StudyTopicCard key={studyTopic.id} studyTopic={studyTopic} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Dashboard;
