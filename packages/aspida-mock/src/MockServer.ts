import axios, { AxiosInstance, AxiosAdapter } from 'axios'
import settle from 'axios/lib/core/settle'
import { MockRoute } from './'
import toMockConfig from './toMockConfig'
import createLogString from './createLogString'
import makeResponse from './makeResponse'
import findAndCallHandler from './findAndCallHandler'

export default class {
  private delayTime = 0
  private needsLog = false
  private client!: AxiosInstance
  private originalAdapter?: AxiosAdapter
  private routes: MockRoute[] = []

  constructor(routes: MockRoute[], client?: AxiosInstance, baseURL = '') {
    this.routes = routes
    this.setClient(client || axios)
  }

  public setClient(client: AxiosInstance) {
    this.client = client
    this.originalAdapter = client.defaults.adapter

    client.defaults.adapter = config =>
      // eslint-disable-next-line no-async-promise-executor
      new Promise(async (resolve, reject) => {
        const customConfig = toMockConfig(config)

        try {
          const result = await findAndCallHandler(customConfig, this.routes)

          if (!result && this.originalAdapter) {
            this.originalAdapter(config).then(resolve, reject)
            return
          }

          const res = result ? makeResponse(result, customConfig) : { status: 404, config }

          if (this.needsLog) console.log(createLogString(customConfig, res.status))

          setTimeout(() => settle(resolve, reject, res), this.delayTime)
        } catch (e) {
          reject(e)
        }
      })

    return this
  }

  public setDelayTime(delayTime: number) {
    this.delayTime = delayTime
    return this
  }

  public reset() {
    this.setDelayTime(0).disableLog()
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
