/* eslint-disable @typescript-eslint/no-explicit-any */

import { Request, Response } from "express";
import { userService } from "./user.service"


const createStudent = async (req: Request, res: Response) => {
  try {
    const { password,student } = req.body;
    // console.log(studentData)
    // const zodParsedData = studentValidationSchema.parse(studentData)

    const result = await userService.createStudentIntoDB(password,student)

    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    })
  }
}


export const userController = {
  createStudent
}
