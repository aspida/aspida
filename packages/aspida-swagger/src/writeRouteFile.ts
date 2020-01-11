import fs from 'fs'
import aspidaBuild from 'aspida/src/buildTemplate'
import aspidaWrite from 'aspida/src/writeRouteFile'
import { Template } from './Template'

export default (input: string, { baseURL, types, files }: Template) => {
  fs.mkdirSync(input, '0777')

  if (types) {
    fs.writeFileSync(`${input}/@types.ts`, types, 'utf8')
  }

  files.forEach(p => {
    const fileName = p.file.pop()
    p.file.forEach((_d, i, dirList) => {
      const dirPath = `${input}/${dirList.slice(0, i + 1).join('/')}`
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, '0777')
      }
    })

    fs.writeFileSync(`${input}/${p.file.join('/')}/${fileName}.ts`, p.methods, 'utf8')
  })

  aspidaWrite(aspidaBuild({ input, baseURL }))
}
