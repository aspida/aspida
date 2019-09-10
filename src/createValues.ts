export default (path: string, relativePath: string) => {
  const values: { [key: string]: string | number } = {}
  const dirList = path.split('/')
  const parsedRequestUrl = relativePath.split('/')

  parsedRequestUrl.forEach((dir, i) => {
    if (dirList[i].startsWith('_')) {
      values[dirList[i].slice(1)] = isNaN(+dir) ? dir : +dir
    }
  })

  return values
}
