import fs from 'fs'

export default ({ filePath, text }: { filePath: string; text: string }) => {
  if (fs.existsSync(filePath) && fs.readFileSync(filePath, 'utf8') === text) return

  fs.writeFileSync(filePath, text, 'utf8')
  console.log(`${filePath} was built successfully.`)
}
