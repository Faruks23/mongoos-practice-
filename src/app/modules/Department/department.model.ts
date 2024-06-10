import { Schema, model } from "mongoose";
import { TAcademicDepartment } from "./department.interface";
import AppError from "../../error/AppError";
import httpStatus from "http-status";


const AcademicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: [true, 'AcademicDepartment is required'],
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      required: [true, 'AcademicDepartment is required'],
      ref: 'AcademicFaculty',
      trim:true,
    },
  },
  {
    timestamps: true,
  },
)






AcademicDepartmentSchema.pre('save', async function (next) {
  
  const isExistDepartment = await AcademicDepartmentModel.findOne({
    name:this.name,
  })
  if (isExistDepartment) {
    throw new AppError(httpStatus.NOT_FOUND ,`${this.name} already exists`)
  }
  next()
})


AcademicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  
  const query=this.getQuery()
  const isExistDepartment = await AcademicDepartmentModel.findOne(query)
  if (!isExistDepartment) {
    throw new AppError(httpStatus.NOT_FOUND,`this is not exists`)
  }
  next()
})






 

export const AcademicDepartmentModel=model<TAcademicDepartment>("AcademicDepartment",AcademicDepartmentSchema)