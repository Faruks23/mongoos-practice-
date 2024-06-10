/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from 'mongoose'
import { Student } from './student.model'
import AppError from '../../error/AppError'
import httpStatus from 'http-status'
import { userModel } from '../users/user.model'
import { TStudent } from './student.interface'

const getAllStudentsFromDB = async (query:Record<string,unknown>) => {

  let searchTerm = ''
  if (query?.searchTerm) {
    searchTerm = query.searchTerm as string
    
  } 
  console.log(query)
  const studentsSearchableField =['email','name.firstName','presentAddress']


  const result = await Student.find({
    $or:studentsSearchableField.map((field) => ({
      [field]:{ $regex: searchTerm ,$options:'i'}
    }))
    
  })
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    })
  
  
  
  
  return result
}

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.aggregate([{ $match: { id } }])
  return result
}

const deleteStudentFromDB = async (id: string) => {
  const session = await mongoose.startSession()
  try {
    session.startTransaction()
    const deletedStudent = await Student.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    )
    if (!deletedStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Student is not deleted')
    }
    const deletedUser = await userModel.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    )
    if (!deletedUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'user is not deleted')
    }
    await session.commitTransaction()
    await session.endSession()

    return deletedStudent
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw new AppError(httpStatus.BAD_REQUEST, 'student $ user is not deleted')
  }
}

const updateStudentIntoDb = async (id: string, payload: Partial<TStudent>) => {
  const { name, localGuardian, guardian, ...remainingData } = payload

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingData,
  }

  if (name && Object.keys(name).length) {
    for (const [keys, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${keys}`] = value
    }
  }
  if (guardian && Object.keys(guardian).length) {
    for (const [keys, value] of Object.entries(guardian)) {
      modifiedUpdatedData[`guardian.${keys}`] = value
    }
  }
  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [keys, value] of Object.entries(localGuardian)) {
      modifiedUpdatedData[`localGuardian.${keys}`] = value
    }
  }
  const updatedData = await Student.findOneAndUpdate({
    id
  }, modifiedUpdatedData,
    {new: true,runValidators:true}
  )

  return updatedData
}

export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
  updateStudent: updateStudentIntoDb,
}
