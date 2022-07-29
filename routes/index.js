import express from 'express'
import { usersRoutes } from './users.js'
import { invoicesRoutes } from './invoices.js'
import { equipmentsRoutes } from './equipments.js'
import { authorizationsRoutes } from './authorizations.js'
import { isAuthenticated } from '../middlewares/auth.js'

const app = express()

app.use('/users', isAuthenticated, usersRoutes)
app.use('/invoices', isAuthenticated, invoicesRoutes)
app.use('/equipments', isAuthenticated, equipmentsRoutes)
app.use('/', authorizationsRoutes)

export default app
