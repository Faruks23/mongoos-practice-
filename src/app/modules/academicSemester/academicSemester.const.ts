import { AcademicSemesterCode, AcademicSemesterName, Months, TAcademicSemesterNameCodeMapper } from "./academicS.interface"

export const MonthsSchema: Months[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
export const AcademicSemesterNameSchema: AcademicSemesterName[] = [
  'Autumn',
  'Summer',
  'Fall',
]
export const AcademicSemesterCodeSchema: AcademicSemesterCode[] = ['01', '02', '03']

export  const academicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
}
