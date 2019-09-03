import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import MockAdapter from './adapter'
import binaryToDataURI from './binaryToDataURI'
import createValues from './createValues'
import untransformData from './untransformData'

export const toDataURI = binaryToDataURI

export type MockResponse = [number, any?, any?]
export const asyncResponse = async (
  status: number,
  query: Promise<any>,
  headers?: any
): Promise<MockResponse> => [status, await query, headers]

const methodsList = ['get', 'post', 'put', 'delete', 'head', 'patch'] as const
type Methods = typeof methodsList[number]

export type MockMethods = {
  [T in Methods]?: ({
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

export default class {
  public adapter!: MockAdapter

  constructor(route?: MockRoute, client?: AxiosInstance) {
    if (route) this.init(route, client)
  }

  setClient(client: AxiosInstance) {
    this.adapter = new MockAdapter(client)
  }

  setRoute(route: MockRoute) {
    route.forEach(r => {
      const regPath = new RegExp(`${r.path.replace(/\/_[^/]+/g, '/[^/]+')}$`)

      methodsList.forEach(method => {
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
  }

  init(route: MockRoute, client?: AxiosInstance) {
    this.setClient(client || axios)
    this.setRoute(route)
  }

  reset() {
    this.adapter.reset()
  }
}
