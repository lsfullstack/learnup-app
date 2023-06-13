import { IVariantInputProps } from "./interface";

export const InputBasic = ({
  placeholder,
  name,
  type,
  register,
  maxLength,
}: IVariantInputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      {...register(name)}
      maxLength={maxLength}
      className={`
        h-12 w-full rounded-lg border-2 border-grey-5 px-4
        text-grey-1 shadow-md 
        shadow-grey-4/25 
        transition duration-300 
        placeholder:text-grey-4 hover:bg-grey-6 
        focus:border-brand-1 
        focus:outline-none sm:max-w-[992px]
      `}
    />
  );
};

export const InputLabel = ({
  label,
  placeholder,
  name,
  type,
  register,
  maxLength,
}: IVariantInputProps) => {
  return (
    <span className="flex w-full flex-col gap-1">
      <label htmlFor={name} className="font-enphasis text-grey-1">
        {label}
      </label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        maxLength={maxLength}
        {...register(name)}
        className={`
          h-12 rounded-lg border-2 border-grey-5
          px-4 text-grey-1 
          shadow-md 
          shadow-grey-4/25 transition 
          duration-300 placeholder:text-grey-4 
          hover:bg-grey-6 
          focus:border-brand-1 focus:outline-none
        `}
      />
    </span>
  );
};

export const InputSearch = ({
  placeholder,
  name,
  type,
  register,
}: IVariantInputProps) => {
  return (
    <div
      className={`
        flex h-12 w-full items-center justify-between 
        gap-2 rounded-lg border-2
        border-grey-5 pr-1 
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
          autofocus:bg-transparent h-10 w-full rounded-lg border-grey-5 
          px-2 focus:outline-none
        `}
      />
      <button
        type="submit"
        className={`
          h-10 w-20 rounded-lg bg-brand-1 
          px-4 text-button 
          font-button text-white 
          transition duration-300
          hover:bg-brand-2
        `}
      >
        Buscar
      </button>
    </div>
  );
};

export const Textarea = ({
  placeholder,
  name,
  register,
}: IVariantInputProps) => {
  return (
    <textarea
      placeholder={placeholder}
      {...register(name)}
      className={`
        mb-2 h-40 w-full resize-none rounded-lg
        border-2 border-grey-5 px-4 py-2
        text-grey-1 
        shadow-md shadow-grey-4/25 
        transition duration-300 
        placeholder:text-grey-4 
        hover:bg-grey-6 focus:border-brand-1
        focus:outline-none
      `}
    />
  );
};
