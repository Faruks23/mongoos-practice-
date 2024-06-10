import { TAcademicDepartment } from "./department.interface";
import { AcademicDepartmentModel } from "./department.model";

const createAcademicDepartment = async (payload:TAcademicDepartment) => {
  const AcademicDepartment = await AcademicDepartmentModel.create(payload);
  return AcademicDepartment;
}

const getAllAcademicDepartment = async () => {
  const AcademicDepartment =
    await AcademicDepartmentModel.find().populate('academicFaculty')
  return AcademicDepartment
}

const getSingleAcademicDepartment = async (id: string) => {
  const AcademicDepartment = await AcademicDepartmentModel.findById(id)
  return AcademicDepartment
  
}

const updateAcademicAcademicDepartmentIntoDB = async (
  id: string,
  payload: Partial<TAcademicDepartment>,
) => {
  const result = await AcademicDepartmentModel.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  )
  return result
}


export const AcademicDepartmentService = {
   createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updateAcademicAcademicDepartmentIntoDB
}