import createRelativePath from './createRelativePath'

export default (path: string, url = '', baseURL?: string) => {
  const values: { [key: string]: string | number } = {}
  const dirList = path.split('/')
  const parsedRequestUrl = createRelativePath(url, baseURL).split('/')

  parsedRequestUrl.forEach((dir, i) => {
    if (dirList[i].startsWith('_')) {
      values[dirList[i].slice(1)] = isNaN(+dir) ? dir : +dir
    }
  })

  return values
}
