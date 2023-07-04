import Link from "next/link";
import Image from "next/image";

import { IDeveloperCardProps } from "./interface";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const DeveloperCard = ({
  img,
  name,
  occupation,
  linkedin,
  github,
}: IDeveloperCardProps) => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 rounded-lg border border-grey-5 p-4 shadow-card sm:flex-row">
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <div className="h-20 w-20 rounded-full bg-grey-5">
          <Image src={img} alt="avatar_img" />
        </div>

        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold sm:text-4xl">{name}</h2>
          <p>{occupation}</p>
        </div>
      </div>

      <div className="flex gap-6">
        <Link href={linkedin} target="_blank">
          <BsLinkedin size={40} color="#0076B2" />
        </Link>

        <Link href={github} target="_blank">
          <BsGithub size={40} color="#171515" />
        </Link>
      </div>
    </div>
  );
};

export default DeveloperCard;
