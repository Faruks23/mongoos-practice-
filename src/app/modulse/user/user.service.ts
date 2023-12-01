
import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student_model";
import { User } from "./user.interface";
import { userModel } from "./user.model"

// const createUserIntoDB = async (user:User) => {
  
//   const result = await userModel.create(user);
//   return result;

// }

const createStudentIntoDB = async (password:string,studentData:TStudent) => {
  // if (await Student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists!')
  // }
  // create a user object
  const userData:Partial<User> = {
  }

  // set manually id

userData.id='2030100001'

  userData.password = password || config.defaultPassword as string
  // set student role
  userData.role = 'student'
  
// create user 
  const NewUser = await userModel.create(userData)
  
  // create student
  if (Object.keys(NewUser).length) {
    //  set id,  _id as a user
    studentData.id = NewUser.id;
    studentData.user = NewUser._id;
    
    const newStudent = await Student.create(studentData);
     return newStudent;
  }
}




export const userService = {
  createStudentIntoDB
}