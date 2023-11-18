// import { Schema, model, connect } from 'mongoose'

export type Gardens = {
  fatherName: string
  motherName: string
  fatherCaption: string
  motherCaption: string
  fatherContact: string
  motherContact: string
}

export type UserName = {
  firstName: string
  middleName: string
  lastName: string
}

export type LocalGarden = {
  name: string
  occupation: string
  contact: string
  address: string
}



export type Student = {
  id:string
  name: UserName
  gender: 'male' | 'female'
  dateOfBirth: string
  email: string
  contactNumber: string
  emergencyNumber: string
  bloodGroups?: 'A+'|'A-'|'B+'|'B-'|'AB+'|'AB-'|'O+'|'O-'
  presentAddress?: string
  permanentAddress?: string
  gardens: Gardens
  localGarden: LocalGarden
  isActive?: "active"|"inactive"
  

}