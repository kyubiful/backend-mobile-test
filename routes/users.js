import { Router } from 'express'
import { Users } from '../models/Users.js'
import bcrypt from 'bcrypt'
import { isAdmin } from '../middlewares/auth.js'

export const usersRoutes = Router()

usersRoutes
  .get('/', (req, res) => {
    Users.find()
      .exec()
      .then(data => res.status(200).send(data))
  })
  .get('/:id', (req, res) => {
    Users.findById(req.params.id)
      .exec()
      .then(data => res.status(200).send(data))
  })
  .post('/', isAdmin, async (req, res) => {
    const { body } = req
    const { name, surname, nif, email, password, role } = body
    const passwordHash = await bcrypt.hash(password, 10)

    const user = new Users({
      name,
      surname,
      email,
      nif,
      password: passwordHash,
      role
    })

    Users.create(user)
      .then(data => res.status(201).send(data))
  })
  .put('/:id', isAdmin, (req, res) => {
    Users.findOneAndUpdate(req.params.id, req.body)
      .then(() => res.sendStatus(204))
  })
  .delete('/:id', isAdmin, (req, res) => {
    Users.findOneAndDelete(req.params.id)
      .exec()
      .then(() => res.sendStatus(204))
  })
