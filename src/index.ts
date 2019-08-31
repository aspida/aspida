import axios, { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import formToParams from './formToParams'
import DS, { Seeds as Sd } from './DataStore'

export class DataStore extends DS {}
export type Seeds = Sd
export const asyncResponse = async (status: number, query: Promise<any>) => [status, await query]

interface MockParams {
  [key: string]: string | number
}

function createParams(relativePath: string, url = '', baseURL = ''): MockParams {
  const params: MockParams = {}
  const dirList = relativePath.split('/')
  const parsedRequestUrl = url.replace(baseURL, '').split('/')

  parsedRequestUrl.forEach((dir, i) => {
    if (dirList[i].startsWith('_')) {
      params[dirList[i].slice(1)] = /^\d+$/.test(dir) ? +dir : dir
    }
  })

  return params
}

const methodsList = ['get', 'post', 'put', 'delete', 'head', 'patch'] as const
type Methods = typeof methodsList[number]

export type MockRoute = ({
  path: string
  methods: {
    [T in Methods]?: ({
      params,
      data
    }: {
      headers: any
      params: ReturnType<typeof createParams>
      data: any
    }) => Promise<any> | any
  }
})[]

export default class {
  public adapter!: MockAdapter

  setClient(client: AxiosInstance) {
    this.adapter = new MockAdapter(client)
  }

  setRoute(route: MockRoute) {
    route.forEach(r => {
      const regPath = new RegExp(`${r.path.replace(/\/_[^/]+/g, '/[^/]+')}$`)

      methodsList.forEach(method => {
        if (r.methods[method]) {
          type MockMethod = 'onGet' | 'onPost' | 'onPut' | 'onDelete' | 'onHead' | 'onPatch'
          const key = `on${method[0].toUpperCase()}${method.slice(1)}` as MockMethod

          this.adapter[key](regPath).reply(async ({ headers, url, baseURL, data = '{}' }) =>
            r.methods[method]
              ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                r.methods[method]!({
                  headers,
                  params: createParams(r.path, url, baseURL),
                  data: /^multipart/.test(headers['Content-Type'] || headers['content-type'])
                    ? await formToParams(data as Buffer, headers)
                    : JSON.parse(data)
                })
              : [404, null]
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
