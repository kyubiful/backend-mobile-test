import express from 'express'
import { usersRoutes } from './users.js'
import { invoicesRoutes } from './invoices.js'
import { equipmentRoutes } from './equipments.js'

const app = express()

app.use('/users', usersRoutes)
app.use('/invoices', invoicesRoutes)
app.use('/equipments', equipmentRoutes)

export default app
