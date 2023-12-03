/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express"

export const globalErrorHandler:any = (err: any,req: Request,res: Response,next: NextFunction,
) => {
  const status = 500
  const message = err.message || 'something want wrong'
  return res.status(status).json({
    success: false,
    message: message,
  })
}