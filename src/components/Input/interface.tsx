import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  name: string;
  label?: string;
  placeholder: string | undefined;
  model: "input-basic" | "input-label" | "textarea";
  register: UseFormRegister<any>;
  error?: FieldError | undefined;
  maxLength?: number;
}

export interface IVariantInputProps extends Omit<IInputProps, "model"> {}

export interface IInputSearchProps
  extends Omit<IVariantInputProps, "model" | "register" | "name"> {
  onChange: (e: any) => void;
  onKeyDown: () => void;
}
