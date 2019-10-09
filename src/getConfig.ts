import fs from 'fs'

export type Config = {
  input?: string | string[]
  target?: 'es6' | 'cjs'
  outputExt?: 'js' | 'ts'
}

export const apiFileRegExp = /\/\$[^/]+\.(js|ts)$/

export const defaultConfig = {
  input: 'apis'
}

export default (rcFilePath = '.aspidarc'): Config =>
  fs.existsSync(rcFilePath) ? JSON.parse(fs.readFileSync(rcFilePath, 'utf8')) : {}
