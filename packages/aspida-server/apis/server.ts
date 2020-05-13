/* eslint-disable */
import { tmpdir } from 'os'
import express from 'express'
import multer from 'multer'
import helmet from 'helmet'
import cors from 'cors'
import { createRouter } from 'aspida-server'
import controllers from './$controllers'

export const router = createRouter(
  controllers,
  multer({ dest: tmpdir(), limits: { fileSize: 1024 ** 3 } }).any()
)

export const app = express()
  .use(helmet())
  .use(cors())
  .use((req, res, next) => {
    express.json()(req, res, err => {
      if (err) return res.sendStatus(400)

      next()
    })
  })
  .use('/api', router)

export const run = (port?: number | string) =>
  new Promise<ReturnType<typeof app.listen>>(resolve => {
    const server = app.listen(port || 10000, () => {
      console.log(`aspida-server is running on http://localhost:${port || 10000}`)
      resolve(server)
    })
  })