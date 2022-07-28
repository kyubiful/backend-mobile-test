import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { mongoDBConnection } from './db/mongodb.js'

const port = process.env.SERVER_PORT || 3000

const app = express()

app.use(express.json())
app.use(cors())

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
  mongoDBConnection()
})
