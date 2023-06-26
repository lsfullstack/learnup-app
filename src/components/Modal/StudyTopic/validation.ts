import { z } from "zod";

const studyTopicSchema = z.object({
  title: z.string().nonempty("Campo obrigatório!"),
  description: z.string().nonempty("Campo obrigatório!"),
  categories: z
    .string()
    .nonempty("Campo obrigatório!")
    .transform((categories) => categories.split(",")),
});

export default studyTopicSchema;
