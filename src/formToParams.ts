import Busboy from 'busboy'
import binaryToDataURI from './binaryToDataURI'

type Params = { [key: string]: any }

export default (formBuffer: Buffer, headers: any) =>
  new Promise<Params>(resolve => {
    const busboy = new Busboy({
      headers: {
        'content-type': headers['Content-Type'] || headers['content-type']
      }
    })
    const params: Params = {}

    busboy.on('field', (key, val) => {
      params[key] = val
    })

    busboy.on('file', (key, stream) => {
      const bufs: Buffer[] = []

      stream.on('data', d => bufs.push(d))
      stream.on('end', () => {
        params[key] = binaryToDataURI(Buffer.concat(bufs))
      })
    })

    busboy.on('finish', () => resolve(params))

    busboy.write(formBuffer)
    busboy.end()
  })
