import config from '../../config'
import { TAcademicSemester } from '../academicSemester/academicS.interface'
import { AcademicSemester } from '../academicSemester/academicS.model'
import { TStudent } from '../student/student.interface'
import { Student } from '../student/student_model'
import { User } from './user.interface'
import { userModel } from './user.model'
import { generateStudentId } from './user.utils'


const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // if (await Student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists!')
  // }
  // create a user object
  const userData: Partial<User> = {}
  const FindAdmissionSemester = await AcademicSemester.findById(payload.admissionSemester)
  
  userData.id= await generateStudentId(FindAdmissionSemester as TAcademicSemester)
    
  userData.password = password || (config.defaultPassword as string)
  // set student role
  userData.role = 'student'

  // create user
  const NewUser = await userModel.create(userData)

  // create student
  if (Object.keys(NewUser).length) {
    //  set id,  _id as a user
    payload.id = NewUser.id
    payload.user = NewUser._id

    const newStudent = await Student.create(payload)
    return newStudent
  }
}

export const userService = {
  createStudentIntoDB,
}
