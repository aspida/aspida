import path from 'path'
import { OpenAPI } from 'openapi-types'
import getBaseConfig, { BaseConfig } from 'aspida/dist/getConfig'

export type Config = {
  input: string | OpenAPI.Document
  output: string
  trailingSlash: boolean
  isYaml: boolean
  needsMock: boolean
  needsMockType: boolean
}

type ConfigFile = BaseConfig & {
  openapi?: {
    inputFile: string
    yaml?: boolean
    mock?: boolean
    noMockType?: boolean
  }
}

const createConfig = (config: ConfigFile) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const openapi = config.openapi!

  return {
    input: openapi.inputFile,
    output: config.input,
    trailingSlash: config.trailingSlash,
    isYaml: openapi.yaml ?? path.extname(openapi.inputFile).slice(1) === 'yaml',
    needsMock: !!openapi.mock,
    needsMockType: !openapi.noMockType
  }
}

export default (configPath?: string): Config[] =>
  getBaseConfig(configPath)
    .filter((c: ConfigFile) => c.openapi)
    .map(c => createConfig(c))
