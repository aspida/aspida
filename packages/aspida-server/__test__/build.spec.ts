import fs from 'fs'
import build from '../src/buildServerFile'
import getConfig from '../src/getConfig'

const basePath = 'packages/aspida-server'

test('build $server.ts', () => {
  const config = getConfig(`${basePath}/aspida.config.js`)[0]
  const inputDir = `${basePath}/${config.input}`

  build({ ...config, input: inputDir }).forEach(t => {
    expect(t.text).toBe(fs.readFileSync(t.filePath, 'utf8'))
  })
})
