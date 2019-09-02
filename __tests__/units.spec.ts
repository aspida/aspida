import fs from 'fs'
import path from 'path'
import binaryToDataURI from '~/src/binaryToDataURI'
import { asyncResponse } from '~/src'

describe('unit tests', () => {
  test('binary to dataURI', () => {
    const imageBinary = fs.readFileSync(path.join(__dirname, './assets/image.png'))
    const imageDataURI = fs.readFileSync(path.join(__dirname, './assets/image.b64'), 'utf-8')

    expect(binaryToDataURI(imageBinary)).toBe(imageDataURI)
  })

  test('asyncResponse', async () => {
    const result = [200, { test: 'aaa' }, { 'cache-control': 'max-age=0' }] as const
    const res = await asyncResponse(result[0], (async () => result[1])(), result[2])
    expect(res).toEqual(result)
  })
})
