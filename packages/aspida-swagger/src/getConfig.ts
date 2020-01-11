import path from 'path'
import getBaseConfig, { BaseConfig } from 'aspida/src/getConfig'

export interface Config {
  inputFile: string
  output: string
  isYaml: boolean
}

interface ConfigFile extends BaseConfig {
  swagger?: {
    inputFile: string
    yaml?: boolean
  }
}

const createConfig = (config: ConfigFile) => {
  const inputFile = config.swagger?.inputFile || 'swagger.json'

  return {
    inputFile,
    output: config.input,
    isYaml:
      config.swagger?.yaml === undefined
        ? path.extname(inputFile).slice(1) === 'yaml'
        : config.swagger?.yaml
  }
}

export default (configPath?: string): Config[] =>
  getBaseConfig(configPath).map(c => createConfig(c))
