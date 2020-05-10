/* eslint-disable */
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import { createRouter } from 'aspida-server'
import controllers from './$controllers'

express()
  .use(helmet())
  .use(cors())
  .use((req, res, next) => {
    express.json()(req, res, err => {
      if (err) return res.sendStatus(400)

      next()
    })
  })
  .use(express.urlencoded({ extended: true }))
  .use(createRouter(controllers))
  .listen(10000, () => {
    console.log('aspida-server runs successfully.')
  })
