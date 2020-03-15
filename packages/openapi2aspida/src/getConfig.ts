import path from 'path'
import { OpenAPI } from 'openapi-types'
import getBaseConfig, { BaseConfig } from 'aspida/dist/getConfig'

export interface Config {
  input: string | OpenAPI.Document
  output: string
  trailingSlash: boolean
  isYaml: boolean
  needsMock: boolean
  needsMockType: boolean
}

interface ConfigFile extends BaseConfig {
  openapi?: {
    inputFile: string
    yaml?: boolean
    mock?: boolean
    noMockType?: boolean
  }
}

const createConfig = (config: ConfigFile) => {
  const openapi = config.openapi!

  return {
    input: openapi.inputFile,
    output: config.input,
    trailingSlash: config.trailingSlash,
    isYaml:
      openapi.yaml === undefined
        ? path.extname(openapi.inputFile).slice(1) === 'yaml'
        : openapi.yaml,
    needsMock: !!openapi.mock,
    needsMockType: !openapi.noMockType
  }
}

export default (configPath?: string): Config[] =>
  getBaseConfig(configPath)
    .filter((c: ConfigFile) => c.openapi)
    .map(c => createConfig(c))
