import mongoose from 'mongoose'
import 'dotenv/config'

const mongodbUri = process.env.MONGODB_URI

export const mongoDBConnection = () => {
  mongoose.connect(mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
      console.log('Mongodb connection error')
    } else {
      console.log('🗄  Connected to mongodb correctly')
    }
  })
}
