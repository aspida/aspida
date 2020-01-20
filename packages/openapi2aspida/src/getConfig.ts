import path from 'path'
import getBaseConfig, { BaseConfig } from 'aspida/dist/getConfig'

export interface Config {
  inputFile: string
  output: string
  trailingSlash: boolean
  isYaml: boolean
}

interface ConfigFile extends BaseConfig {
  openapi?: {
    inputFile: string
    yaml?: boolean
  }
}

const createConfig = (config: ConfigFile) => {
  const inputFile = config.openapi?.inputFile || 'openapi.json'

  return {
    inputFile,
    output: config.input,
    trailingSlash: config.trailingSlash,
    isYaml:
      config.openapi?.yaml === undefined
        ? path.extname(inputFile).slice(1) === 'yaml'
        : config.openapi?.yaml
  }
}

export default (configPath?: string): Config[] =>
  getBaseConfig(configPath).map(c => createConfig(c))
