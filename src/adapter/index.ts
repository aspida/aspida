import { AxiosInstance, AxiosAdapter, AxiosRequestConfig } from 'axios'
import settle from 'axios/lib/core/settle'
import { findHandler, isSimpleObject } from './utils'

type MockResponse = [number, any?, any?]

const makeResponse = ([status, data, headers]: MockResponse, config: AxiosRequestConfig) => ({
  status,
  data: isSimpleObject(data) ? JSON.parse(JSON.stringify(data)) : data,
  headers,
  config
})

const VERBS = ['get', 'post', 'head', 'delete', 'patch', 'put', 'options'] as const

type MockCallback = (config: AxiosRequestConfig) => MockResponse | Promise<MockResponse>
type Handlers = { [key in typeof VERBS[number]]: [RegExp, MockCallback][] }
const getVerbObject = () =>
  VERBS.reduce((accumulator, verb) => ({ ...accumulator, [verb]: [] }), {} as Handlers)

class MockAdapter {
  private originalAdapter?: AxiosAdapter
  private handlers: Handlers

  constructor(private axiosInstance: AxiosInstance, private delayResponse = 0) {
    this.originalAdapter = axiosInstance.defaults.adapter
    this.handlers = getVerbObject()

    axiosInstance.defaults.adapter = config =>
      new Promise((resolve, reject) => {
        const handler = findHandler(
          config,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          this.handlers[config.method!.toLowerCase() as typeof VERBS[number]]
        )

        if (handler) {
          const result: MockResponse | Promise<MockResponse> = handler[1](config)

          if (result instanceof Promise) {
            result
              .then(values =>
                setTimeout(
                  () => settle(resolve, reject, makeResponse(values, config)),
                  this.delayResponse
                )
              )
              .catch(error => setTimeout(() => reject(error), this.delayResponse))
          } else {
            setTimeout(
              () => settle(resolve, reject, makeResponse(result, config)),
              this.delayResponse
            )
          }
        } else {
          setTimeout(() => settle(resolve, reject, { status: 404, config }), this.delayResponse)
        }
      })
  }

  public on(method: typeof VERBS[number], matcher: RegExp, callback: MockCallback) {
    this.handlers[method].push([matcher, callback])
  }

  public restore() {
    this.axiosInstance.defaults.adapter = this.originalAdapter
  }

  public reset() {
    this.handlers = getVerbObject()
  }
}

export default MockAdapter
