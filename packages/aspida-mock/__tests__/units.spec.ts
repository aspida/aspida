import { HttpMethod } from 'aspida'
import { createValues } from '../src/utils'
import { printLog } from '../src/'

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
        conditions: ['/aa/_bb/cc/_dd@number', '/aa/hoge/cc/123'],
        values: { bb: 'hoge', dd: 123 }
      },
      {
        conditions: ['/aa/_bb/cc/_dd@string', '/aa/hoge/cc/123'],
        values: { bb: 'hoge', dd: '123' }
      }
    ]

    list.forEach(({ conditions, values }) => expect(createValues(...conditions)).toEqual(values))
  })

  test('printLog', () => {
    const spyLog = jest.spyOn(console, 'log').mockImplementation(x => x)
    const configs = [
      {
        config: {
          method: 'GET' as HttpMethod,
          path: '/bb'
        },
        status: 200,
        result: '[mock] GET: /bb => 200'
      },
      {
        config: {
          method: 'POST' as HttpMethod,
          path: '/bb',
          query: { dd: 'abc' }
        },
        status: 201,
        result: '[mock] POST: /bb?dd=abc => 201'
      },
      {
        config: {
          method: 'PUT' as HttpMethod,
          path: '/',
          query: { dd: 'abc' }
        },
        status: 204,
        result: '[mock] PUT: /?dd=abc => 204'
      },
      {
        config: {
          method: 'DELETE' as HttpMethod,
          path: '',
          query: { bb: 'abc' }
        },
        status: 204,
        result: '[mock] DELETE: ?bb=abc => 204'
      }
    ]

    configs.forEach(c => {
      printLog(c.config, c.status)
      expect(console.log).toHaveBeenLastCalledWith(c.result)
    })

    spyLog.mockReset()
    spyLog.mockRestore()
  })
})
