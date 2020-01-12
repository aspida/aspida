import fs from 'fs'
import aspidaBuild from 'aspida/dist/buildTemplate'
import aspidaWrite from 'aspida/dist/writeRouteFile'
import { Template } from './Template'

export default (input: string, { baseURL, types, files }: Template) => {
  fs.mkdirSync(input)

  if (types) {
    fs.writeFileSync(`${input}/@types.ts`, types, 'utf8')
  }

  files.forEach(p => {
    const fileName = p.file.pop()
    p.file.forEach((_d, i, dirList) => {
      const dirPath = `${input}/${dirList.slice(0, i + 1).join('/')}`
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath)
      }
    })

    fs.writeFileSync(`${input}/${p.file.join('/')}/${fileName}.ts`, p.methods, 'utf8')
  })

  aspidaWrite(aspidaBuild({ input, baseURL }))
}
