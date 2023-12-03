import express from 'express'
import { AcademicSemesterController } from './academicS.controller'
import { ValidateRequest } from '../../middleware/validateRequest'
import { CreateAcademicSemesterValidation, updateAcademicSemesterValidationSchema } from './academicS.validation'


const router = express.Router()

router.post('/create-academic-semester',ValidateRequest(CreateAcademicSemesterValidation),AcademicSemesterController.createAcademicSemester)
router.get('/:semesterId', AcademicSemesterController.getSingleAcademicSemester)

router.patch('/:semesterId', ValidateRequest(updateAcademicSemesterValidationSchema),
AcademicSemesterController.updateAcademicSemester)

router.get('/', AcademicSemesterController.getAllAcademicSemesters)



export const AcademicSemesterRouts = router
