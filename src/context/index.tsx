"use client"

import { createContext, useEffect, useState } from "react"
import { ILearnUpProviderProps, ILearnUpContextProps, IUserProps, ISignInProps, IRegisterUserProps } from "./interface";
import api from "@/services/api";
import { useRouter } from "next/navigation";

export const LearnUpContext = createContext<ILearnUpContextProps>({} as ILearnUpContextProps);

const LearnUpProvider = ({ children }: ILearnUpProviderProps) => {
  const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false);
  const [ user, setUser ] = useState<IUserProps>({} as IUserProps);
  const [ dropdownIsOpen, setDropdownIsOpen ] = useState<boolean>(false);
  const [ menuIsOpen, setMenuIsOpen ] = useState<boolean>(false);
  const [ token, setToken ] = useState(localStorage.getItem("@learn-up:token") || "");
  const router = useRouter();

  useEffect(() => {
		const loadUser = async () => {
			if (token !== "") {
				try {
					api.defaults.headers.Authorization = `Bearer ${token}`;
					const res = await api.get("/users/profile");
					setUser(res.data);
					setIsLoggedIn(true);

				} catch (error) {
					console.error(error);
					localStorage.removeItem("@learn-up:token");
				}
			}
		};
		loadUser();
	}, [token]);

  const signIn = async ({ email, password, rememberme }: ISignInProps) => {
    try {
      const res = await api.post("/login", { email, password });
      localStorage.setItem("@learn-up:token", res.data.token);
      setToken(res.data.token);
      router.replace("/dashboard");
      
    } catch (error) {
      console.log(error);
    }
  }
  
  const signOut = () => {
    localStorage.removeItem("@learn-up:token");
    setIsLoggedIn(false);
    setUser({} as IUserProps);
    router.push("/login");
  } 

  const registerUser = async ({username, name, email, password}: IRegisterUserProps) => {
    try {
      await api.post("/users", {username, name, email, password});
      router.push("/login");

    } catch (error) {
      console.log(error);
    }
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
        signIn,
        signOut,
        registerUser,
      }}
    >
      {children}
    </LearnUpContext.Provider>
  )
}

export default LearnUpProvider;
