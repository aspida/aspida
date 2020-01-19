/* eslint-disable */
import { dataToURLString } from 'aspida'

interface Query0 {
  hoge: number
  fuga: string[]
}

interface Query1 {
  id: number
  name: string[]
}

const path = (baseURL?: string) => {
  const prefix = (baseURL === undefined ? 'https://example.com/api' : baseURL).replace(/\/$/, '')

  return {
    _contentId: (val0: number | string) => ({
      $get: (query?: Query1) => `${prefix}/${val0}/${query ? `?${dataToURLString(query)}` : ''}`
    }),
    _userId: (val1: number | string) => ({
      _testVal: (val2: number | string) => ({
        $get: () => `${prefix}/${val1}/${val2}/`
      }),
      test: {
        $get: () => `${prefix}/${val1}/test/`
      },
      $get: () => `${prefix}/${val1}/`
    }),
    $get: (query?: Query0) => `${prefix}/${query ? `?${dataToURLString(query)}` : ''}`
  }
}

export type PathInstance = ReturnType<typeof path>
export default path
