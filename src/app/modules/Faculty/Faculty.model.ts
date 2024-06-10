import { Schema, model } from "mongoose";
import { TAcademicFaculty } from "./Faculty.interface";


const AcademicFacultySchema = new Schema<TAcademicFaculty>({
  name: {
    type: String,
    required: [true, 'AcademicFaculty is required'],
     unique: true,
    }
},{
   timestamps: true,
})
 

export const AcademicFacultyModel=model<TAcademicFaculty>("AcademicFaculty",AcademicFacultySchema)