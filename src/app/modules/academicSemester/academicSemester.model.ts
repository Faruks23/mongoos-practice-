/* eslint-disable @typescript-eslint/no-unused-vars */
import { Schema, model } from "mongoose";
import { TAcademicSemester } from "./academicSemester.interface";



const AcademicSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    enum: {
      values: ['Autumn', 'Summer', 'Fall'],
      message: '{VALUE} is not a valid Month',
    },
  },
  
  code: {
    type: String,
    enum: {
      values: ['01', '02', '03'],
      message: '{VALUE} is not a valid Code',
    },
  },
  year: {
    type:String
  },
  startMonth: {
    type: String,
    enum: {
      values:[  'January','February', 'March', 'April','May','June', 'July','August','September','October','November','December'] }
  },
  
  endMonth: {
    type: String,
    enum: {
      values:[  'January','February', 'March', 'April','May','June', 'July','August','September','October','November','December'] }
  },
  

}, {
  timestamps:true,
})

AcademicSchema.pre('save', async function (next) {
  const isSemesterExist =  await academicSemesterModel.findOne({
    name: this.name,
    year:this.year,
  })
  if (isSemesterExist) { 
    throw new Error (`Semester ${this.name} already exists'`);
  }
  next()
})



export const academicSemesterModel=model<TAcademicSemester>("AcademicSemester",AcademicSchema)