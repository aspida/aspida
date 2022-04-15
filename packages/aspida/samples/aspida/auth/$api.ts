import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './signIn'
import type { Methods as Methods1 } from './signUp'
import type { Methods as Methods2 } from './verifyEmail'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://example.com/api/' : baseURL).replace(/\/$/, '')
  const PATH0 = '/sign_in'
  const PATH1 = '/sign_up'
  const PATH2 = '/verify_email'
  const GET = 'GET'
  const POST = 'POST'

  return {
    signIn: {
      /**
       * @returns OK
       */
      post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
      $path: () => `${prefix}${PATH0}`
    },
    signUp: {
      /**
       * @returns OK
       */
      post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods1['post']['resBody'], BasicHeaders, Methods1['post']['status']>(prefix, PATH1, POST, option).json(),
      $path: () => `${prefix}${PATH1}`
    },
    verifyEmail: {
      get: (option?: { query?: Methods2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<void, BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).send(),
      $path: (option?: { method?: 'get' | undefined; query: Methods2['get']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
