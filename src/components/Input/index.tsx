import { IInputProps } from "./interface";
import { InputBasic, InputSearch, InputLabel } from "./variants";

const Input = ({label, placeholder, name, type, model}: IInputProps) => {
  
  switch (model) {
    case "input-basic":
      return <InputBasic label={label} placeholder={placeholder} name={name} type={type} />
    case "input-label":
      return <InputLabel label={label} placeholder={placeholder} name={name} type={type} />
    case "input-search":
      return <InputSearch label={label} placeholder={placeholder} name={name} type={type} />
    default:
      return <InputBasic label={label} placeholder={placeholder} name={name} type={type} />
  }
}

export default Input;
