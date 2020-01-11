import fs from 'fs'
import path from 'path'
import { AspidaConfig, defaultConfigPath, defaultConfig } from 'aspida/src/getConfig'

export interface Config {
  inputFile: string
  output: string
  isYaml: boolean
}

export interface AspidaSwaggerConfig extends AspidaConfig {
  aspidaSwagger?: {
    swagger: string
    yaml?: boolean
  }
}

const defaultSwaggerConfig = {
  swagger: 'swagger.json'
}

const createConfig = (config?: AspidaSwaggerConfig) => {
  const inputFile = config?.aspidaSwagger?.swagger || defaultSwaggerConfig.swagger

  return {
    inputFile,
    output: config?.aspida?.input || defaultConfig.input,
    isYaml:
      config?.aspidaSwagger?.yaml === undefined
        ? path.extname(inputFile).slice(1) === 'yaml'
        : config?.aspidaSwagger?.yaml
  }
}

export default (configPath = defaultConfigPath): Config[] => {
  if (fs.existsSync(configPath)) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const config: AspidaSwaggerConfig | AspidaSwaggerConfig[] = require(path.join(
      process.cwd(),
      configPath
    ))

    return Array.isArray(config) ? config.map(c => createConfig(c)) : [createConfig(config)]
  }

  return [createConfig()]
}
