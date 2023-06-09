"use client";

import Image from "next/image";
import bgImage from "../../../public/images/bg-image.jpg";
import logo from "../../../public/images/logo-call-to-action.png";
import { Form } from "@/components/Form";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { TargetLink } from "@/components/TargetLink";
import { DevelopersLink } from "@/components/DevelopersLink";
import { useForm } from "react-hook-form";
import { ISignInProps } from "@/context/interface";
import { useContext } from "react";
import { LearnUpContext } from "@/context";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "./validations";

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<ISignInProps>({
    resolver: zodResolver(loginSchema)
  });
  const { signIn } = useContext(LearnUpContext);

  return (
    <main
      className="h-screen flex"
    >
      <div className="w-[50%] h-screen hidden lg:block left-0 ">
        <Image src={bgImage} alt="bg-image" className="h-screen  object-rigth object-cover" />
      </div>
      <div className="w-full h-full flex flex-col justify-between items-center lg:w-[50%] px-8 py-4 overflow-auto">
        <Image src={logo} alt="LearnUp Logo" className="w-full max-w-[400px]" />
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col items-center">
            <p className="font-heading_1 text-heading_2">Login</p>
            <p className="font-enphasis text-center">Bem-vindo(a) a plataforma da <span className="text-brand-1">learn</span><span className="text-brand-4">Up</span>!</p>
            <p className="font-enphasis">Entre para estudar.</p>
          </div>

          <Form  onSubmit={handleSubmit(signIn)}>
            <Input 
              model="input-label" 
              name="email" 
              placeholder="Digite seu email" 
              label="Email" 
              type="text" 
              register={register}
              error={errors.email}
            />

            <Input 
              model="input-label" 
              name="password" 
              placeholder="Digite sua senha" 
              label="Senha" 
              type="password"
              register={register}
              error={errors.password}
            />
            <TargetLink href="/forgot-password" styleType="grey">Esqueci minha senha</TargetLink>
            <div className="w-full flex items-center gap-2 ">
              <input 
                type="checkbox" 
                placeholder="Lembrar de mim" 
                id="rememberme" 
                className="w-5 h-5 rounded-sm cursor-pointer"
                {...register("rememberme")}
              />
              <label htmlFor="rememberme" className="cursor-pointer">Lembrar de mim</label>
            </div>

            <Button styleType="blue" >Login</Button>
            <span className="w-full flex flex-wrap gap-1">Ainda não possui uma conta? <TargetLink href="/register" styleType="blue">Cadastre-se!</TargetLink></span>
          </Form>
        </div>
        <DevelopersLink styleType="grey" />
      </div>
    </main>
  );
}
