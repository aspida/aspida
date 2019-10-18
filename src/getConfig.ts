import fs from 'fs'

export type Config = {
  input?: string | string[]
}

export const apiFileRegExp = /\/\$[^/]+\.(js|ts)$/

export const defaultConfig = {
  input: 'apis'
}

export default (rcFilePath = '.aspidarc'): Config =>
  fs.existsSync(rcFilePath) ? JSON.parse(fs.readFileSync(rcFilePath, 'utf8')) : {}
