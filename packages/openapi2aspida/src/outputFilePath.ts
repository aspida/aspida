type config = {
  cliOutputPath?: string
  InputFilePath: string
}

export default function (config: config) {
  if (config.cliOutputPath) {
    return config.cliOutputPath
  } else {
    return config.InputFilePath
  }
}
