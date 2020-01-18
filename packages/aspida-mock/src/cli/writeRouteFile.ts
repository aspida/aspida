import fs from 'fs'
import { Template } from './Template'

export default ({ filePath, text }: Template) => {
  fs.writeFileSync(filePath, text, 'utf8')
  console.log(`${filePath} was built successfully.`)
}
