import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { userModel } from "./user.model";


export const LastStudent =async () => {
  const lastStudent = await userModel.findOne(
    {
      role:"student"
    },
    {
      id: 1,
    _id: 0
    }).sort({
      createdAt:-1,
    }).lean();
  return lastStudent?.id?lastStudent.id:undefined
}



export const generateStudentId =async (AcademicSemester: TAcademicSemester) => {

  let currentId = (0).toString()
  const lastStudentId= await LastStudent()
  
  const lastSemesterCode=lastStudentId?.substring(4,6)
  const lastSemesterYear = lastStudentId?.substring(0, 4)
  const newSemesterCode = AcademicSemester.code;
  const newSemesterYear = AcademicSemester.year;
 
  if (lastStudentId && lastSemesterCode === newSemesterCode && lastSemesterYear === newSemesterYear) {

    currentId = lastStudentId.substring(6)
    
  }

  console.log(currentId)
  let incrementId = (Number(currentId) + 1).toString().padStart(4, "0")
  incrementId = `${AcademicSemester.year}${AcademicSemester.code}${incrementId}`
  
  return incrementId

}

