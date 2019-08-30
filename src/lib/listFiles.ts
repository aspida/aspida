import fs from 'fs'
import path from 'path'

const listFiles = (mockDir: string, regMockExtension: RegExp) => {
  const list: string[] = []

  if (!fs.existsSync(mockDir)) {
    return list
  }

  if (fs.statSync(mockDir).isFile() && regMockExtension.test(mockDir)) {
    list.push(mockDir)
  }

  if (fs.statSync(mockDir).isDirectory()) {
    fs.readdirSync(mockDir).forEach(file => {
      const target = path.join(mockDir, file)

      if (fs.statSync(target).isFile() && regMockExtension.test(target)) {
        list.push(target)
      } else if (fs.statSync(target).isDirectory()) {
        list.push(...listFiles(target, regMockExtension))
      }
    })
  }

  return list
}

export default listFiles
