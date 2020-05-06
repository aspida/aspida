import getBaseConfig, { BaseConfig } from 'aspida/dist/getConfig'

export type Config = {
  input: string
  port: number
}

type ConfigFile = BaseConfig & {
  server?: {
    port?: number
  }
}

const createConfig = (config: ConfigFile) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const server = config.server!

  return {
    input: config.input,
    port: server.port || 8080
  }
}

export default (configPath?: string): Config[] =>
  getBaseConfig(configPath)
    .filter((c: ConfigFile) => c.server)
    .map(c => createConfig(c))
