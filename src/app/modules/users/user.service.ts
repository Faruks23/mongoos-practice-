
import mongoose from "mongoose"
import config from "../../config"
import { TAcademicSemester } from "../academicSemester/academicSemester.interface"
import { academicSemesterModel } from "../academicSemester/academicSemester.model"
import { TStudent } from "../students/student.interface"
import { Student } from "../students/student.model"
import { TUser } from "./user.interface"
import { userModel } from "./user.model"
import { generateStudentId } from "./user.utils"
import AppError from "../../error/AppError"
import httpStatus from "http-status"

const createStudentIntoDB = async (password:string,studentData:TStudent) => {
  
  const userData:Partial<TUser>={
  }
  const AcademicSemester = await academicSemesterModel.findById(studentData.admissionSemester)

  const session = await mongoose.startSession()
  
  try {
    session.startTransaction()

  userData.password = password || (config.defaultPassword as string)
  // set student role
  userData.role = 'student'
  userData.id = await generateStudentId(AcademicSemester as TAcademicSemester)
  // create  a user
  const newUser = await userModel.create([userData], { session })

  // create a student
  if (!newUser.length) {
    throw new AppError(httpStatus.BAD_REQUEST,'failed to create user')
    }
    

    studentData.id = newUser[0].id
    studentData.user = newUser[0]._id
     


    const newStudent = await Student.create([studentData], { session })
    if (!newStudent) {
      throw new AppError(httpStatus.BAD_REQUEST,'failed to create student')
    }
    await session.commitTransaction()
    await session.endSession()
    
    return newStudent

  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
     throw new AppError(httpStatus.BAD_REQUEST,'failed to create student')
  }
  




}


export const userService = {
  createStudentIntoDB
}