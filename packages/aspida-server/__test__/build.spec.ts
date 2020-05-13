import fs from 'fs'
import build from '../src/buildServerFile'
import aspidaBuild from 'aspida/src/buildTemplate'
import getConfig from '../src/getConfig'

const basePath = 'packages/aspida-server'

test('build', () => {
  const config = getConfig(`${basePath}/aspida.config.js`)[0]
  const inputDir = `${basePath}/${config.input}`

  build({ ...config, input: inputDir }).forEach(t => {
    expect(t.text).toBe(fs.readFileSync(t.filePath, 'utf8'))
  })

  const target = aspidaBuild({ input: inputDir, baseURL: '', trailingSlash: false })
  expect(target.text).toBe(fs.readFileSync(target.filePath, 'utf8'))
})
