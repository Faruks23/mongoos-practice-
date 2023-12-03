import express from 'express'
import { StudentController } from './student.controler';

const router = express.Router();
router.get('/', StudentController.getAllStudent)
router.get('/:StudentId', StudentController.getSingleStudent)
router.delete('/:StudentId', StudentController.deleteStudentDB)

export const StudentRoute = router;