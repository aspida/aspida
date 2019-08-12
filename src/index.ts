import { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import AsyncNedb from './AsyncNedb'

export type MockModels = {
  [key: string]: {
    seeds: () => { [key: string]: any }[]
    create: (db: any, aa: any) => any
  }
}

interface MockParams {
  [key: string]: string | number
}

function createParams(relativePath: string, url = '', baseURL = ''): MockParams {
  const params: MockParams = {}
  const dirList = relativePath.split('/')
  const parsedRequestUrl = url.replace(baseURL, '').split('/')

  if (parsedRequestUrl[0] === '') parsedRequestUrl.shift()

  parsedRequestUrl.forEach((dir, i) => {
    if (dirList[i].startsWith('_')) {
      params[dirList[i].slice(1)] = /^\d+$/.test(dir) ? +dir : dir
    }
  })

  return params
}

const methodsList = ['get', 'post', 'put', 'delete', 'options', 'head', 'patch'] as const
type Methods = typeof methodsList[number]

class Datastore<T extends { [key: string]: any }> {
  private db: { [U in keyof T ]: AsyncNedb }
  private models: MockModels

  constructor(models: T) {
    const db = {} as { [U in keyof T ]: AsyncNedb }
    Object.keys(models).forEach(key => {
      const collection = new AsyncNedb()
      db[key as keyof T] = collection
    })
    this.db = db
    this.models = models
  }

  async initSeeds() {
    const collectionNames = Object.keys(this.models)
    for (let i = 0; i < collectionNames.length; i += 1) {
      const seeds = this.models[collectionNames[i]].seeds()
      for (let n = 0; n < seeds.length; n += 1) {
        await this.db[collectionNames[i]].asyncInsert(seeds[n])
      }
    }
  }

  getCollection(collectionName: keyof T) {
    return this.db[collectionName]
  }
}

export type MockRouter = ({
  path: string,
  methods: {
    [T in Methods]?: <V>(db: Datastore<V>, params: ReturnType<typeof createParams>, data: any) => Promise<any>
  }
})[]

export default async (client: AxiosInstance, models: MockModels, router: MockRouter) => {
  const mock = new MockAdapter(client)
  const db = new Datastore(models)
  await db.initSeeds()
  router.forEach(r => {
    const regPath = new RegExp(`${r.path.replace(/\/_[^/]+/g, '/[^/]+')}$`)

    methodsList.forEach((method) => {
      if (r.methods[method]) {
        (mock[`on${method[0].toUpperCase()}${method.slice(1)}`] as typeof mock.onAny)(regPath).reply(async ({ url, baseURL, data = '{}' }) =>
          [200, await r.methods[method]!(db, createParams(r.path, url, baseURL), JSON.parse(data))]
        )
      }
    })
  })
}
