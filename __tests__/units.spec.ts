import fs from 'fs'
import path from 'path'
import binaryToDataURI from '~/src/binaryToDataURI'

describe('unit tests', () => {
  test('binary to dataURI', () => {
    const imageBinary = fs.readFileSync(path.join(__dirname, './assets/image.png'))
    const imageDataURI = fs.readFileSync(path.join(__dirname, './assets/image.b64'), 'utf-8')

    expect(binaryToDataURI(imageBinary)).toBe(imageDataURI)
  })
})
