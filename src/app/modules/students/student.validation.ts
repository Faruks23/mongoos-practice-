import { z } from 'zod'

const userNameSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .refine(value => /^[A-Z]/.test(value), {
      message: 'First Name must start with a capital letter',
    }),
  middleName: z.string(),
  lastName: z.string(),
})

const guardianSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
})

const localGuardianSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
})

export const studentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: userNameSchema,
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.string(),
      email: z.string().email(),
      contactNo: z.string(),
      emergencyContact: z.string(),
      bloodGroups: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      guardian: guardianSchema,
      localGuardian: localGuardianSchema,
      profileImg: z.string(),
      admissionSemester: z.string(),
      academicDepartment: z.string()
      
    }),
  }),
})



export const studentUpdateValidationSchema = z.object({
  body: z
    .object({
      password: z.string().max(20).optional(),
      student: z
        .object({
          name: userNameSchema.partial(),
          gender: z.enum(['male', 'female', 'other']).optional(),
          dateOfBirth: z.string().optional(),
          email: z.string().email().optional(),
          contactNo: z.string().optional(),
          emergencyContact: z.string().optional(),
          bloodGroups: z
            .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
            .optional(),
          presentAddress: z.string().optional(),
          permanentAddress: z.string().optional(),
          guardian: guardianSchema.partial(),
          localGuardian: localGuardianSchema.partial(),
          profileImg: z.string().optional(),
          admissionSemester: z.string().optional(),
          academicDepartment: z.string().optional(),
        })
        .partial(),
    })
    .partial(),
})
export const studentValidations= {
  studentValidationSchema,
  studentUpdateValidationSchema
}
