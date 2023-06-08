"use client";

import Image from "next/image";
import logo from "../../../public/images/logo.png";
import DesktopUserMenu from "./desktop";
import MobileUserMenu from "./mobile";
import Dropdown from "./mobile/Dropdown";

const Header = () => {

  return (
    <header className={`
      w-full h-20 shadow-md flex justify-between px-8 bg-white
      sm:px-16 2xl:px-32 sticky z-10 top-0 gap-4
    `}>
      <Image src={logo} width={200} height={75} alt="LearnUp Logo" />
      <div className="w-fill h-full flex justify-between items-center">
        <DesktopUserMenu />
        <MobileUserMenu />
        <Dropdown />
      </div>
    </header>
  );
}

export default Header;
