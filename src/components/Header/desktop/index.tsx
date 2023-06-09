import Button from "@/components/Button";
import { LearnUpContext } from "@/context";
import Link from "next/link";
import { useContext } from "react";
import { AiOutlineUser } from "react-icons/ai";
import Menu from "./Menu";

const DesktopUserMenu = () => {
  const { isLoggedIn, user: {username}, menuIsOpen, setMenuIsOpen } = useContext(LearnUpContext);

  return (
    <div className={`
        h-full hidden md:flex md:justify-between 
        md:items-center md:gap-4
      `}
    >    
    <Button styleType="orange" empty >Blog</Button>
      {      
        isLoggedIn ?
          <span 
            className={`
              font-enphasis h-full flex items-center gap-2 cursor-pointer 
              border-l-4 border-grey-5 pl-4 hover:underline relative 
            `}
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            <AiOutlineUser size={32} />
            <span>{username}</span>
            <Menu />
          </span>
          :
          <span className="w-[280px] h-full font-enphasis flex items-center gap-4 border-l-4 border-grey-5 pl-4">
            <Link 
              href="/login" 
              className="w-48 flex items-center justify-center hover:underline"
            >Fazer Login</Link>

            <Button empty styleType="grey-1">Cadastrar</Button>
          </span>
      }
    </div>
  );
}

export default DesktopUserMenu;