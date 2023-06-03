import { InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  label?: string;
  placeholder: string;
  model: "input-basic" | "input-search" | "input-label";
}

export interface IVariantInputProps extends Omit<IInputProps, "model"> {
  
}
