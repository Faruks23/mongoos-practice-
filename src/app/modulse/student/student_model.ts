import { Schema, model} from 'mongoose'
import { Gardens, LocalGarden, Student, UserName } from './student.interface'

const UserNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  lastName: { type: String },
  middleName: { type: String, required: true },
})

const GardensSchema = new Schema<Gardens>({
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  fatherCaption: { type: String, required: true },
  motherCaption: { type: String, required: true },
  fatherContact: { type: String, required: true },
  motherContact: { type: String, required: true },
})

const LocalGardenSchema = new Schema<LocalGarden>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
})



const StudentSchema = new Schema<Student>({
  id: { type: String },
  name: UserNameSchema,
  gender: ['male', 'female'],
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  emergencyNumber: { type: String },
  bloodGroups: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  gardens:GardensSchema,
  localGarden:LocalGardenSchema,
  isActive: ['active', 'inactive'],
})

export const StudentModal=model<Student>("Student",StudentSchema)