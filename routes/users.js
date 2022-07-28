import { Router } from 'express'
import { Users } from '../models/Users.js'

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
  .post('/', (req, res) => {
    Users.create(req.body)
      .then(data => res.status(201).send(data))
  })
  .put('/:id', (req, res) => {
    Users.findOneAndUpdate(req.params.id, req.body)
      .then(() => res.status(204))
  })
  .delete('/:id', (req, res) => {
    Users.findOneAndDelete(req.params.id)
      .exec()
      .then(() => res.status(204))
  })
