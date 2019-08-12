import nedb from 'nedb'

export default class extends nedb {
  public asyncLoadDatabase() {
    return new Promise<void>((resolve, reject) => super.loadDatabase(err => {
      if (err) reject(err)
      else resolve()
    }))
  }

  public asyncInsert<T>(newDoc: T): Promise<T> {
      return new Promise((resolve, reject) => super.insert(newDoc, (err, document) => {
          if (err) {
              reject(err);
          } else {
              resolve(document);
          }
      }));
  }

  public asyncFind<T>(query: any, projection?: T): Promise<Array<T>> {
    if (projection) {
        return new Promise((resolve, reject) => super.find(query, projection, (err, documents) => {
            if (err) {
                reject(err);
            } else {
                resolve(documents);
            }
        }));
    } else {
        return new Promise((resolve, reject) => super.find(query, (err, documents) => {
            if (err) {
                reject(err);
            } else {
                resolve(documents);
            }
        }));
    }
}
}
