import { Router } from 'express'
import { Users } from '../models/Users.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const authorizationsRoutes = Router()

authorizationsRoutes
  .post('/login', async (req, res) => {
    const { email, password } = req.body

    const user = await Users.findOne({ email }).exec()

    if (!user) {
      return res.status(401).send('incorrect user or password')
    }

    const isValid = await bcrypt.compare(password, user.password)

    if (!isValid) {
      return res.status(401).send('incorrect user or password')
    }

    const payload = {
      id: user._id
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: 60 * 60 * 24 * 365
    })

    return res.status(200).send({ token })
  })
