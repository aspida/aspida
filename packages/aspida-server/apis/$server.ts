/* eslint-disable */
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import { createRouter } from 'aspida-server'
import controllers from './$controllers'

express()
  .use(helmet())
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(createRouter(controllers))
  .listen(10000)
