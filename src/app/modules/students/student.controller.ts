/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, RequestHandler, Response } from 'express'
import { StudentServices } from './student.service'
import sendResponse from '../../utils/sendResponse'
import { catchAsync } from '../../utils/catchAsync'







const getAllStudents = catchAsync(async (req, res, next) => {
    
      const result = await StudentServices.getAllStudentsFromDB()
     
      sendResponse(res, {
        data: result,
        message: 'student are retrieved successfully',
      })
    
  },
)


const getSingleStudent = catchAsync( async (req, res, next) => {
   
      const { studentId } = req.params

      const result = await StudentServices.getSingleStudentFromDB(studentId)

      sendResponse(res, {
        data: result,
        message: 'Single student are retrieved successfully',
      })
    
  },
)


const deleteStudent = catchAsync( async (req,res,next) => {
    
      const { studentId } = req.params

      const result = await StudentServices.deleteStudentFromDB(studentId)

      sendResponse(res, {
        data: result,
        message: 'student is deleted successfully',
      })
  
  },
)

export const StudentControllers = {
  
  getAllStudents,
  getSingleStudent,
  deleteStudent,
}
