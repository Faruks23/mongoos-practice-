/* eslint-disable @typescript-eslint/no-unused-vars */
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicFacultyService } from "./Faculty.service";


const createAcademicFaculty = catchAsync(async (req,res,next) => {
  const FacultyData = req.body;
  const Faculty = await AcademicFacultyService.createAcademicFaculty(FacultyData)
  sendResponse(res, {
    data: Faculty,
    message:"AcademicFaculty created successfully"
  })

})

const getAcademicFaculty = catchAsync(async (req, res, next) => {
  const result = await AcademicFacultyService.getAllFaculty()

  sendResponse(res, {
    data: result,
    message: 'Academic-faculty retrieve  successfully',
  })
})

const getSingleAcademicFaculty = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const result = await AcademicFacultyService.getSingleFaculty(id)

  sendResponse(res, {
    data: result,
    message: 'Academic-Faculty retrieve  successfully',
  })
})

const updateAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params
  const result = await AcademicFacultyService.updateAcademicFacultyIntoDB(
    facultyId,
    req.body,
  )

  sendResponse(res, {
    message: 'Academic faculty is updated successfully',
    data: result,
  })
})



export const AcademicFacultyController = {
  createAcademicFaculty,
  getAcademicFaculty,
  getSingleAcademicFaculty,
  updateAcademicFaculty
}