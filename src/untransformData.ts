import qs from 'query-string'

export default (data: any, headers: any) => {
  const contentType: string | undefined = headers['Content-Type'] || headers['content-type']

  if (contentType) {
    if (/^application\/json/.test(contentType)) return JSON.parse(data)
    if (/^application\/x-www-form-urlencoded/.test(contentType)) return qs.parse(data)
  }

  return data
}
