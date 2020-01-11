import fs from 'fs'
import path from 'path'
import { AspidaConfig, defaultConfigPath, defaultConfig } from 'aspida/src/getConfig'

export interface Config {
  inputFile: string
  output: string
  isYaml: boolean
}

export interface AspidaSwaggerConfig extends AspidaConfig {
  aspida_swagger?: {
    swagger: string
    yaml?: boolean
  }
}

const defaultSwaggerConfig = {
  swagger: 'swagger.json'
}

const createConfig = (config?: AspidaSwaggerConfig) => {
  const inputFile = config?.aspida_swagger?.swagger || defaultSwaggerConfig.swagger

  return {
    inputFile,
    output: config?.aspida?.input || defaultConfig.input,
    isYaml: config?.aspida_swagger?.yaml === undefined ? path.extname(inputFile).slice(1) === 'yaml' : config?.aspida_swagger?.yaml
  }
}

export default (configPath = defaultConfigPath): Config[] => {
  if (fs.existsSync(configPath)) {
    const config: AspidaSwaggerConfig | AspidaSwaggerConfig[] = require(path.join(process.cwd(), configPath))

    return Array.isArray(config) ? config.map(c => createConfig(c)) : [createConfig(config)]
  }

  return [createConfig()]
}