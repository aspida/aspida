import { AxiosRequestConfig } from 'axios'

const combineUrls = (baseURL: string, url: string) =>
  `${baseURL.replace(/\/+$/, '')}/${url.replace(/^\/+/, '')}`
type MockResponse = [number, any?, any?]
type MockCallback = (config: AxiosRequestConfig) => MockResponse | Promise<MockResponse>
type HandlerList = [RegExp, MockCallback][]

export const findHandler = (config: AxiosRequestConfig, handlerList: HandlerList) => {
  const url =
    config.baseURL && config.url && new RegExp(`^${config.baseURL}`).test(config.url)
      ? config.url.replace(config.baseURL, '')
      : config.url || ''

  return handlerList.find(
    handler =>
      handler[0].test(url) || (config.baseURL && handler[0].test(combineUrls(config.baseURL, url)))
  )
}

export const isSimpleObject = (value: any) => {
  return value && value.toString() === '[object Object]'
}
