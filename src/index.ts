import axios, { AxiosInstance } from 'axios'
import MockAdapter from './adapter'
import binaryToDataURI from './binaryToDataURI'
import createParams from './createParams'
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
    headers,
    params,
    data
  }: {
    headers: any
    params: ReturnType<typeof createParams>
    data: any
  }) => Promise<MockResponse> | MockResponse
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
          this.adapter.on(method, regPath, ({ headers, url, baseURL, data }) =>
            r.methods[method]
              ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                r.methods[method]!({
                  headers,
                  params: createParams(r.path, url, baseURL),
                  data: untransformData(data, headers)
                })
              : [404]
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
