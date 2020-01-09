import fs from 'fs'
import path from 'path'

export type Config = { input: string | string[] }

const defaultConfig: Config = { input: 'apis' }

export default (configPath = 'aspida.config.js'): Config =>
  (fs.existsSync(configPath) &&
    require(path.join(process.cwd(), configPath))[require('../package.json').name]) ||
  defaultConfig
