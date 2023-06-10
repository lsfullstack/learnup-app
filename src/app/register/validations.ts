import { z } from "zod";

const registerUserSchema = z.object({
  name: z
    .string()
    .nonempty("Campo obrigatório!")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos 1 letra minúscula!"),
  username: z
    .string()
    .nonempty("Campo obrigatório!")
    .min(7, "Deve conter pelo menos 7 catecteres!")
    .max(20),
  email: z
    .string()
    .nonempty("Campo obrigatório!")
    .email("Deve ser um email válido!"),
  password: z
    .string()
    .nonempty("Campo obrigatório!")
    .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos 1 caracter especial!")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos 1 letra maiúscula!")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos 1 letra minúscula!")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos 1 número!")
    .min(8, "Deve conter pelo menos 8 dígitos!"),
  confirmPassword: z.string().nonempty("Campo obrigatório!"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas precisam ser iguais!",
  path: ["confirmPassword"]
});

export default registerUserSchema;
