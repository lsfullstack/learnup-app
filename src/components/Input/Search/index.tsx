import { IInputSearchProps } from "../interface";
import { AiOutlineSearch } from "react-icons/ai";

export const InputSearch = ({
  type,
  placeholder,
  onChange,
  onKeyDown,
}: IInputSearchProps) => {
  return (
    <div
      className={`
        flex h-12 items-center justify-between gap-2 
        rounded-lg border-2 border-grey-5
        pr-1 focus-within:border-brand-1 
        sm:w-[420px] 
      `}
    >
      <input
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        className={`
          autofocus:bg-transparent h-10 w-full rounded-lg border-grey-5 
          px-2 focus:outline-none
        `}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />

      <div className="rounded-md bg-brand-1 p-[2px] transition duration-300 hover:bg-brand-2">
        <AiOutlineSearch
          className="text-white transition duration-300"
          size={32}
        />
      </div>
    </div>
  );
};
