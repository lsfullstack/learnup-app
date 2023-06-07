import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { IDevelopersLinkProps } from "./interface";

export const DevelopersLink = ({ styleType }: IDevelopersLinkProps) => {

  return (
    <Link 
      className={`
        w-fit p-1 flex gap-1 
        font-enphasis 
        ${ styleType === "grey" ? "text-grey-1 hover:text-grey-3" : "text-white hover:text-grey-4" }
        transition duration-300
        hover:underline
      `}
      href="/developers"
    >
      <AiFillGithub size={24}/>
      <span >Desenvolvedores</span>
    </Link>
  );
}
