import { Schema, model } from "mongoose";
import { TFaculty } from "./Faculty.interface";


const FacultySchema = new Schema<TFaculty>({
  name: {
    type: 'String',
    required:true,
   } 

})
 
export const FacultyModel=model<TFaculty>('Faculty',FacultySchema)