import { z } from "zod";

const videoSchema = z.object({
  title: z.string().nonempty("Campo obrigatório!"),
  link: z.string().nonempty("Campo obrigatório!"),
});

export default videoSchema;
