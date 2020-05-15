import path from 'path'
import { Config } from './getConfig'
import createControllersText from './createControllersText'

export type Template = {
  filePath: string
  text: string
}

export default ({
  input,
  port,
  basePath,
  helmet,
  cors,
  immediate,
  uploader
}: Config): Template[] => [
  {
    text: createControllersText(input),
    filePath: path.posix.join(input, '$controllers.ts')
  },
  {
    text: `/* eslint-disable */${uploader.dest ? '' : "\nimport { tmpdir } from 'os'"}
import express from 'express'
import multer from 'multer'${helmet ? "\nimport helmet from 'helmet'" : ''}${
      cors ? "\nimport cors from 'cors'" : ''
    }
import { createRouter } from 'frourio'
import controllers from './$controllers'

export const router = createRouter(
  controllers,
  multer({ dest: ${uploader.dest ? `'${uploader.dest}'` : 'tmpdir()'}, limits: { fileSize: ${
      uploader.size ?? '1024 ** 3'
    } } }).any()
)

export const app = express()${helmet ? '\n  .use(helmet())' : ''}${cors ? '\n  .use(cors())' : ''}
  .use((req, res, next) => {
    express.json()(req, res, err => {
      if (err) return res.sendStatus(400)

      next()
    })
  })
  .use(${basePath === '/' ? '' : `'${basePath}', `}router)

export const run = (port: number | string = ${port}) =>
  new Promise<ReturnType<typeof app.listen>>(resolve => {
    const server = app.listen(port, () => {
      console.log(\`Frourio is running on http://localhost:\${port}\`)
      resolve(server)
    })
  })
${immediate ? '\nexport const server = run()\n' : ''}`,
    filePath: path.posix.join(input, 'server.ts')
  }
]
