import { OpenAPI } from 'openapi-types'
import { AspidaConfig, getConfigs } from 'aspida/dist/commands'

export type Config = Pick<AspidaConfig, 'outputEachDir' | 'outputMode' | 'trailingSlash'> & {
  input: string | OpenAPI.Document
  output: string
  isYaml: boolean
}

export type ConfigFile = AspidaConfig & {
  openapi?: {
    inputFile: string
    yaml?: boolean
    outputDir?: string
  }
}

const createConfig = (config: ConfigFile): Config => {
  const openapi = config.openapi!
  return {
    input: openapi.inputFile,
    output: config.input,
    trailingSlash: config.trailingSlash,
    outputEachDir: config.outputEachDir,
    outputMode: config.outputMode,
    isYaml: openapi.yaml ?? !openapi.inputFile.endsWith('.json')
  }
}

type PartialConfig = Partial<ConfigFile> | Partial<ConfigFile>[]

export default (config?: PartialConfig): Config[] => {
  const ReturnValue = getConfigs(config)
    .filter((c: ConfigFile) => c.openapi)
    .map(c => createConfig(c))

  return ReturnValue
}
