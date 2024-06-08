/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { userService } from "./user.service"
import sendResponse from "../../utils/sendResponse";
import { catchAsync } from "../../utils/catchAsync";


const createStudent = catchAsync(async (req,res, next) => {

      const { password, student } = req.body
      const result = await userService.createStudentIntoDB(password, student)
      sendResponse(res, {
        data: result,
        message: 'user created successfully',
      })
   
  },
)




export const userController = {
  createStudent
}
