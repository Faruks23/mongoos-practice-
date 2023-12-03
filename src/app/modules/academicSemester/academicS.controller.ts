/* eslint-disable @typescript-eslint/no-explicit-any */
import SendResponse from '../../utils/sendRespons'
import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import { AcademicSemesterService } from './academicS.service'

const createAcademicSemester = catchAsync(async (req, res) => {
 
  const result = await AcademicSemesterService.createAcademicSemesterIntoDB(req.body)

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Semester created successfully',
    data: result,
  })
})


const getAllAcademicSemesters = catchAsync(async (req, res) => {
  const result = await AcademicSemesterService.getAllAcademicSemestersFromDB()

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semesters are retrieved successfully',
    data: result,
  })
})

const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params
  const result =
    await AcademicSemesterService.getSingleAcademicSemesterFromDB(semesterId)

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is retrieved succesfully',
    data: result,
  })
})

const updateAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params
  const result = await AcademicSemesterService.updateAcademicSemesterIntoDB(
    semesterId,
    req.body,
  )

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is retrieved succesfully',
    data: result,
  })
})





export const AcademicSemesterController = {
  createAcademicSemester,
  updateAcademicSemester,
  getSingleAcademicSemester,
  getAllAcademicSemesters,
  
}
