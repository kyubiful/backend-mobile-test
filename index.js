import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { mongoDBConnection } from './db/mongodb.js'
import Routes from './routes/index.js'

const port = process.env.SERVER_PORT || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/api', Routes)

app.listen(port, () => {
  console.log(`🚀 Server started on port ${port}`)
  mongoDBConnection()
})
