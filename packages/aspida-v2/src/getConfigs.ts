import fs from 'fs'
import path from 'path'

export type AspidaConfig = {
  input: string
  baseURL: string
  trailingSlash: boolean
  outputEachDir: boolean
}

const defaultConfig: AspidaConfig = {
  input: 'api',
  baseURL: '',
  trailingSlash: false,
  outputEachDir: false
}

type PartialConfig = Partial<AspidaConfig> | Partial<AspidaConfig>[]

export const getConfigs = (config: PartialConfig | string = 'aspida.config.js'): AspidaConfig[] => {
  const configs =
    typeof config !== 'string'
      ? config
      : fs.existsSync(config)
      ? (require(path.join(process.cwd(), config)) as PartialConfig)
      : defaultConfig

  return Array.isArray(configs)
    ? configs.map(c => ({ ...defaultConfig, ...c }))
    : [{ ...defaultConfig, ...configs }]
}
