import nedb from 'nedb'

export default class extends nedb {
  public asyncLoadDatabase() {
    return new Promise<void>((resolve, reject) =>
      super.loadDatabase(err => {
        if (err) reject(err)
        else resolve()
      })
    )
  }

  public asyncInsert<T>(newDoc: T): Promise<T> {
    return new Promise((resolve, reject) =>
      super.insert(newDoc, (err, document) => {
        if (err) reject(err)
        else resolve(document)
      })
    )
  }

  public asyncFind<T>(query: any, projection?: T): Promise<Array<T>> {
    if (projection) {
      return new Promise((resolve, reject) =>
        super.find<T>(query, projection, (err, documents) => {
          if (err) reject(err)
          else resolve(documents)
        })
      )
    } else {
      return new Promise((resolve, reject) =>
        super.find<T>(query, (err, documents) => {
          if (err) reject(err)
          else resolve(documents)
        })
      )
    }
  }

  public asyncFindOne<T>(query: any, projection?: T): Promise<Array<T>> {
    if (projection) {
      return new Promise((resolve, reject) =>
        super.find<T>(query, projection, (err, document) => {
          if (err) reject(err)
          else resolve(document)
        })
      )
    } else {
      return new Promise((resolve, reject) =>
        super.find<T>(query, (err, document) => {
          if (err) reject(err)
          else resolve(document)
        })
      )
    }
  }

  public asyncCount(query: any): Promise<number> {
    return new Promise((resolve, reject) =>
      super.count(query, (err, n) => {
        if (err) reject(err)
        else resolve(n)
      })
    )
  }

  public asyncEnsureIndex(options: any): Promise<void> {
    return new Promise((resolve, reject) =>
      super.ensureIndex(options, err => {
        if (err) reject(err)
        else resolve()
      })
    )
  }

  public asyncRemoveIndex(fieldName: string): Promise<void> {
    return new Promise((resolve, reject) =>
      super.removeIndex(fieldName, err => {
        if (err) reject(err)
        else resolve()
      })
    )
  }

  public asyncUpdate<T>(
    query: any,
    updateQuery: any,
    options: nedb.UpdateOptions = {}
  ): Promise<{ numberOfUpdated: number; affectedDocuments: any; upsert: boolean }> {
    return new Promise((resolve, reject) =>
      super.update<T>(
        query,
        updateQuery,
        options,
        (err, numberOfUpdated, affectedDocuments, upsert) => {
          if (err) reject(err)
          else resolve({ numberOfUpdated, affectedDocuments, upsert })
        }
      )
    )
  }

  public asyncRemove(query: any, options: nedb.RemoveOptions = {}): Promise<number> {
    return new Promise((resolve, reject) =>
      super.remove(query, options, (err, n) => {
        if (err) reject(err)
        else resolve(n)
      })
    )
  }
}
