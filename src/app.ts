import express, { Application, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import { StudentRoute } from './app/modulse/student/student.route'
import { userRouter } from './app/modulse/user/user.route'

app.use(express.json())
app.use(cors())

// application routes
app.use('/api/v1/students', StudentRoute)
app.use('/api/v1/users', userRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World faruk!')
}) 

export default app
