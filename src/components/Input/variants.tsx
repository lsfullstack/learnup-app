import { IVariantInputProps } from "./interface";

export const InputBasic = ({placeholder, name, type, register, maxLength}: IVariantInputProps) => {
  return (
    <input 
      type={type} 
      placeholder={placeholder}
      {...register(name)}
      maxLength={maxLength}
      className={`
        border-2 rounded-lg h-12 px-4 w-full
        border-grey-5 text-grey-1 
        placeholder:text-grey-4 
        shadow-md shadow-grey-4/25 
        transition duration-300 
        hover:bg-grey-6 
        focus:outline-none focus:border-brand-1
      `}
    />
  );
}

export const InputLabel = ({label, placeholder, name, type, register, maxLength}: IVariantInputProps) => {
  return (
    <span className="flex flex-col gap-1 w-full">
      <label htmlFor={name} className="text-grey-1 font-enphasis" >{label}</label>
      <input 
        type={type} 
        id={name}
        placeholder={placeholder} 
        maxLength={maxLength}
        {...register(name)}
        className={`
          border-2 rounded-lg h-12 px-4
          border-grey-5 text-grey-1 
          placeholder:text-grey-4 
          shadow-md shadow-grey-4/25 
          transition duration-300 
          hover:bg-grey-6 
          focus:outline-none focus:border-brand-1
        `}
      />
    </span>
  );
}

export const InputSearch = ({placeholder, name, type, register}: IVariantInputProps) => {
  return (
    <div 
      className={`
        w-full h-12 flex justify-between items-center 
        pr-1 rounded-lg gap-2
        border-2 border-grey-5 
        focus-within:border-brand-1 
      `}
    >
      <input 
        type={type} 
        id={name} 
        placeholder={placeholder} 
        {...register(name)}
        autoComplete="off"
        className={`
          h-10 w-full px-2 border-grey-5 rounded-lg 
          focus:outline-none autofocus:bg-transparent
        `}
      />
      <button 
        type="submit" 
        className={`
          w-20 h-10 px-4 rounded-lg 
          bg-brand-1 text-white 
          text-button font-button 
          transition duration-300
          hover:bg-brand-2
        `}
      >Buscar</button>
    </div>
  );
}
