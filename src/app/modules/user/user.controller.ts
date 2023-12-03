/* eslint-disable @typescript-eslint/no-explicit-any */
import { userService } from "./user.service";
import SendResponse from "../../utils/sendRespons";
import httpStatus from "http-status"
import { catchAsync } from "../../utils/catchAsync";


const createStudent = catchAsync(async (req, res) => {
  
    const { password, student: studentData } = req.body
   

    const result = await userService.createStudentIntoDB(password, studentData)

    SendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Student created successfully',
      data: result,
    })
 
})



export const userController = {
  createStudent
}