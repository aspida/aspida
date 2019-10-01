import { AxiosRequestConfig } from 'axios'
import { HandlersSet, HttpMethod } from '~/src/types'
import { asyncResponse } from '~/src'
import createValues from '~/src/createValues'
import findHandler from '~/src/findHandler'
import { createPathRegExp } from '~/src/MockServer'
import createRelativePath from '~/src/createRelativePath'
import createLogString from '~/src/createLogString'

describe('unit tests', () => {
  test('createValues', () => {
    const list: {
      conditions: [string, string]
      values: { [key: string]: string | number }
    }[] = [
      {
        conditions: ['/aa/_bb/cc/_dd', '/aa/hoge/cc/123'],
        values: { bb: 'hoge', dd: 123 }
      },
      {
        conditions: ['/aa/_bb/cc/_dd', '/aa/hoge/cc/123'],
        values: { bb: 'hoge', dd: 123 }
      }
    ]

    list.forEach(({ conditions, values }) => expect(createValues(...conditions)).toEqual(values))
  })

  test('findHandler', () => {
    const list = [
      {
        method: 'get',
        path: '/aa/hoge/cc/123',
        handlersSet: { get: [[createPathRegExp('/aa/_bb/cc/_dd'), '/aa/_bb/cc/_dd', () => [200]]] },
        resultIndex: 0
      },
      {
        method: 'get',
        path: '/zz/aa/hoge/cc/123',
        handlersSet: { get: [[createPathRegExp('/aa/_bb/cc/_dd'), '/aa/_bb/cc/_dd', () => [200]]] },
        resultIndex: undefined
      },
      {
        method: 'post',
        path: '/aa/hoge/cc/123',
        handlersSet: { get: [[createPathRegExp('/aa/_bb/cc/_dd'), '/aa/_bb/cc/_dd', () => [200]]] },
        resultIndex: undefined
      },
      {
        method: 'get',
        path: '/aa/hoge/cc',
        handlersSet: { get: [[createPathRegExp('/aa/_bb/cc/_dd'), '/aa/_bb/cc/_dd', () => [200]]] },
        resultIndex: undefined
      },
      {
        method: 'post',
        path: '/aa/hoge/cc',
        handlersSet: {
          post: [
            [createPathRegExp('/aa/_bb/cc/_dd'), '/aa/_bb/cc/_dd', () => [200]],
            [createPathRegExp('/aa/_bb/cc'), '/aa/_bb/cc', () => [200]]
          ]
        },
        resultIndex: 1
      },
      {
        method: undefined,
        path: '/aa',
        handlersSet: { get: [[createPathRegExp('/aa'), '/aa', () => [200]]] },
        resultIndex: undefined
      }
    ]

    list.forEach(({ method, path, handlersSet, resultIndex }) =>
      expect(findHandler(method, path, handlersSet as HandlersSet)).toBe(
        resultIndex === undefined
          ? undefined
          : // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            (handlersSet as HandlersSet)[method as HttpMethod]![resultIndex]
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
      { url: '/cc/dd/', baseURL: '/aa/bb', result: '/cc/dd' },
      { url: undefined, baseURL: 'https://google.com/abc/', result: '/' },
      { url: undefined, baseURL: undefined, result: '/' }
    ]

    paths.forEach(path => expect(createRelativePath(path.url, path.baseURL)).toBe(path.result))
  })

  test('createLogString', () => {
    const configs = [
      {
        config: {
          method: 'get',
          url: '/bb/?cc=123',
          baseURL: '//google.com/aa'
        },
        status: 200,
        result: '[mock] get: /bb?cc=123 => 200'
      },
      {
        config: {
          method: 'post',
          url: '/bb/?cc=123',
          params: { dd: 'abc' }
        },
        status: 201,
        result: '[mock] post: /bb?cc=123&dd=abc => 201'
      },
      {
        config: {
          method: 'put',
          baseURL: '//google.com/aa',
          params: { dd: 'abc' }
        },
        status: 204,
        result: '[mock] put: /?dd=abc => 204'
      },
      {
        config: {
          method: 'delete',
          url: '?aa=123',
          params: { bb: 'abc' }
        },
        status: 204,
        result: '[mock] delete: /?aa=123&bb=abc => 204'
      }
    ]

    configs.forEach(c =>
      expect(createLogString(c.config as AxiosRequestConfig, c.status)).toBe(c.result)
    )
  })
})
