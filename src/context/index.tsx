"use client"

import { createContext, useState } from "react"
import { ILearnUpProviderProps, ILearnUpContextProps, IUserProps, ISignInProps } from "./interface";

export const LearnUpContext = createContext<ILearnUpContextProps>({} as ILearnUpContextProps);

const LearnUpProvider = ({ children }: ILearnUpProviderProps) => {
  const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false);
  const [ user, setUser ] = useState<IUserProps>({} as IUserProps);
  const [ dropdownIsOpen, setDropdownIsOpen ] = useState<boolean>(false);
  const [ menuIsOpen, setMenuIsOpen ] = useState(false);

  const signIn = ({ email, password, rememberme }: ISignInProps) => {

  }

  return (
    <LearnUpContext.Provider
      value={{
        isLoggedIn,
        user,
        dropdownIsOpen,
        setDropdownIsOpen,
        menuIsOpen,
        setMenuIsOpen,
      }}
    >
      {children}
    </LearnUpContext.Provider>
  )
}

export default LearnUpProvider;
