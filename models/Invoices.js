import { Schema, model } from 'mongoose'

const invoiceSchema = new Schema({
  number: Number,
  amount: Number,
  date: Date,
  user_id: String
})

export const Users = model('Invoice', invoiceSchema)
