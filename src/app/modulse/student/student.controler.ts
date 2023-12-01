/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { StudentServices } from './student.service'

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB()
    res.status(200).json({
      success: true,
      message: 'student created successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { StudentId } = req.params
    console.log(StudentId);
    const result = await StudentServices.getSingleStudentFromDB(StudentId)
    res.status(200).json({
      success: true,
      message: 'student get successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

const deleteStudentDB = async (req: Request, res: Response) => {
  try {
    const { StudentId } = req.params
    const result = await StudentServices.deleteStudentFromDB(StudentId)
    res.status(200).json({
      success: true,
      message: 'student delete successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

export const StudentController = {
  getAllStudent,
  getSingleStudent,
  deleteStudentDB,
}
