import { Router } from 'express'
import { Invoices } from '../models/Invoices.js'

export const invoicesRoutes = Router()

invoicesRoutes
  .get('/', (req, res) => {
    Invoices.find()
      .exec()
      .then(data => res.status(200).send(data))
  })
  .get('/:id', (req, res) => {
    Invoices.findById(req.params.id)
      .exec()
      .then(data => res.status(200).send(data))
  })
  .post('/', (req, res) => {
    Invoices.create(req.body)
      .then(data => res.status(201).send(data))
  })
  .put('/:id', (req, res) => {
    Invoices.findOneAndUpdate(req.params.id, req.body)
      .then(() => res.status(204))
  })
  .delete('/:id', (req, res) => {
    Invoices.findOneAndDelete(req.params.id)
      .exec()
      .then(() => res.status(204))
  })
