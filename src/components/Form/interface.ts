import { FormHTMLAttributes, ReactNode } from "react";

export interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}