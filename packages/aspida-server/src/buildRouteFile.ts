import path from 'path'
import { Config } from './getConfig'
import createRouteString from './createRouteString'

export type Template = {
  filePath: string
  text: string
}

export default ({ input, port }: Config): Template[] => [
  {
    text: createRouteString(input),
    filePath: path.posix.join(input, `$controllers.ts`)
  },
  {
    text: `/* eslint-disable */
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
  .listen(${port})
`,
    filePath: path.posix.join(input, `$server.ts`)
  }
]
