import { Request,Response } from "express"
import { StudentService } from "./student.service"

const createStudent = async(req:Request, res:Response) => {
  try {
     const { student } = req.body
     const result = await StudentService.createStudentDB(student)
     res.status(200).json({
       success: true,
       message: 'student created successfully',
       data: result,
     })
  } catch (error) {
    console.log(error);
  }
}

const getAllStudent = async (req: Request, res: Response) => {
     try {
       const result = await StudentService.getAllStudentDB()
         res.status(200).json({
           success: true,
           message: 'student created successfully',
           data: result,
         })
         
     } catch (error) {
       console.log(error);
     }
}

const getSingleStudent = async (req: Request, res: Response) => {
  try {
       const {StudentId}=req.params;
       const result = await StudentService.getSingleStudentDB(StudentId)
         res.status(200).json({
           success: true,
           message: 'student created successfully',
           data: result,
         })
         
     } catch (error) {
       console.log(error);
     }
}



export const StudentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
}