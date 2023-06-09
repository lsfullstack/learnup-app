import { IFormProps } from "./interface";

export const Form = ({children, ...rest}: IFormProps) => {
  return (
    <form 
      className={`
        flex flex-col items-end gap-2 w-full max-w-sm p-4
      `}
      {...rest}
    >{children}</form>
  );
}
