import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { Users } from '../models/Users.js'

export const isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]

  if (!token) {
    return res.sendStatus(403)
  }

  jwt.verify(token, process.env.JWT_SECRET, (_err, decoded) => {
    const { id } = decoded
    Users.findOne({ _id: id }).exec()
      .then(user => {
        if (user === null) {
          return res.sendStatus(403)
        }
        req.user = user
        next()
      })
  })
}

export const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.sendStatus(403)
  }
  next()
}
