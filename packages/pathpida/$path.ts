/* eslint-disable */
import { dataToURLString } from 'aspida'

interface Query0 {
  id: number
  name: string[]
}

interface Query1 {
  hoge: number
  fuga: string[]
}

const path = (baseURL?: string) => {
  const prefix = (baseURL === undefined ? 'https://example.com/api' : baseURL).replace(/\/$/, '')

  return {
    _contentId: (val0: number | string) => ({
      $get: (query: Query0) => `${prefix}/${val0}/?${dataToURLString(query)}`
    }),
    _userId: (val1: number | string) => ({
      _testVal: (val2: number | string) => ({
        $get: () => `${prefix}/${val1}/${val2}/`
      }),
      test: {
        $get: (query: Query1) => `${prefix}/${val1}/test/?${dataToURLString(query)}`
      },
      $get: () => `${prefix}/${val1}/`
    }),
    $get: () => `${prefix}/`
  }
}

export type PathInstance = ReturnType<typeof path>
export default path
