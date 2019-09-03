import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import MockAdapter from './adapter'
import binaryToDataURI from './binaryToDataURI'
import createValues from './createValues'
import untransformData from './untransformData'

export const toDataURI = binaryToDataURI

export type MockResponse = [number, any?, { [key: string]: any }?]
export const asyncResponse = async (
  status: number,
  query: Promise<any>,
  headers?: any
): Promise<MockResponse> => [status, await query, headers]

const httpMethods = ['get', 'post', 'put', 'delete', 'head', 'patch'] as const
export type HttpMethod = typeof httpMethods[number]

export type MockMethods = {
  [T in HttpMethod]?: ({
    config,
    values,
    data
  }: {
    config: AxiosRequestConfig
    values: ReturnType<typeof createValues>
    data: any
  }) => MockResponse | Promise<MockResponse>
}

export type MockRoute = ({
  path: string
  methods: MockMethods
})[]

export class MockServer {
  private adapter!: MockAdapter

  constructor(route?: MockRoute, client?: AxiosInstance) {
    if (route) {
      this.setClient(client || axios)
      this.setRoute(route)
    }
  }

  setClient(client: AxiosInstance) {
    this.adapter = new MockAdapter(client)
    return this
  }

  setRoute(route: MockRoute) {
    route.forEach(r => {
      const regPath = new RegExp(`${r.path.replace(/\/_[^/]+/g, '/[^/]+')}$`)

      httpMethods.forEach(method => {
        if (r.methods[method]) {
          this.adapter.on(method, regPath, config =>
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            r.methods[method]!({
              config,
              values: createValues(r.path, config.url, config.baseURL),
              data: untransformData(config.data, config.headers)
            })
          )
        }
      })
    })

    return this
  }

  setDelayTime(delayTime: number) {
    this.adapter.setDelayTime(delayTime)
    return this
  }

  restore() {
    this.adapter.restore()
    return this
  }

  reset() {
    this.setDelayTime(0).adapter.reset()
    return this
  }
}

export default (route?: MockRoute, client?: AxiosInstance) => new MockServer(route, client)
