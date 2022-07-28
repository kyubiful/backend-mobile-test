import mongoose from 'mongoose'

const Schema = mongoose.Schema

const invoiceSchema = new Schema({
  invoiceNumber: {
    type: Number,
    required: [true, 'Invoice number is required'],
    lowercase: true
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
    lowercase: true
  },
  date: Date,
  userId: {
    type: String,
    required: [true, 'User id is required'],
    lowercase: true
  }
})

export const Invoices = mongoose.model('Invoice', invoiceSchema)
