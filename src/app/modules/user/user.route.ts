import express from 'express'
import { userController } from './user.controller'

import { CreateStudentValidationSchema } from '../student/student.validation'
import { ValidateRequest } from '../../middleware/validateRequest'
const router = express.Router()

router.post('/create-student',ValidateRequest(CreateStudentValidationSchema),userController.createStudent,)

export const userRouter = router
