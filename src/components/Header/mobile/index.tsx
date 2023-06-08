import { LearnUpContext } from "@/context";
import { useContext } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

const MobileUserMenu = () => {
  const { dropdownIsOpen, setDropdownIsOpen } = useContext(LearnUpContext);

  return (
    dropdownIsOpen ? 
      <IoCloseOutline size={48} className="md:hidden" onClick={() => setDropdownIsOpen(false)}/>
      :
      <HiOutlineMenu size={48} className="md:hidden" onClick={() => setDropdownIsOpen(true)}/>
  );
}

export default MobileUserMenu;