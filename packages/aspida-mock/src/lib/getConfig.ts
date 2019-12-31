import fs from 'fs'

export type Config = {
  input?: string | string[]
  target?: 'es6' | 'cjs'
  outputExt?: 'js' | 'ts'
}

export const mockFileRegExp = /\/(\$|@)/

export const defaultConfig = {
  input: fs.existsSync('mocks') || !fs.existsSync('apis') ? 'mocks' : 'apis',
  target: 'es6' as const,
  outputExt: 'js' as const
}

export default (rcFilePath = '.mockserverrc'): Config =>
  fs.existsSync(rcFilePath) ? JSON.parse(fs.readFileSync(rcFilePath, 'utf8')) : {}
