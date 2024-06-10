import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { AcademicDepartmentController } from './department.controller'
import { AcademicDepartmentValidation } from './department.validation'

const route = express.Router()


route.post('/create-AcademicDepartment',validateRequest(
 AcademicDepartmentValidation.DepartmentValidationSchema),
AcademicDepartmentController.createAcademicAcademicDepartment,
)


route.get(
  '/get-AcademicDepartment',
  AcademicDepartmentController.getAcademicAcademicDepartment,
)

route.get(
  '/get-single-AcademicDepartment/:id',
  AcademicDepartmentController.getSingleAcademicAcademicDepartment,
)

route.patch(
  '/:AcademicDepartmentId',
  validateRequest(
    AcademicDepartmentValidation.updateDepartmentValidationSchema,
  ),
  AcademicDepartmentController.updateAcademicAcademicDepartment,
)

export const AcademicAcademicDepartmentRoute = route
