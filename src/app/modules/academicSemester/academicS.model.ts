import { Schema, model } from 'mongoose'
import {TAcademicSemester} from './academicS.interface'
import { AcademicSemesterCodeSchema, AcademicSemesterNameSchema, MonthsSchema } from './academicSemester.const'

const AcademicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: 'string',
    enum:AcademicSemesterNameSchema
  },
  code: {
    type: 'string',
    enum:AcademicSemesterCodeSchema ,
  },
  year: {
    type: 'string',
  },
  startMonth: {
    type: 'string',
    enum: MonthsSchema,
    required:true,
  },
  endMonth: {
    type: 'string',
    enum: MonthsSchema,
    required:true,
  },
})

AcademicSemesterSchema.pre('save', async function (next) {
  const isSemesterExist = await AcademicSemester.findOne({
    year:this.year,
    name: this.name,
  })
  if (isSemesterExist) {
    throw new Error ('Semester already exists')
  }
  next()

 })



export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  AcademicSemesterSchema,
)
