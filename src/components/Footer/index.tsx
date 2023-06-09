"use client";

import Image from "next/image";
import whiteLogo from "../../../public/images/logo-white.png";
import { DevelopersLink } from "../DevelopersLink";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
	const handleScrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer 
      className={`
        w-full bg-grey-1 mt-auto pb-4 flex flex-col gap-2 
        justify-center items-center text-white
        md:flex-row md:justify-between md:px-16 md:py-1 2xl:px-32 
      `}
    >
      <Image src={whiteLogo} alt="LearnUp Logo" width={200} height={75} />
      
      <div className="flex flex-col items-center gap-2">
        <p className="font-footnote text-footnote">&copy; 2023 -  Todos os direitos reservados.</p>
        <DevelopersLink styleType="white"/>
      </div>

      <div 
        onClick={() => handleScrollTop()}
        className={`
          bg-grey-2 transition duration-300 hover:bg-grey-3 w-28 
          h-10 rounded-md flex justify-center items-center
        `}>
        <IoIosArrowUp size={24}/>
      </div>
    </footer>
	);
};

export default Footer;
