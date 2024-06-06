import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

const UserSchema = new Schema<TUser>({
   
  id: {
    type: String,
    required:true,
  },
  password: {
    type:String,
    trim: true,
    required: true,
    
  },
  needPasswordChange: {
    type: Boolean,
    default: true,

  },
  role: {
    type: String,
    enum:['admin','faculty','student']
    
  }
  ,
  status: {
    type: String,
    enum: ['in-progress', 'blocked',],
    default:"in-progress",
  },
  isDeleted:{
    type: Boolean,
    default:false,
  }
},
  {
    timestamps:true,
  }
)

export const userModel=model<TUser>('User',UserSchema)