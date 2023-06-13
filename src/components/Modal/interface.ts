import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IModalContainerProps {
  title: string;
  isOpen: boolean;
  children: ReactNode;
  big?: boolean;
}

export interface IModalProps
  extends Omit<IModalContainerProps, "title" | "children"> {
  onClose: Dispatch<SetStateAction<boolean>>;
}
