import { Schema, model } from "mongoose";
import { User } from "./user.interface";

const userSchema = new Schema<User>({
  id: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  needsPasswordChange: {
    type:Boolean,
    default:true,
    
  },
  role: {
    type: String,
    enum: [
      'admin','student','faculty',
    ]
    
  },
  status: {
    type: String,
    enum: [
      'in-progress','blocked',
    ],
    default:'in-progress'
    
  },
  isDeleted: {
    type: Boolean,
    default: false
  },

}, {
  timestamps: true,
})

 
 export const userModel =model<User>('NewUser',userSchema)