import { TAcademicSemester } from "../academicSemester/academicS.interface";
import { userModel } from "./user.model";


const FindLaseStudentId = async () => {

  const lastStudent = await userModel
    .findOne(
      {
        role:'student',
      },
      {
        id: 1,
        _id: 0,
      },
    ).sort({createdAt:-1})
    .lean()
  return lastStudent?.id ? lastStudent?.id: undefined;
}

export const generateStudentId =async (payload: TAcademicSemester) => {
  let currentId = (0).toString()
  const lastStudentId = await FindLaseStudentId();
  const lastSemesterCode = lastStudentId?.substring(4, 6);
  const lastStudentYear = lastStudentId?.substring(0, 4);
  const currentSemesterCode = payload.code;
  const currentYear= payload.year;

  if (lastStudentId && lastSemesterCode === currentSemesterCode && lastStudentYear === currentYear) {
    currentId = lastStudentId.substring(6)
    
  }
  let increment = (Number(currentId) + 1).toString().padStart(4, '0')
  increment = `${payload.year}${payload.code}${increment}`
  return increment;


}