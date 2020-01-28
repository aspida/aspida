import path from 'path'
import { OpenAPI } from 'openapi-types'
import getBaseConfig, { BaseConfig } from 'aspida/dist/getConfig'

export interface Config {
  input: string | OpenAPI.Document
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
  const input = config.openapi?.inputFile || 'openapi.json'

  return {
    input,
    output: config.input,
    trailingSlash: config.trailingSlash,
    isYaml:
      config.openapi?.yaml === undefined
        ? path.extname(input).slice(1) === 'yaml'
        : config.openapi?.yaml
  }
}

export default (configPath?: string): Config[] =>
  getBaseConfig(configPath).map(c => createConfig(c))
