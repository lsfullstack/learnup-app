import { z } from "zod";

const loginSchema = z.object({
  email: z.string().nonempty("Campo obrigatório!").email("Deve ser um email válido!"),
  password: z.string().nonempty("Campo obrigatório!"),
  rememberme: z.boolean(),
});

export default loginSchema;
