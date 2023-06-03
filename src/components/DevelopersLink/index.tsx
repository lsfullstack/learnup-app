import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

export const DevelopersLink = () => {

  return (
    <Link 
      className={`
        w-fit p-1 flex gap-1 
        font-enphasis text-grey-1 
        transition duration-300
        hover:text-grey-3 hover:underline
      `}
      href="/developers"
    >
      <AiFillGithub size={24}/>
      <span >Desenvolvedores</span>
    </Link>
  );
}
