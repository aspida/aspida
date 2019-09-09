const regOriginURL = /^(https?:)?\/\/[^/]+/

export default (url = '', baseURL?: string) =>
  (baseURL && !regOriginURL.test(url)
    ? `${baseURL.replace(/\/$/, '')}/${url.replace(/^\//, '')}`
    : url
  )
    .replace(regOriginURL, '')
    .replace(/\/$/, '')
