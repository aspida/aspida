import fs from 'fs'
import path from 'path'

export interface Config {
  input: string
  output: string
  baseURL: string
  trailingSlash: boolean
}

interface ConfigFile {
  input?: string
  output?: string
  baseURL?: string
  trailingSlash?: boolean
}

const defaultConfig: Config = {
  input: 'pages',
  output: '',
  baseURL: '',
  trailingSlash: false
}

export default (configPath = 'pathpida.config.js'): Config[] => {
  if (fs.existsSync(configPath)) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const config: ConfigFile | ConfigFile[] = require(path.join(process.cwd(), configPath))

    return Array.isArray(config)
      ? config.map(c => ({ ...defaultConfig, ...c }))
      : [{ ...defaultConfig, ...config }]
  }

  return [{ ...defaultConfig }]
}
