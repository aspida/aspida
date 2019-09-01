interface MockParams {
  [key: string]: string | number
}

export default (relativePath: string, url = '', baseURL = ''): MockParams => {
  const params: MockParams = {}
  const dirList = relativePath.split('/')
  const parsedRequestUrl = url.replace(baseURL, '').split('/')

  parsedRequestUrl.forEach((dir, i) => {
    if (dirList[i].startsWith('_')) {
      params[dirList[i].slice(1)] = /^\d+$/.test(dir) ? +dir : dir
    }
  })

  return params
}
