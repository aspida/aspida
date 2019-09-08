import axios, { AxiosInstance } from 'axios'
import settle from 'axios/lib/core/settle'
import { HandlersSet, MockRoute, httpMethods } from './types'
import makeResponse from './makeResponse'
import findAndCallHandler from './findAndCallHandler'

export const createPathRegExp = (path: string) =>
  new RegExp(`^${path.replace(/\/_[^/]+/g, '/[^/]+')}$`)

export default class {
  private handlersSet: HandlersSet = {}
  private delayTime = 0

  constructor(route?: MockRoute, private client?: AxiosInstance) {
    if (route) this.setClient(client || axios).setRoute(route)
  }

  private delayCall(callback: () => void) {
    setTimeout(callback, this.delayTime)
  }

  public setClient(client: AxiosInstance) {
    client.defaults.adapter = config =>
      new Promise((resolve, reject) => {
        const result = findAndCallHandler(config, this.handlersSet)

        if (!result) {
          this.delayCall(() => settle(resolve, reject, { status: 404, config }))
        } else if (result instanceof Promise) {
          result
            .then(values =>
              this.delayCall(() => settle(resolve, reject, makeResponse(values, config)))
            )
            .catch(error => this.delayCall(() => reject(error)))
        } else {
          this.delayCall(() => settle(resolve, reject, makeResponse(result, config)))
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
    this.setDelayTime(0)
    this.handlersSet = {}
    return this
  }
}
