import { Router } from 'express'
import { userRouter } from '../modules/user/user.route'
import { StudentRoute } from '../modules/student/student.route'
import { AcademicSemesterRouts } from '../modules/academicSemester/academicS.route'

const router = Router()

const modulesRoute = [
  {
    path: '/users',
    route: userRouter,
  },
  {
    path: '/students',
    route: StudentRoute,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRouts,
  },
]

modulesRoute.forEach(route => router.use(route.path, route.route))

export default router
