/* eslint-disable */
interface Query0 {
  id: number
  values: {
    type: string
    index: number
  }[]
}

type Query1 = {
  hoge: number // comment
  fuga: string[]
  /*
    comment
  */
}

const encode = (str: Parameters<typeof encodeURIComponent>[0]) =>
  encodeURIComponent(str).replace(
    /[!'()~]|%20|%00/g,
    match =>
      (({
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+',
        '%00': '\x00'
      } as Record<string, string>)[match])
  )

const dataToURLString = (data: Record<string, any>) =>
  Object.keys(data)
    .map(key =>
      Array.isArray(data[key])
        ? data[key].map((v: string) => `${encode(key)}=${encode(v)}`).join('&')
        : `${encode(key)}=${encode(data[key])}`
    )
    .join('&')

const path = (baseURL?: string) => {
  const prefix = (baseURL === undefined ? 'https://example.com/api' : baseURL).replace(/\/$/, '')

  return {
    _contentId: (val0: number | string) => ({
      $get: (query: Query0) => `${prefix}/${val0}/?${dataToURLString(query)}`
    }),
    users: {
      _userId: (val1: number | string) => ({
        _testVal: (val2: number | string) => ({
          $get: () => `${prefix}/users/${val1}/${val2}/`
        }),
        test: {
          $get: (query: Query1) => `${prefix}/users/${val1}/test/?${dataToURLString(query)}`
        },
        $get: () => `${prefix}/users/${val1}/`
      })
    },
    $get: () => `${prefix}/`
  }
}

export type PathInstance = ReturnType<typeof path>
export default path
