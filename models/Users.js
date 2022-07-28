import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    lowercase: true
  },
  surname: {
    type: String,
    required: [true, 'Surname is required'],
    lowercase: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true
  },
  nif: {
    type: String,
    required: [true, 'NIF/NIE is required'],
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  role: {
    type: String,
    required: [true, 'Role is required']
  }
})

userSchema.plugin(mongooseUniqueValidator)

export const Users = mongoose.model('User', userSchema)
