import httpStatus from 'http-status'
import AppError from '../../error/AppError'
import { academicSemesterCodeMapper } from './academicSemester.constent'
import { TAcademicSemester } from './academicSemester.interface'
import { academicSemesterModel } from './academicSemester.model'

const createAcademicSemesterDB = async (data: TAcademicSemester) => {

  if (academicSemesterCodeMapper[data.name] !== data.code) {
    throw new  AppError(httpStatus.NOT_ACCEPTABLE, `${data.code} is not a valid semester code`) 
  }
  const newSemester = await academicSemesterModel.create(data)
  return newSemester
}

const getAllSemesters = async () => {
  const semesters = await academicSemesterModel.find()
    return semesters
}


const getSingleSemesters = async (id:string) => {
  const semesters = await academicSemesterModel.findById(id)
    return semesters
}
const updateAcademicSemesterIntoDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterCodeMapper[payload.name] !== payload.code
  ) {
    throw new AppError(httpStatus.NOT_ACCEPTABLE, `code is  not valid `)
  }

  const result = await academicSemesterModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}



export const AcademicSemesterService = {
  createAcademicSemesterDB,
  getAllSemesters,
  getSingleSemesters,
  updateAcademicSemesterIntoDB
}
