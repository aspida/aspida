import axios, { AxiosInstance, AxiosAdapter } from 'axios'
import settle from 'axios/lib/core/settle'
import { HandlersSet, MockRoute, httpMethods } from './types'
import createLogString from './createLogString'
import makeResponse from './makeResponse'
import findAndCallHandler from './findAndCallHandler'

export const createPathRegExp = (path: string) =>
  new RegExp(`^${path.replace(/\/_[^/]+/g, '/[^/]+')}$`)

export default class {
  private handlersSet: HandlersSet = {}
  private delayTime = 0
  private needsLog = false
  private client!: AxiosInstance
  private originalAdapter?: AxiosAdapter
  private baseURL = ''

  constructor(route?: MockRoute, client?: AxiosInstance, baseURL = '') {
    if (route)
      this.setBaseURL(baseURL)
        .setClient(client || axios)
        .setRoute(route)
  }

  public setClient(client: AxiosInstance) {
    this.client = client
    this.originalAdapter = client.defaults.adapter

    client.defaults.adapter = config =>
      // eslint-disable-next-line no-async-promise-executor
      new Promise(async (resolve, reject) => {
        const customConfig = {
          ...config,
          baseURL: config.baseURL || this.baseURL
        }

        try {
          const result = findAndCallHandler(customConfig, this.handlersSet)

          if (!result && this.originalAdapter) {
            this.originalAdapter(customConfig).then(resolve, reject)
            return
          }

          const res = result
            ? makeResponse(result instanceof Promise ? await result : result, customConfig)
            : { status: 404, config: customConfig }

          if (this.needsLog) console.log(createLogString(customConfig, res.status))

          setTimeout(() => settle(resolve, reject, res), this.delayTime)
        } catch (e) {
          reject(e)
        }
      })

    return this
  }

  public setRoute(route: MockRoute) {
    route.forEach(r => {
      const pathRegExp = createPathRegExp(r.path)

      httpMethods.forEach(method => {
        if (r.methods[method]) {
          this.handlersSet[method] = [
            ...(this.handlersSet[method] || []),
            [pathRegExp, r.path, r.methods[method]]
          ]
        }
      })
    })

    return this
  }

  public setDelayTime(delayTime: number) {
    this.delayTime = delayTime
    return this
  }

  public setBaseURL(baseURL: string) {
    this.baseURL = baseURL
    return this
  }

  public reset() {
    this.setDelayTime(0).disableLog()
    this.handlersSet = {}
    return this
  }

  public restore() {
    this.reset()
    delete this.client.defaults.adapter

    if (this.originalAdapter) {
      this.client.defaults.adapter = this.originalAdapter
      delete this.originalAdapter
    }

    delete this.client
    return this
  }

  public enableLog() {
    this.needsLog = true
    return this
  }

  public disableLog() {
    this.needsLog = false
    return this
  }
}
