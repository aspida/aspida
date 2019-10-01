const regOriginURL = /^(https?:)?\/\/[^/]+/

export default (url = '', baseURL?: string) =>
  `/${url
    .replace(
      baseURL && url.startsWith(baseURL) ? baseURL : regOriginURL.test(url) ? regOriginURL : '',
      ''
    )
    .replace(/^\//, '')
    .replace(/\/$/, '')}`
