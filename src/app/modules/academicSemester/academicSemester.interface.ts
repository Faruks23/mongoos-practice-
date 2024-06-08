export type Month =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'

export type TAcademicSemester = {
  name: 'Autumn' | 'Summer' | 'Fall'
  code: '01' | '02' | '03'
  year: string
  startMonth: Month,
  endMonth: Month,

}

export type academicSemesterMapper = {
  [key: string]: string
}