"use client";

import { TbPlus } from "react-icons/tb";
import { RiArrowLeftLine } from "react-icons/ri";
import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

import { LearnUpContext } from "@/context";
import { InputSearch } from "@/components/Input/Search";

import Button from "@/components/Button";
import LessonList from "@/components/LessonList";
import CreateLessonModal from "@/components/Modal/Lesson/create";
import LessonAddToCategory from "@/components/LessonAddToCategory";

export default function LessonPage() {
  const [inputValue, setInputValue] = useState<string>("");

  const router = useRouter();
  const { id } = useParams();

  const {
    lessons,
    selectedLesson,
    retrieveLesson,
  } = useContext(LearnUpContext);

  useEffect(() => {
    retrieveLesson(id);
  }, []);

  // const filteredLessons = lessons.filter((lesson) =>
  //   lesson.title.toLowerCase().includes(inputValue.toLowerCase())
  // );

  return (
    <section className="flex h-full flex-col gap-5 py-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <RiArrowLeftLine
            size={35}
            className="cursor-pointer"
            onClick={() => router.push("/dashboard")}
          />
          {/* <h2 className="text-4xl font-bold">{selectedLesson?.title}</h2> */}
        </div>
        <div className="flex flex-col gap-6 .h2:font-bold">
          <LessonAddToCategory categoryType="video"/>
          <LessonAddToCategory categoryType="anotacoes"/>
          <LessonAddToCategory categoryType="conteudo-extra"/>
        </div>

        {/* <div className="flex gap-4">
          {selectedLesson?.map((category) => (
            <div className="w-fit rounded bg-grey-1 px-2 py-1 text-white">
              {category}
            </div>
          ))}
        </div>
      </div>

      <p>{selectedStudyTopic?.description}</p>

      <div className="flex flex-col-reverse justify-between gap-4 sm:max-w-full sm:flex-row">
        <div className="sm:w-64">
          <Button
            styleType="blue"
            icon={<TbPlus />}
            onClick={() => setCreateLessonIsOpen(true)}
            empty
          >
            Criar nova aula
          </Button>
        </div>
        <CreateLessonModal
          isOpen={createLessonIsOpen}
          onClose={setCreateLessonIsOpen}
        /> */}
        <InputSearch
          placeholder="Digite sua pesquisa aqui"
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      {/* <LessonList lessons={filteredLessons} /> */}
    </section>
  );
}