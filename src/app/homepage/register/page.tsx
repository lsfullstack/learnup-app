"use client";

import Image from "next/image";
import logo from "../../../../public/images/logo-call-to-action.png";
import { Form } from "@/components/Form";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { TargetLink } from "@/components/TargetLink";
import { DevelopersLink } from "@/components/DevelopersLink";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { LearnUpContext } from "@/context";
import { zodResolver } from "@hookform/resolvers/zod";
import { IRegisterUserProps } from "@/context/interface";
import registerUserSchema from "./validations";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUserProps>({
    resolver: zodResolver(registerUserSchema),
  });
  const { registerUser } = useContext(LearnUpContext);

  return (
    <div className="flex h-full w-full flex-col items-center justify-between overflow-auto px-8 py-4 lg:w-[50%]">
      <Image
        src={logo}
        alt="LearnUp Logo"
        className="w-full max-w-[400px] animate-fade-in-and-down"
      />
      <div className="flex w-full animate-fade-in-and-left flex-col items-center">
        <div className="flex flex-col items-center">
          <p className="text-heading_2 font-heading_1">Cadastre-se</p>
          <p className="text-center font-enphasis">
            Bem-vindo(a) a plataforma da{" "}
            <span className="text-brand-1">learn</span>
            <span className="text-brand-4">Up</span>!
          </p>
          <p className="font-enphasis">Cadastre-se e comece a estudar.</p>
        </div>

        <Form onSubmit={handleSubmit(registerUser)}>
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

          <Button styleType="blue">Cadastrar</Button>
          <span className="flex w-full flex-wrap gap-1">
            Já possui uma conta?{" "}
            <TargetLink href="/homepage/login" styleType="blue">
              Faça login!
            </TargetLink>
          </span>
        </Form>
      </div>
      <DevelopersLink styleType="grey" />
    </div>
  );
}
