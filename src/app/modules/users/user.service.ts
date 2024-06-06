import config from "../../config"
import { NewUser, TUser } from "./user.interface"
import { userModel } from "./user.model"

const createStudentIntoDB = async (password:string,studentData: TUser) => {
  // if (await Student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists!')
  // }
  const user:NewUser={
    password: "",
    role: ""
  }

  user.password=password || config.defaultPassword as string
  // set student role
  user.role = 'student'
  // create  a user
  const result = await userModel.create(studentData)
  return result
}


export const userService = {
  createStudentIntoDB
}