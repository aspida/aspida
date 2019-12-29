import fs from 'fs'
import path from 'path'

const listFiles = (mockDir: string) => {
  const list: string[] = []

  fs.readdirSync(mockDir).forEach(file => {
    const target = path.posix.join(mockDir, file)

    if (fs.statSync(target).isFile()) {
      list.push(target)
    } else if (fs.statSync(target).isDirectory()) {
      list.push(...listFiles(target))
    }
  })

  return list
}

export default listFiles
