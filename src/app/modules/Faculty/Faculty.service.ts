import { TAcademicFaculty } from "./Faculty.interface";
import { AcademicFacultyModel } from "./Faculty.model";

const createAcademicFaculty = async (payload:TAcademicFaculty) => {
  const Faculty = await AcademicFacultyModel.create(payload);
  return Faculty;
}

const getAllFaculty = async () => {
  const faculty = await AcademicFacultyModel.find()
  return faculty
}

const getSingleFaculty = async (id: string) => {
  const faculty = await AcademicFacultyModel.findById(id)
  return faculty
}

const updateAcademicFacultyIntoDB = async ( id: string,payload: Partial<TAcademicFaculty>) => {
  const result = await AcademicFacultyModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}


export const AcademicFacultyService = {
  createAcademicFaculty,
  getAllFaculty,
  getSingleFaculty,
  updateAcademicFacultyIntoDB
}