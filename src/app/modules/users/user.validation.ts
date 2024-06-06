import { z } from 'zod'

export const userValidationSchema = z.object({
  id: z.string(),
  password: z.string({invalid_type_error:"password must be string"}).max(20,{message:'password cannot be more than 20 characters'}).optional(),
  statues:z.enum(['in-progress', 'blocked']).default('in-progress'),

})

export default userValidationSchema
