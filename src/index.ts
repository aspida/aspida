import { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import AsyncNedb from './AsyncNedb'

export type MockModels = {
  [key: string]: {
    seeds: () => { [key: string]: any }[]
    create: (db: Datastore, params: { [key: string]: any }) => { [key: string]: any }
  }
}

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

const methodsList = ['get', 'post', 'put', 'delete', 'options', 'head', 'patch'] as const
type Methods = typeof methodsList[number]

export class Datastore {
  private db: { [key: string]: AsyncNedb }
  private models: MockModels

  constructor(models: MockModels) {
    const db = {} as { [key: string]: AsyncNedb }
    Object.keys(models).forEach(key => {
      const collection = new AsyncNedb()
      db[key] = collection
    })
    this.db = db
    this.models = models
  }

  async initSeeds() {
    await Promise.all(Object.keys(this.models).map(key =>
      this.db[key].asyncInsert(this.models[key].seeds())
    ))
  }

  async deleteAll() {
    await Promise.all(Object.keys(this.models).map(key =>
      this.db[key].asyncRemove({}, { multi: true })
    ))
  }

  getCollection(collectionName: string) {
    return this.db[collectionName]
  }
}

export type MockRouter = ({
  path: string,
  methods: {
    [T in Methods]?: (db: Datastore, params: ReturnType<typeof createParams>, data: any) => Promise<any>
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
        type MockMethod = 'onGet'| 'onPost'| 'onPut'| 'onDelete'| 'onOptions'| 'onHead'| 'onPatch'
        const key =`on${method[0].toUpperCase()}${method.slice(1)}` as Extract<MockMethod, keyof typeof mock>
        (mock[key])(regPath).reply(async ({ url, baseURL, data = '{}' }) =>
          [200, await r.methods[method]!(db, createParams(r.path, url, baseURL), JSON.parse(data))]
        )
      }
    })
  })

  return { mock, db }
}
