import { z } from "zod";

const annotationSchema = z.object({
  annotation: z.string().nonempty("Campo obrigatório!"),
});

export default annotationSchema;
