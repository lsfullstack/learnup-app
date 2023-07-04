import { z } from "zod";

const timelineSchema = z.object({
  time: z.string().nonempty("Campo obrigatório!"),
  description: z.string().nonempty("Campo obrigatório!"),
});

export default timelineSchema;
