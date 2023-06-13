import { z } from "zod";

const studyTopicSchema = z.object({
  name: z.string().nonempty("Campo obrigatório!"),
  description: z.string().nonempty("Campo obrigatório!"),
  categories: z.string().nonempty("Campo obrigatório!"),
});

export default studyTopicSchema;
