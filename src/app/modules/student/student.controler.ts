/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, RequestHandler, Response } from 'express'
import { StudentServices } from './student.service'
import SendResponse from '../../utils/sendRespons'
import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'



const getAllStudent = catchAsync(async (req, res) => {

    const result = await StudentServices.getAllStudentsFromDB()
    SendResponse(res, { 
      success: true,
      statusCode: httpStatus.OK,
      message: 'Student retrieve successfully',
      data: result,
    })
 
}

)

const getSingleStudent: RequestHandler = catchAsync(async (req, res) => {
 
    const { StudentId } = req.params
    console.log(StudentId)
    const result = await StudentServices.getSingleStudentFromDB(StudentId)

    SendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: ' getSingle student  successfully',
      data: result,
    })
 
})

const deleteStudentDB: RequestHandler = catchAsync(async (req, res) => {

    const { StudentId } = req.params
    const result = await StudentServices.deleteStudentFromDB(StudentId)

    SendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: ' student delete successfully',
      data: result,
    })
 
})
export const StudentController = {
  getAllStudent,
  getSingleStudent,
  deleteStudentDB,
}
function next(err: any): any {
  throw new Error('Function not implemented.')
}

