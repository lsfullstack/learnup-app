import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ILearnUpContextProps {
  isLoggedIn: boolean;
  user: IUserProps;
  dropdownIsOpen: boolean;
  setDropdownIsOpen: Dispatch<SetStateAction<boolean>>;
  menuIsOpen: boolean;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface ILearnUpProviderProps {
  children: ReactNode;
}

export interface IUserProps {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  isActive: boolean;
}

export interface ISignInProps {
  email: string;
  password: string;
  rememberme: boolean;
}
