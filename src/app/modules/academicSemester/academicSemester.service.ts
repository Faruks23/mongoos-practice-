import { academicSemesterCodeMapper } from './academicSemester.constent'
import { TAcademicSemester } from './academicSemester.interface'
import { academicSemesterModel } from './academicSemester.model'

const createAcademicSemesterDB = async (data: TAcademicSemester) => {

  if (academicSemesterCodeMapper[data.name] !== data.code) {
    throw new Error(`${data.code} is not a valid semester code`)
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

export const AcademicSemesterService = {
  createAcademicSemesterDB,
  getAllSemesters,
  getSingleSemesters,
}
