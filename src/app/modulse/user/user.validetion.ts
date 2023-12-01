import { z } from "zod";

export const userSchemaValidation = z.object({
  id: z.string(),
  password: z.string({
    invalid_type_error: 'password must be a string'
  }).max(20, { message: "password cannot be less than 20 characters" }).optional(),
  needsPasswordChange: z.boolean().optional().default(true),
})