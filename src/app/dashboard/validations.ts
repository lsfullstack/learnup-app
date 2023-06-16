import * as z from "zod";

export const dashboarSchema = z.object({
  search: z.string().nonempty(),
});
