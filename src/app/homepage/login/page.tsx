"use client";

import Image from "next/image";
import bgImage from "../../../public/images/bg-image.jpg";
import logo from "../../../../public/images/logo-call-to-action.png";
import { Form } from "@/components/Form";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { TargetLink } from "@/components/TargetLink";
import { DevelopersLink } from "@/components/DevelopersLink";
import { useForm } from "react-hook-form";
import { ISignInProps } from "@/context/interface";
import React, { useContext, useState } from "react";
import { LearnUpContext } from "@/context";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "./validations";
import { useRouter } from "next/navigation";

export default function Login() {
  const [rememberMe, setRememberMe] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInProps>({
    resolver: zodResolver(loginSchema),
  });
  const { signIn } = useContext(LearnUpContext);
  const router = useRouter();
  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleFormSubmit = (data: ISignInProps) => {
    if (rememberMe) {
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 30);
      document.cookie = `rememberMe=true; expires=${expirationDate.toUTCString()}; path=/`;
    } else {
      document.cookie =
        "rememberMe=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    signIn(data);
    router.push("/dashboard");
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-between overflow-auto px-8 py-4 lg:w-[50%]">
      <Image
        src={logo}
        alt="LearnUp Logo"
        className="w-full max-w-[400px] animate-fade-in-and-down"
      />
      <div className="flex w-full animate-fade-in-and-left flex-col items-center">
        <div className="flex flex-col items-center">
          <p className="text-heading_2 font-heading_1">Login</p>
          <p className="text-center font-enphasis">
            Bem-vindo(a) a plataforma da{" "}
            <span className="text-brand-1">learn</span>
            <span className="text-brand-4">Up</span>!
          </p>
          <p className="font-enphasis">Entre para estudar.</p>
        </div>

        <Form onSubmit={handleSubmit(handleFormSubmit)}>
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
          <TargetLink href="/forgot-password" styleType="grey">
            Esqueci minha senha
          </TargetLink>
          <div className="flex w-full items-center gap-2 ">
            <input
              type="checkbox"
              placeholder="Lembrar de mim"
              id="rememberMeCheckbox"
              className="h-5 w-5 cursor-pointer rounded-sm"
              checked={rememberMe}
              {...register("rememberme", { onChange: handleRememberMeChange })}
            />
            <label htmlFor="rememberme" className="cursor-pointer">
              Lembrar de mim
            </label>
          </div>

          <Button styleType="blue">Login</Button>
          <span className="flex w-full flex-wrap gap-1">
            Ainda não possui uma conta?{" "}
            <TargetLink href="/homepage/register" styleType="blue">
              Cadastre-se!
            </TargetLink>
          </span>
        </Form>
      </div>
      <DevelopersLink styleType="grey" />
    </div>
  );
}
