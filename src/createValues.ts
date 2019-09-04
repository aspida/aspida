export default (relativePath: string, url = '', baseURL = '') => {
  const values: { [key: string]: string | number } = {}
  const dirList = relativePath.split('/')
  const parsedRequestUrl = url.replace(baseURL, '').split('/')

  parsedRequestUrl.forEach((dir, i) => {
    if (dirList[i].startsWith('_')) {
      values[dirList[i].slice(1)] = isNaN(+dir) ? dir : +dir
    }
  })

  return values
}
