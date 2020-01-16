export default (path: string, relativePath: string) => {
  const values: { [key: string]: string | number } = {}
  const dirList = path.split('/')
  const parsedRequestUrl = relativePath.split('/')

  parsedRequestUrl.forEach((dir, i) => {
    if (dirList[i].startsWith('_')) {
      const [valueName, type = 'number'] = dirList[i].slice(1).split('@')
      values[valueName] = isNaN(+dir) || type !== 'number' ? dir : +dir
    }
  })

  return values
}
