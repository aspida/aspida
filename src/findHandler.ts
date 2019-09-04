import { AxiosRequestConfig } from 'axios'
import { HandlersSet, HttpMethod } from './types'

export default (config: AxiosRequestConfig, handlersSet: HandlersSet) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const handlers = handlersSet[config.method!.toLowerCase() as HttpMethod]
  if (!handlers) return

  const url =
    config.baseURL && config.url && new RegExp(`^${config.baseURL}`).test(config.url)
      ? config.url.replace(config.baseURL, '')
      : config.url || ''

  return handlers.find(
    ([regPath]) =>
      regPath.test(url) ||
      (config.baseURL &&
        regPath.test(`${config.baseURL.replace(/\/+$/, '')}/${url.replace(/^\/+/, '')}`))
  )
}
