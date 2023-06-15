import { IMenuProp } from "./interface";

const Menu = ({ children }: IMenuProp) => {
  return (
    <div className="absolute right-0 top-7 z-10 flex flex-col gap-4 rounded border border-grey-6 bg-white px-6 py-4 text-center text-base font-bold">
      {children}
    </div>
  );
};

export default Menu;
