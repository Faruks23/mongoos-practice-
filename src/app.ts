/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, NextFunction, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import { StudentRoute } from './app/modules/student/student.route'
import { userRouter } from './app/modules/user/user.route'
import { globalErrorHandler } from './app/middleware/globalErroHandeler'
import { NotFound } from './app/middleware/notFound'
import router from './app/Routes'

app.use(express.json())
app.use(cors())

// application routes
app.use('/api/v1', router)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World faruk!')
})

app.use(globalErrorHandler)

// not found routes
app.use(NotFound)

export default app
