import AsyncNedb from './AsyncNedb'

export type Seeds = {
  [key: string]: { [key: string]: any }[]
}

export default class {
  private collections: { [key: string]: AsyncNedb } = {}

  async initCollectionsAndSeeds(seeds: Seeds) {
    await Promise.all(
      Object.keys(seeds).map(key => {
        const collection = new AsyncNedb()
        collection.asyncInsert(seeds[key])
        this.collections[key] = collection
      })
    )
  }

  async deleteAll() {
    await Promise.all(
      Object.keys(this.collections).map(key =>
        this.collections[key].asyncRemove({}, { multi: true })
      )
    )
  }

  getCollection(key: string) {
    return this.collections[key]
  }
}
