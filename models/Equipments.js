import { Schema, model } from 'mongoose'

const equipmentSchema = new Schema({
  model: String,
  power: String,
  bypass: String,
  image: String,
  user: String
})

export const Users = model('Equipment', equipmentSchema)
