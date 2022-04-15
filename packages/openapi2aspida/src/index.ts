import fs from 'fs'
import fse from 'fs-extra'
import getConfig from './getConfig'
import buildTemplate from './buildTemplate'
import writeRouteFile from './writeRouteFile'
import outputFilePath from './outputFilePath'

/**
 * @param {string} outputdir 出力するディレクトリー
 * @param {Array<Object>} configs コンフィグ
 * */
export default (configs?: Parameters<typeof getConfig>[0], outputdir?: string) => {
  return getConfig(configs).map(async config => {
    const oustPutFilePath = outputFilePath({
      cliOutputPath: outputdir,
      InputFilePath: config.output
    })

    if (!fs.existsSync(oustPutFilePath)) {
      // フォルダが存在しない

      fse.ensureDirSync(oustPutFilePath)
    } else if (fs.readdirSync(config.output).length) {
      // フォルダが存在する
      console.log(
        `fatal: destination path '${oustPutFilePath}' already exists and is not an empty directory.`
      )
      return
    }

    const { baseURL, types, files } = await buildTemplate(config)

    writeRouteFile({
      config: {
        input: config.output,
        baseURL,
        outputMode: config.outputMode,
        outputEachDir: config.outputEachDir,
        trailingSlash: config.trailingSlash
      },
      types,
      files,
      outputDir: oustPutFilePath
    })
  })
}
