import { AxiosRequestConfig } from 'axios'
import { HandlersSet, HttpMethod } from '~/src/types'
import { asyncResponse } from '~/src'
import createValues from '~/src/createValues'
import findHandler from '~/src/findHandler'
import { createPathRegExp } from '~/src/MockServer'
import createRelativePath from '~/src/createRelativePath'

describe('unit tests', () => {
  test('createValues', () => {
    const list: {
      conditions: [string, string?, string?]
      values: { [key: string]: string | number }
    }[] = [
      {
        conditions: ['/aa/_bb/cc/_dd', '/aa/hoge/cc/123'],
        values: { bb: 'hoge', dd: 123 }
      },
      {
        conditions: ['/aa/_bb/cc/_dd', '/hoge/cc/123', 'http://google.com/aa'],
        values: { bb: 'hoge', dd: 123 }
      },
      {
        conditions: ['/aa/_bb', undefined, 'http://google.com/aa/123/'],
        values: { bb: 123 }
      }
    ]

    list.forEach(({ conditions, values }) => expect(createValues(...conditions)).toEqual(values))
  })

  test('findHandler', () => {
    const list: {
      config: AxiosRequestConfig
      handlersSet: HandlersSet
      resultIndex: number | undefined
    }[] = [
      {
        config: { method: 'get', baseURL: 'http://google.com/aa', url: '/hoge/cc/123' },
        handlersSet: { get: [[createPathRegExp('/aa/_bb/cc/_dd'), '/aa/_bb/cc/_dd', () => [200]]] },
        resultIndex: 0
      },
      {
        config: { method: 'get', baseURL: 'http://google.com/zz/aa', url: '/hoge/cc/123' },
        handlersSet: { get: [[createPathRegExp('/aa/_bb/cc/_dd'), '/aa/_bb/cc/_dd', () => [200]]] },
        resultIndex: undefined
      },
      {
        config: { method: 'post', baseURL: 'http://google.com/aa', url: '/hoge/cc/123' },
        handlersSet: { get: [[createPathRegExp('/aa/_bb/cc/_dd'), '/aa/_bb/cc/_dd', () => [200]]] },
        resultIndex: undefined
      },
      {
        config: { method: 'get', url: '/aa/hoge/cc' },
        handlersSet: { get: [[createPathRegExp('/aa/_bb/cc/_dd'), '/aa/_bb/cc/_dd', () => [200]]] },
        resultIndex: undefined
      },
      {
        config: { method: 'post', url: 'http://google.com/aa/hoge/cc' },
        handlersSet: {
          post: [
            [createPathRegExp('/aa/_bb/cc/_dd'), '/aa/_bb/cc/_dd', () => [200]],
            [createPathRegExp('/aa/_bb/cc'), '/aa/_bb/cc', () => [200]]
          ]
        },
        resultIndex: 1
      }
    ]

    list.forEach(({ config, handlersSet, resultIndex }) =>
      expect(findHandler(config, handlersSet)).toBe(
        resultIndex === undefined
          ? undefined
          : // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            handlersSet[config.method as HttpMethod]![resultIndex]
      )
    )
  })

  test('asyncResponse', async () => {
    const result = [200, { test: 'aaa' }, { 'cache-control': 'max-age=0' }] as const
    const res = await asyncResponse(result[0], (async () => result[1])(), result[2])
    expect(res).toEqual(result)
  })

  test('createRelativePath', () => {
    const paths = [
      { url: '//apple.com/aa/bb', baseURL: 'https://google.com/', result: '/aa/bb' },
      { url: '/aa/bb', baseURL: undefined, result: '/aa/bb' },
      { url: '/cc/dd', baseURL: '/aa/bb', result: '/aa/bb/cc/dd' },
      { url: undefined, baseURL: 'https://google.com/abc/', result: '/abc' },
      { url: undefined, baseURL: undefined, result: '' }
    ]

    paths.forEach(path => expect(createRelativePath(path.url, path.baseURL)).toBe(path.result))
  })
})
