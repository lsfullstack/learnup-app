import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  label?: string;
  placeholder: string;
  model: "input-basic" | "input-search" | "input-label";
  register: UseFormRegister<any>;
  error?: FieldError | undefined;
  maxLength?: number;
}

export interface IVariantInputProps extends Omit<IInputProps, "model"> {
  
}
