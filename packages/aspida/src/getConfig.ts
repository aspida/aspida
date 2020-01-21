import fs from 'fs'
import path from 'path'

export interface BaseConfig {
  input: string
  baseURL: string
  trailingSlash: boolean
}

interface ConfigFile {
  input: string
  baseURL?: string
  trailingSlash?: boolean
}

const defaultConfig = { input: 'apis', baseURL: '', trailingSlash: false }

export default (configPath = 'aspida.config.js'): BaseConfig[] => {
  if (fs.existsSync(configPath)) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const config: ConfigFile | ConfigFile[] = require(path.join(process.cwd(), configPath))

    return Array.isArray(config)
      ? config.map(c => ({ ...defaultConfig, ...c }))
      : [{ ...defaultConfig, ...config }]
  }

  return [{ ...defaultConfig }]
}
