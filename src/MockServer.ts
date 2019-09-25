import axios, { AxiosInstance } from 'axios'
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

  constructor(route?: MockRoute, client?: AxiosInstance) {
    if (route) this.setClient(client || axios).setRoute(route)
  }

  public setClient(client: AxiosInstance) {
    client.defaults.adapter = config =>
      // eslint-disable-next-line no-async-promise-executor
      new Promise(async (resolve, reject) => {
        try {
          const result = findAndCallHandler(config, this.handlersSet)
          const res = result
            ? makeResponse(result instanceof Promise ? await result : result, config)
            : { status: 404, config }

          if (this.needsLog) console.log(createLogString(config, res.status))

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

  public reset() {
    this.setDelayTime(0).disableLog()
    this.handlersSet = {}
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
