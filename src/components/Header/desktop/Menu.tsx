import { LearnUpContext } from "@/context";
import Link from "next/link";
import { useContext, useState } from "react";

const Menu = () => {
  const { menuIsOpen, signOut } = useContext(LearnUpContext);

  return (
    <nav className={`
      bg-white w-full border border-t-0 border-grey-5
      absolute z-20 top-20 left-0
      flex-col justify-between items-start gap-2 px-4 py-2 
      ${menuIsOpen ? "flex" : "hidden"}
    `}
    >
      <Link href="/profile" className="w-full border-b-2 border-grey-5 px-4 py-2  font-enphasis text-grey-3 hover:underline" >Perfil</Link>
      <Link href="/homepage/login" className="w-full border-b-2 border-grey-5 px-4 py-2 font-enphasis text-grey-3 hover:underline" onClick={() => signOut()}>Sair</Link>
    </nav>
  )
}

export default Menu;
