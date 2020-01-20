import getBaseConfig, { BaseConfig } from 'aspida/dist/getConfig'

export interface Config {
  input: string
  output: string
  baseURL: string
  trailingSlash: boolean
}

interface ConfigFile extends BaseConfig {
  pathpida?: {
    input?: string
    output?: string
    baseURL?: string
    trailingSlash?: boolean
  }
}

const createConfig = (config: ConfigFile) => ({
  input: 'pages',
  output: '',
  baseURL: '',
  trailingSlash: false,
  ...config.pathpida
})

export default (configPath?: string): Config[] =>
  getBaseConfig(configPath).map(c => createConfig(c))
