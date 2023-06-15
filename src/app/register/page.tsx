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
import { useContext } from "react";
import { LearnUpContext } from "@/context";
import { zodResolver } from "@hookform/resolvers/zod";
import registerUserSchema from "./validations";
import { IRegisterUserProps } from "@/context/interface";


export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm<IRegisterUserProps>({
    resolver: zodResolver(registerUserSchema)
  });
  const { registerUser } = useContext(LearnUpContext);

  return (
    <main
      className="h-screen flex"
    >
      <div className="w-[50%] h-screen hidden lg:block left-0 ">
        <Image src={bgImage} alt="bg-image" className="h-screen  object-rigth object-cover" />
      </div>
      <div className="w-full h-full flex flex-col justify-between items-center lg:w-[50%] px-8 py-4 overflow-auto">
        <Image src={logo} alt="LearnUp Logo" className="w-full max-w-[400px] animate-fade-in-and-down" />
        <div className="w-full flex flex-col items-center animate-fade-in-and-left">
          <div className="flex flex-col items-center">
            <p className="font-heading_1 text-heading_2">Cadastre-se</p>
            <p className="font-enphasis text-center">Bem-vindo(a) a plataforma da <span className="text-brand-1">learn</span><span className="text-brand-4">Up</span>!</p>
            <p className="font-enphasis">Cadastre-se e comece a estudar.</p>
          </div>

          <Form  onSubmit={handleSubmit(registerUser)}>
            <Input 
              model="input-label" 
              name="name" 
              placeholder="Digite seu nome" 
              label="Nome" 
              type="text" 
              register={register}
              error={errors.name}
            />

            <Input 
              model="input-label" 
              name="username" 
              placeholder="Digite seu nome de usuário. Ex: felipe_silva" 
              label="Usuário" 
              type="text" 
              register={register}
              error={errors.username}
              maxLength={20}
            />

            <Input 
              model="input-label" 
              name="email" 
              placeholder="Digite seu email" 
              label="Email" 
              type="email" 
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

            <Input 
              model="input-label" 
              name="confirmPassword" 
              placeholder="Digite sua senha novamente" 
              label="Confirmar Senha" 
              type="password"
              register={register}
              error={errors.confirmPassword}
            />

            <Button styleType="blue" >Cadastrar</Button>
            <span className="w-full flex flex-wrap gap-1">Já possui uma conta? <TargetLink href="/login" styleType="blue">Faça login!</TargetLink></span>
          </Form>
        </div>
        <DevelopersLink styleType="grey" />
      </div>
    </main>
  );
}