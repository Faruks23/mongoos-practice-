import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { academicSemester } from './academicValidation'
import { academicSemesterController } from './academicSemester.controller'


const router = express.Router()

router.post('/create-academic-semester',validateRequest(academicSemester.AcademicSchemaValidation),academicSemesterController.CreateAcademicSemester)

router.get('/get-academic-semester',academicSemesterController.getAcademicSemester)
router.get('/get-single-academic-semester/:id',academicSemesterController.getSingleAcademicSemester)



export const AcademicSemesterRoute = router
