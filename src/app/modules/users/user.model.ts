import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";
import config from "../../config";
import bcrypt from 'bcrypt'
const UserSchema = new Schema<TUser>({
   
  id: {
    type: String,
    required: true,
    unique: true,
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

UserSchema.pre('save', async function (next) {
  // console.log(this, 'pre hook : we will save  data');
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this // doc
  // hashing password and save into DB
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  )
  next()
})

// post save middleware / hook
UserSchema.post('save', function (doc, next) {
  doc.password = ''
  next()
})



export const userModel=model<TUser>('User',UserSchema)