import { z } from "zod";


 const DepartmentValidationSchema = z.object({
   body: z.object({
     name: z
       .string({
         invalid_type_error: 'Academic Department must be string',
       }),
     academicFaculty: z.string(),
   }),
 })
 

const updateDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Department must be string',
    }).optional(),
    academicFaculty: z.string().optional(),
  }),
})




export const AcademicDepartmentValidation = {
  DepartmentValidationSchema,
  updateDepartmentValidationSchema
}