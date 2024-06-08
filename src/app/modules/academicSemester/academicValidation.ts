import { z } from "zod";

const AcademicSchemaValidation = z.object({
  body: z.object({
    name: z
      .enum(['Autumn', 'Summer', 'Fall'])
      .refine(value => ['Autumn', 'Summer', 'Fall'].includes(value), {
        message: '{VALUE} is not a valid Month',
      }),
    code: z
      .enum(['01', '02', '03'])
      .refine(value => ['01', '02', '03'].includes(value), {
        message: '{VALUE} is not a valid Code',
      }),
    year: z.string(),
    startMonth: z.enum([
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]),
    endMonth: z.enum([
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]),
  }),
})
export const academicSemester = {
  AcademicSchemaValidation
}
