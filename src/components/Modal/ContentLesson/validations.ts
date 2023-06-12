import { z } from "zod";

export const annotationSchema = z.object({
  annotation: z.string().nonempty("Campo obrigatório!"),
});

export const linkSchema = z.object({
  link: z.string().nonempty("Campo obrigatório!"),
});
