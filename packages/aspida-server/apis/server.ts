/* eslint-disable */
import { tmpdir } from 'os'
import express from 'express'
import multer from 'multer'
import helmet from 'helmet'
import cors from 'cors'
import { createRouter } from 'aspida-server'
import controllers from './$controllers'

export const server = express()
  .use(helmet())
  .use(cors())
  .use((req, res, next) => {
    express.json()(req, res, err => {
      if (err) return res.sendStatus(400)

      next()
    })
  })
  .use(createRouter(controllers, multer({ dest: tmpdir(), limits: { fileSize: 1024 ** 3 } }).any()))
  .listen(10000, () => {
    console.log('aspida-server runs successfully.')
  })
