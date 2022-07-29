import { Router } from 'express'
import { Equipments } from '../models/Equipments.js'

export const equipmentsRoutes = Router()

equipmentsRoutes
  .get('/', (req, res) => {
    Equipments.find()
      .exec()
      .then(data => res.status(200).send(data))
  })
  .get('/:id', (req, res) => {
    Equipments.findById(req.params.id)
      .exec()
      .then(data => res.status(200).send(data))
  })
  .post('/', (req, res) => {
    Equipments.create(req.body)
      .then(data => res.status(201).send(data))
  })
  .put('/:id', (req, res) => {
    Equipments.findOneAndUpdate(req.params.id, req.body)
      .then(() => res.sendStatus(204))
  })
  .delete('/:id', (req, res) => {
    Equipments.findOneAndDelete(req.params.id)
      .exec()
      .then(() => res.sendStatus(204))
  })
