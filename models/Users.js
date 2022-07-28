import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  name: String,
  surname: String,
  nif: String,
  password: String,
  role: String
})

export const Users = model('User', userSchema)
