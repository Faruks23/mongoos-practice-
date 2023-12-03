export type Months =
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

export type AcademicSemesterName='Autumn' | 'Summer' | 'Fall'
export type AcademicSemesterCode= '01' | '02' | '03'

export type TAcademicSemester = {
  name: AcademicSemesterName
  code:AcademicSemesterCode
  year: string
  startMonth: Months
  endMonth: Months
}


 export type TAcademicSemesterNameCodeMapper = {
    [key: string]: string
  }
 