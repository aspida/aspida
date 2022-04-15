import fs from 'fs'
import { ConfigFile } from '../src/getConfig'
import build from '../src'
import path from 'path'

function readDirRecursive(dirPath: string): string[] {
  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .map(file =>
      file.isDirectory()
        ? readDirRecursive(path.join(dirPath, file.name))
        : [path.join(dirPath, file.name)]
    )
    .reduce((acc, x) => acc.concat(x), [])
}

describe('cli test', () => {
  beforeAll(() => fs.mkdirSync('_samples'))
  afterAll(() => fs.promises.rmdir('_samples', { recursive: true }))

  test('main', () => {
    const configs: ConfigFile[] = require('../aspida.config.js')

    return Promise.all(
      configs.map(async config => {
        await build({
          ...config,
          input: `_${config.input}`
        })[0]

        for (const filePath of readDirRecursive(config.input)) {
          expect(fs.readFileSync(`_${filePath}`, 'utf8')).toBe(
            fs.readFileSync(filePath, 'utf8').replace(/\r/g, '')
          )
        }
      })
    )
  })
})
