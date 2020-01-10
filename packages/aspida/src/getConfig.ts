import fs from 'fs'
import path from 'path'

export interface Config {
  input: string
}

export interface AspidaConfig {
  aspida?: Config
}

export const defaultConfigPath = 'aspida.config.js'
export const defaultConfig = { input: 'apis' }

export default (configPath = defaultConfigPath): Config[] => {
  if (fs.existsSync(configPath)) {
    const config: AspidaConfig | AspidaConfig[] = require(path.join(process.cwd(), configPath))

    return Array.isArray(config) ? config.map(c => c.aspida || defaultConfig) : [config.aspida || defaultConfig]
  }

  return [defaultConfig]
}
