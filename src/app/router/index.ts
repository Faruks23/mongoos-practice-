import express from 'express'
import { StudentRoutes } from '../modules/students/student.route'
import { userRouter } from '../modules/users/user.route'
import { AcademicSemesterRoute } from '../modules/academicSemester/academicSemester.route'
import { AcademicFacultyRoute } from '../modules/Faculty/Faculty.route'
import { AcademicAcademicDepartmentRoute } from '../modules/Department/department.route'

const router = express.Router()

const Router = [
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/users',
    route: userRouter,
  },
  {
    path: '/academic-semester',
    route: AcademicSemesterRoute,
  },
  {
    path: '/faculty',
    route: AcademicFacultyRoute,
  },
  {
    path: '/department',
    route: AcademicAcademicDepartmentRoute,
  },
]

Router.forEach((route) =>router.use(route.path, route.route))

export default router