import { AxiosInstance, AxiosAdapter, AxiosRequestConfig } from 'axios'
import settle from 'axios/lib/core/settle'
import { HttpMethod, MockResponse } from './'

const makeResponse = ([status, data, headers]: MockResponse, config: AxiosRequestConfig) => ({
  status,
  data: data && data.toString() === '[object Object]' ? JSON.parse(JSON.stringify(data)) : data,
  headers,
  config
})

type MockCallback = (config: AxiosRequestConfig) => MockResponse | Promise<MockResponse>
type HandlersSet = { [key in HttpMethod]?: [RegExp, MockCallback][] }

const findHandler = (config: AxiosRequestConfig, handlersSet: HandlersSet) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const handlers = handlersSet[config.method!.toLowerCase() as HttpMethod]
  if (!handlers) return

  const url =
    config.baseURL && config.url && new RegExp(`^${config.baseURL}`).test(config.url)
      ? config.url.replace(config.baseURL, '')
      : config.url || ''

  return handlers.find(
    handler =>
      handler[0].test(url) ||
      (config.baseURL &&
        handler[0].test(`${config.baseURL.replace(/\/+$/, '')}/${url.replace(/^\/+/, '')}`))
  )
}

class MockAdapter {
  private originalAdapter?: AxiosAdapter
  private handlersSet: HandlersSet = {}
  private delayTime = 0

  constructor(private axiosInstance: AxiosInstance) {
    this.originalAdapter = axiosInstance.defaults.adapter

    axiosInstance.defaults.adapter = config =>
      new Promise((resolve, reject) => {
        const handler = findHandler(config, this.handlersSet)

        if (handler) {
          const result = handler[1](config)

          if (result instanceof Promise) {
            result
              .then(values =>
                this.delayCall(() => settle(resolve, reject, makeResponse(values, config)))
              )
              .catch(error => this.delayCall(() => reject(error)))
          } else {
            this.delayCall(() => settle(resolve, reject, makeResponse(result, config)))
          }
        } else {
          this.delayCall(() => settle(resolve, reject, { status: 404, config }))
        }
      })
  }

  private delayCall(callback: () => void) {
    setTimeout(callback, this.delayTime)
  }

  public setDelayTime(delayTime: number) {
    this.delayTime = delayTime
  }

  public on(method: HttpMethod, matcher: RegExp, callback: MockCallback) {
    this.handlersSet[method] = [...(this.handlersSet[method] || []), [matcher, callback]]
  }

  public restore() {
    this.axiosInstance.defaults.adapter = this.originalAdapter
  }

  public reset() {
    this.handlersSet = {}
  }
}

export default MockAdapter
