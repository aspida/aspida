import fs from 'fs'
import { build, AspidaConfig } from 'aspida/dist/commands'

// 最初の"_"以外をcamelizeする関数
export const customCamelize = (string: string) => {
  // eslint-disable-next-line no-useless-escape
  string = string.replace(/\w[\-_\s]+(.)?/g, function (match, chr) {
    const firstChr = match.charAt(0)
    return chr ? firstChr + chr.toUpperCase() : ''
  })
  return string
}

export default ({
  config,
  types,
  files,
  outputDir
}: {
  config: AspidaConfig
  types: string | null
  files: {
    file: string[]
    methods: string
  }[]
  outputDir?: string
}) => {
  if (types) {
    fs.mkdirSync(`${outputDir}/@types`)
    fs.writeFileSync(`${outputDir}/@types/index.ts`, types, 'utf8')
  }

  files.forEach(p => {
    const fileName = p.file.pop()
    p.file.forEach((_d, i, dirList) => {
      const dirPath = customCamelize(`${outputDir}/${dirList.slice(0, i + 1).join('/')}`)
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath)
      }
    })

    fs.writeFileSync(customCamelize(`${outputDir}/${p.file.join('/')}/${fileName}.ts`), p.methods, 'utf8')
  })
  const buildConfig = config
  buildConfig.input = outputDir || config.input

  build(buildConfig)
}
