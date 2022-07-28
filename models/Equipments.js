import mongoose from 'mongoose'

const Schema = mongoose.Schema

const equipmentSchema = new Schema({
  model: {
    type: String,
    required: [true, 'Model is required'],
    lowercase: true
  },
  power: {
    type: String,
    required: [true, 'Power is required'],
    lowercase: true
  },
  bypass: {
    type: String,
    required: [true, 'Bypass is required'],
    lowercase: true
  },
  image: {
    type: String,
    lowercase: true
  },
  userId: {
    type: String,
    required: [true, 'User id is required']
  }
})

export const Equipments = mongoose.model('Equipment', equipmentSchema)
