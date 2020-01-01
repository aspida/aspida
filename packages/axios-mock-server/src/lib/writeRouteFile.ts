import fs from 'fs'

export default ({ filePath, text }: { filePath: string; text: string }) => {
  fs.writeFileSync(filePath, text, 'utf8')
  console.log(`${filePath} was built successfully.`)
}
