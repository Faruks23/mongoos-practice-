/* eslint-disable @typescript-eslint/no-unused-vars */
import { catchAsync } from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { AcademicSemesterService } from "./academicSemester.service"

const CreateAcademicSemester = catchAsync(async (req, res, next) => {
  const academicSemester = req.body
  const result = await AcademicSemesterService.createAcademicSemesterDB(academicSemester)

  sendResponse(res, {
    data: result,
    message: 'Academic-Semester created  successfully',
  })
})

const getAcademicSemester = catchAsync(async (req, res, next) => {
  const result = await AcademicSemesterService.getAllSemesters()

  sendResponse(res, {
    data: result,
    message: 'Academic-Semester retrieve  successfully',
  })
})

const getSingleAcademicSemester = catchAsync(async (req, res, next) => {
  const {id}=req.params
  const result = await AcademicSemesterService.getSingleSemesters(id)

  sendResponse(res, {
    data: result,
    message: 'Academic-Semester retrieve  successfully',
  })
})

const updateAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params
  const result = await AcademicSemesterService.updateAcademicSemesterIntoDB(
    semesterId,
    req.body,
  )

  sendResponse(res, {
  
    message: 'Academic semester is retrieved successfully',
    data: result,
  })
})




export const academicSemesterController = {
  CreateAcademicSemester,
  getAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester
}