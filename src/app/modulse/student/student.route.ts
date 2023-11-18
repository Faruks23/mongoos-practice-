import express from 'express'
import { StudentController } from './student.controler';

const router = express.Router();

router.post('/createStudent', StudentController.createStudent)
router.get('/', StudentController.getAllStudent)
router.get('/:StudentId', StudentController.getSingleStudent)

export const StudentRoute = router;