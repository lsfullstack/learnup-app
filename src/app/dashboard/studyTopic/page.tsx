"use client";

import { TbPlus } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { RiArrowLeftLine } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";

import { LearnUpContext } from "@/context";
import { ILesson } from "@/context/interface";
import { InputSearch } from "@/components/Input/Search";

import Button from "@/components/Button";
import LessonList from "@/components/LessonList";
import CreateLessonModal from "@/components/Modal/Lesson/create";

export default function StudyTopic() {
  const [inputValue, setInputValue] = useState<string>("");
  const [filteredLessons, setFilteredLessons] = useState<ILesson[]>([]);

  const router = useRouter();

  const {
    createLessonIsOpen,
    setCreateLessonIsOpen,
    lessons,
    selectedStudyTopic,
    listLessons
  } = useContext(LearnUpContext);

  useEffect(() => {
    listLessons()
  }, [lessons])

  const showLessons = () => {
    const result = lessons.filter((lesson) =>
      lesson.title.toLowerCase().includes(inputValue.toLowerCase())
    );

    setFilteredLessons(result);
  };

  const handleReset = () => {
    console.log("hey");
  };

  return (
    <section className="flex h-full flex-col gap-5 py-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <RiArrowLeftLine
            size={35}
            className="cursor-pointer"
            onClick={() => router.push("/dashboard")}
          />
          <h2 className="text-4xl font-bold">{selectedStudyTopic?.title}</h2>
        </div>

        <div className="flex gap-4">
          {selectedStudyTopic?.categories.map((category) => (
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
        />
        <InputSearch
          placeholder="Digite sua pesquisa aqui"
          type="search"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={() => showLessons()}
          onReset={() => handleReset()}
        />
      </div>

      <LessonList
        lessons={filteredLessons.length > 0 ? filteredLessons : lessons}
      />
    </section>
  );
}
