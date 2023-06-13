import { IInputProps } from "./interface";
import { InputBasic, InputSearch, InputLabel, Textarea } from "./variants";

const Input = ({
  label,
  placeholder,
  name,
  type,
  model,
  register,
  error,
  maxLength,
}: IInputProps) => {
  switch (model) {
    case "input-basic":
      return (
        <InputBasic
          label={label}
          placeholder={placeholder}
          name={name}
          type={type}
          register={register}
          maxLength={maxLength}
        />
      );
    case "input-label":
      return (
        <fieldset className="flex w-full flex-col gap-1">
          <InputLabel
            label={label}
            placeholder={placeholder}
            name={name}
            type={type}
            register={register}
            maxLength={maxLength}
          />
          <span className="h-6 text-right text-feedback-error-1">
            {error?.message}
          </span>
        </fieldset>
      );
    case "input-search":
      return (
        <InputSearch
          label={label}
          placeholder={placeholder}
          name={name}
          type={type}
          register={register}
        />
      );
    case "textarea":
      return (
        <fieldset className="flex w-full flex-col gap-1">
          <Textarea placeholder={placeholder} name={name} register={register} />
          <span className="h-6 text-right text-feedback-error-1">
            {error?.message}
          </span>
        </fieldset>
      );
    default:
      return (
        <InputBasic
          label={label}
          placeholder={placeholder}
          name={name}
          type={type}
          register={register}
          maxLength={maxLength}
        />
      );
  }
};

export default Input;
