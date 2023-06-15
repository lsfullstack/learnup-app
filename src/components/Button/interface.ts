import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactElement;
  styleType: "blue" | "orange" | "grey-1" | "grey-2" | "red" | "white";
  empty?: boolean;
  onClick?: () => void;
}

export interface IVariantButtonProps extends Omit<IButtonProps, "styleType"> {
  defaultStyle: string;
}
