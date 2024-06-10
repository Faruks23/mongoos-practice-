import { z } from "zod";


 const AcademicFacultyValidationSchema = z.object({
  body: z.object({
     name:z.string()
   })
})
 
const updateAcademicFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic faculty must be string',
    }),
  }),
})




export const AcademicFacultyValidation = {
  AcademicFacultyValidationSchema,
  updateAcademicFacultyValidationSchema
}