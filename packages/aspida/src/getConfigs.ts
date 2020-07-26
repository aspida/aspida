import fs from 'fs'
import path from 'path'
import { AspidaConfig } from './'

type ConfigFile = {
  input?: string
  baseURL?: string
  trailingSlash?: boolean
  outputEachDir?: boolean
}

const defaultConfig: AspidaConfig = {
  input: ['apis', 'api'].find(input => fs.existsSync(input)) ?? 'apis',
  baseURL: '',
  trailingSlash: false,
  outputEachDir: false
}

export const getConfigs = (configPath = 'aspida.config.js'): AspidaConfig[] => {
  if (fs.existsSync(configPath)) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const config: ConfigFile | ConfigFile[] = require(path.join(process.cwd(), configPath))

    return Array.isArray(config)
      ? config.map(c => ({ ...defaultConfig, ...c }))
      : [{ ...defaultConfig, ...config }]
  }

  return [{ ...defaultConfig }]
}
