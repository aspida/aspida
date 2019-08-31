import fs from 'fs'

const defaultConfig = () => ({
  input: 'mock',
  target: 'es6' as 'es6' | 'cjs'
})

export default (rcFilePath: string): ReturnType<typeof defaultConfig> =>
  Object.assign(
    defaultConfig(),
    fs.existsSync(rcFilePath) ? JSON.parse(fs.readFileSync(rcFilePath, 'utf8')) : {}
  )
