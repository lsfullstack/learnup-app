import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IModalProps {
  title: string;
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}
