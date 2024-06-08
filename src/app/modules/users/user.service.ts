
import config from "../../config"
import { TAcademicSemester } from "../academicSemester/academicSemester.interface"
import { academicSemesterModel } from "../academicSemester/academicSemester.model"
import { TStudent } from "../students/student.interface"
import { Student } from "../students/student.model"
import { TUser } from "./user.interface"
import { userModel } from "./user.model"
import { generateStudentId } from "./user.utils"

const createStudentIntoDB = async (password:string,studentData:TStudent) => {
  // if (await Student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists!')
  // }
  const userData:Partial<TUser>={
  }



  const AcademicSemester=await academicSemesterModel.findById(studentData.admissionSemester)


  userData.password=password || config.defaultPassword as string 
  // set student role
  userData.role ='student'
  userData.id=await generateStudentId(AcademicSemester as TAcademicSemester) 
  // create  a user
  const newUser = await userModel.create(userData)

  // create a student
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;
    
    const newStudent = await Student.create(studentData)
    return newStudent
  }


}


export const userService = {
  createStudentIntoDB
}