import { z } from "zod";


export const FacultyValidation = z.object({
  name: z.string()
})