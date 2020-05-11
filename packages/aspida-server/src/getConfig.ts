import getBaseConfig, { BaseConfig } from 'aspida/dist/getConfig'

export type Config = {
  input: string
  port: number
  cors: boolean
  uploader: {
    dest?: string
    size?: number
  }
}

type ConfigFile = BaseConfig & {
  server?: {
    port?: number
    cors?: boolean
    uploader?: {
      dest?: string
      size?: number
    }
  }
}

const createConfig = (config: ConfigFile) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const server = config.server!

  return {
    input: config.input,
    port: server.port ?? 8080,
    cors: server.cors ?? false,
    uploader: server.uploader ?? {}
  }
}

export default (configPath?: string): Config[] =>
  getBaseConfig(configPath)
    .filter((c: ConfigFile) => c.server)
    .map(c => createConfig(c))
