import { z } from "zod";

const extraContentSchema = z.object({
  title: z.string().nonempty("Campo obrigatório!"),
  link: z.string().nonempty("Campo obrigatório!"),
});

export default extraContentSchema;
