import { z } from "zod";

const lessonSchema = z.object({
  title: z.string().nonempty("Campo obrigatório!"),
});

export default lessonSchema;
