/* eslint-disable @typescript-eslint/no-unused-vars */
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicDepartmentService } from "./department.service";


const createAcademicAcademicDepartment = catchAsync(async (req,res,next) => {
  const department = req.body;
  const AcademicDepartment =await AcademicDepartmentService.createAcademicDepartment(department); //
  sendResponse(res, {
    data: AcademicDepartment,
    message:"department created successfully"
  })

})

const getAcademicAcademicDepartment = catchAsync(async (req, res, next) => {
  const result = await AcademicDepartmentService.getAllAcademicDepartment()

  sendResponse(res, {
    data: result,
    message: 'Academic-Department retrieve  successfully',
  })
})

const getSingleAcademicAcademicDepartment = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const result = await AcademicDepartmentService.getSingleAcademicDepartment(id)

  sendResponse(res, {
    data: result,
    message: 'Academic-Department retrieve  successfully',
  })
})

const updateAcademicAcademicDepartment = catchAsync(async (req, res) => {
  const { AcademicDepartmentId } = req.params
  const result =
    await AcademicDepartmentService.updateAcademicAcademicDepartmentIntoDB(
      AcademicDepartmentId,
      req.body,
    )

  sendResponse(res, {
    message: 'Academic Department is updated successfully',
    data: result,
  })
})



export const AcademicDepartmentController = {
  createAcademicAcademicDepartment,
  getAcademicAcademicDepartment,
  getSingleAcademicAcademicDepartment,
  updateAcademicAcademicDepartment
}