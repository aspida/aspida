import fs from 'fs'

export type Config = {
  input?: string | string[]
  target?: 'es6' | 'cjs'
  outputExt?: 'js' | 'ts'
}

export const mockFileRegExp = /\$mock\.(js|ts)$/

export const defaultConfig = {
  input: 'mocks',
  target: 'es6' as const,
  outputExt: 'js' as const
}

export default (rcFilePath = '.mockserverrc'): Config =>
  fs.existsSync(rcFilePath) ? JSON.parse(fs.readFileSync(rcFilePath, 'utf8')) : {}
