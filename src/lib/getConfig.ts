import fs from 'fs'

const defaultConfig = () => ({
  input: 'mocks',
  target: 'es6' as 'es6' | 'cjs',
  outputExt: 'js' as 'js' | 'ts'
})

export default (rcFilePath: string): ReturnType<typeof defaultConfig> =>
  Object.assign(
    defaultConfig(),
    fs.existsSync(rcFilePath) ? JSON.parse(fs.readFileSync(rcFilePath, 'utf8')) : {}
  )
