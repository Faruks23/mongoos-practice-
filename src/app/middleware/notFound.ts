/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'

const notFound = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const status = httpStatus.NOT_FOUND
  
  return res.status(status).json({
    success: false,
    message: 'api not found',
    err:"",
  })
}
export default notFound
