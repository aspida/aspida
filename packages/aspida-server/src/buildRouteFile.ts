import path from 'path'
import { Config } from './getConfig'
import createRouteString from './createRouteString'

export type Template = {
  filePath: string
  text: string
}

export default ({ input, port, cors }: Config): Template[] => [
  {
    text: createRouteString(input),
    filePath: path.posix.join(input, `$controllers.ts`)
  },
  {
    text: `/* eslint-disable */
import express from 'express'
import helmet from 'helmet'${cors ? "\nimport cors from 'cors'" : ''}
import { createRouter } from 'aspida-server'
import controllers from './$controllers'

express()
  .use(helmet())${cors ? '\n  .use(cors())' : ''}
  .use((req, res, next) => {
    express.json()(req, res, err => {
      if (err) return res.sendStatus(400)

      next()
    })
  })
  .use(express.urlencoded({ extended: true }))
  .use(createRouter(controllers))
  .listen(${port}, () => {
    console.log('aspida-server runs successfully.')
  })
`,
    filePath: path.posix.join(input, `$server.ts`)
  }
]
