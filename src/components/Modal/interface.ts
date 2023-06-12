import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IModalContainerProps {
  title: string;
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

export interface IModalProps
  extends Omit<IModalContainerProps, "title" | "children"> {}
