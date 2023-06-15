import Button from "@/components/Button";
import { LearnUpContext } from "@/context";
import Link from "next/link";
import { useContext } from "react";

const Dropdown = () => {
  const { isLoggedIn, dropdownIsOpen, signOut } = useContext(LearnUpContext);
  return (
    <div className={`
      ${dropdownIsOpen ? "flex" : "hidden"}
      w-full max-w-md absolute top-20 right-0 bg-white
      justify-start border-t-2 border-grey-5 md:hidden
    `}>
      {
        isLoggedIn ?
          <span className="w-full h-fit flex flex-col gap-4 p-4 border border-grey-5">
            <span className="w-full flex flex-col gap-4 py-4">
              <Link
                href="/blog"
                className="px-4 py-2 text-grey-2 font-enphasis hover:underline"
              >Blog</Link>
              <Link
                href="/profile"
                className="px-4 py-2 flex items-center text-grey-2 font-enphasis hover:underline"
              >Perfil</Link>
              <Link
                href="/login"
                className="px-4 py-2 flex items-center text-grey-2 font-enphasis hover:underline"
                onClick={() => signOut()}
              >Sair</Link>
            </span>
          </span>
          :
          <span className="w-full h-fit flex flex-col gap-4 p-4 border border-grey-5">
            <Link href="/blog" className="px-4 py-2 font-enphasis hover:underline text-brand-4">Blog</Link>

            <span className="w-full font-enphasis flex flex-col gap-4 border-t-2 border-grey-5 py-4">
              <Link 
                href="/login" 
                className="px-4 py-2 flex items-center hover:underline"
              >Fazer Login</Link>

              <Button empty styleType="grey-1">Cadastrar</Button>
            </span>
          </span>
      }
    </div>
  );
}

export default Dropdown;


