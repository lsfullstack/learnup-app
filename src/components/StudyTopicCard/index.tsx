import { useState } from "react";
import { IoEllipsisHorizontal } from "react-icons/io5";

import Menu from "../Menu";
import { IStudyTopicProps } from "./interface";

const StudyTopicCard = ({
  title,
  description,
  categories,
}: IStudyTopicProps) => {
  const [editBox, setEditBox] = useState(false);

  return (
    <div className="flex w-full max-w-lg flex-col gap-2 rounded-lg border border-grey-6 bg-white px-4 py-2 text-grey-1 shadow-card transition duration-300 hover:shadow-card-hover">
      <div className="relative flex items-center justify-between text-xl font-bold">
        {title}

        <IoEllipsisHorizontal
          className="cursor-pointer"
          onClick={() => setEditBox(!editBox)}
        />

        {editBox && (
          <Menu>
            <p className="cursor-pointer text-grey-3">Editar</p>
            <p className="cursor-pointer text-feedback-error-2">Excluir</p>
          </Menu>
        )}
      </div>
      <p>{description}</p>
      <div className="flex gap-2">
        {categories.map((category) => (
          <div
            className="w-fit rounded bg-grey-1 px-2 py-1 text-white"
            key={category}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyTopicCard;
