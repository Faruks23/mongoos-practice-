import { z } from 'zod'
import { AcademicSemesterCodeSchema, AcademicSemesterNameSchema, MonthsSchema } from './academicSemester.const'

export const CreateAcademicSemesterValidation = z.object({
  body: z.object({
    name: z.enum([...AcademicSemesterNameSchema] as [string, ...string[]]),
    year: z.string(),
    code: z.enum([...AcademicSemesterCodeSchema] as [string, ...string[]]),
    startMonth: z.enum([...MonthsSchema] as [string, ...string[]]),
    endMonth: z.enum([...MonthsSchema] as [string, ...string[]])
  }),
})


export const updateAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcademicSemesterNameSchema] as [string, ...string[]]).optional(),
    year: z.string().optional(),
    code: z.enum([...AcademicSemesterCodeSchema] as [string, ...string[]]).optional(),
    startMonth: z.enum([...MonthsSchema] as [string, ...string[]]).optional(),
    endMonth: z.enum([...MonthsSchema] as [string, ...string[]]).optional(),
  }),
})