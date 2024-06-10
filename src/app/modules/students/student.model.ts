import { Schema, model } from "mongoose";
import { StudentModel, TGuardian, TLocalGuardian, TStudent, TUserName } from "./student.interface";
import AppError from "../../error/AppError";
import httpStatus from "http-status";


const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: "string",
    required: [true, 'firstName is required'],
    trim: true,
    maxlength:[20,'name can not be more than 20 characters']
  },
  middleName: {
    type: "string",
    required:true,
    
  },
   lastName: {
    type: String,
    trim: true,
    required: [true, 'Last Name is required'],
    maxlength: [20, 'Name can not be more than 20 characters'],
  },

})

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: 'string',
    required:[ true,'Father name must required'],
    trim:true,
  },
  fatherOccupation: {
    type: 'string',
    required:[ true,'Father occupation must required'],
    trim:true,
  },
  fatherContactNo: {
    type: 'string',
    required:[ true,'Father contact must required'],
    trim:true,
  },
  motherName: {
    type: 'string',
    required:[ true,'Father name must required'],
    trim:true,
  },
  motherOccupation: {
    type: 'string',
    required:[ true,'Father occupation must required'],
    trim:true,
  },
  motherContactNo: {
    type: 'string',
    required:[ true,'Father contact must required'],
    trim:true,
  }
})

const localGuradianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  occupation: {
    type: String,
    required: [true, 'Occupation is required'],
  },
  contactNo: {
    type: String,
    required: [true, 'Contact number is required'],
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
  },
})

const studentSchema = new Schema<TStudent>(
  {
    id: {
      type: String,
      required: [true, 'Student id required'],
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'user id required'],
      unique: true,
      ref: 'User',
    },

    name: {
      type: userNameSchema,
      required: [true, 'name is  required'],
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female', 'other'],
        message: '{VALUE} is not a valid gender',
      },
      required: [true, 'Gender is required'],
    },
    dateOfBirth: { type: String },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    contactNo: { type: String, required: [true, 'Contact number is required'] },
    emergencyContact: {
      type: String,
      required: [true, 'Emergency contact number is required'],
    },
    bloodGroups: {
      type: String,
      enum: {
        values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        message: '{VALUE} is not a valid blood group',
      },
    },

    presentAddress: {
      type: String,
      required: [true, 'Present address is required'],
    },
    permanentAddress: {
      type: String,
      required: [true, 'Permanent address is required'],
    },
    guardian: {
      type: guardianSchema,
      required: [true, 'Guardian information is required'],
    },
    localGuardian: {
      type: localGuradianSchema,
      required: [true, 'Local guardian information is required'],
    },
    profileImg: { type: String },
    admissionSemester: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicSemester',
    },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicDepartment',
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtual: true,
    },
  },
)

// virtual
studentSchema.virtual('fullName').get(function () {
  return this.name.firstName + this.name.middleName + this.name.lastName;
});



// Query Middleware
studentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

// Query Middleware
studentSchema.pre('deleteOne', async function (next) {
  const query = this.getQuery();
  console.log(query)
  
  const isUserExists= await this.findById(query);
  // next();
  // console.log(isUserExists)
  if (!isUserExists) {
    throw new AppError(httpStatus.NOT_FOUND,'user dose not exist')
  }
  next();
});

studentSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});



studentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } })
  next()
})

//creating a custom static method
studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id })
  return existingUser
}
export const Student = model<TStudent, StudentModel>('Student', studentSchema)