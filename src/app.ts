/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, NextFunction, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import { StudentRoutes } from './app/modules/students/student.route'


app.use(express.json())
app.use(cors())

// application routes


app.get('/',async  (req: Request, res: Response) => {
  res.send('welcome to the application')
})

// application routes
app.use('/api/v1/students', StudentRoutes);





export default app
