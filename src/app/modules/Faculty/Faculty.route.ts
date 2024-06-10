 import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AcademicFacultyValidation } from './Faculty.validation';
import { AcademicFacultyController } from './Faculty.controller';


const route = express.Router();
 
route.post('/create-faculty', validateRequest(AcademicFacultyValidation.AcademicFacultyValidationSchema), AcademicFacultyController.createAcademicFaculty)

route.get('/get-faculty', AcademicFacultyController.getAcademicFaculty)
route.get('/get-single-faculty/:id', AcademicFacultyController.getSingleAcademicFaculty)
route.patch('/:facultyId',validateRequest( AcademicFacultyValidation.updateAcademicFacultyValidationSchema),AcademicFacultyController.updateAcademicFaculty)

export const AcademicFacultyRoute=route