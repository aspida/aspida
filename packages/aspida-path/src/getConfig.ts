import getBaseConfig, { BaseConfig } from 'aspida/dist/getConfig'

export interface Config {
  input: string
  output: string
  baseURL: string
  trailingSlash: boolean
}

interface ConfigFile extends BaseConfig {
  path?: {
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
  ...config.path
})

export default (configPath?: string): Config[] =>
  getBaseConfig(configPath).map(c => createConfig(c))
