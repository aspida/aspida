/* eslint-disable */
import axios, { AxiosRequestConfig } from 'axios'
import { Methods as Val0 } from 'apis/v1/hoge/_hogeId/test/_fugaId'
import { Methods as Val1 } from 'apis/v1/test'
import { Methods as Val2 } from 'apis/v1/users/_userId'

export const baseURL = 'https://example.com'

export default (client = axios) => {
  const prefix = (client.defaults.baseURL ? '' : baseURL).replace(/\/$/, '')

  return {
      v1: {
        hoge: {
          _hogeId: (val0: number | string) => ({
            test: {
              _fugaId: (val1: number | string) => ({
                get: (config?: AxiosRequestConfig & { params?: Val0['get']['params'] & { [key: string]: any }} & { headers?: Val0['get']['headers'] & { [key: string]: any }}) =>
                  client.get<Val0['get']['response']>(`${prefix}/v1/hoge/${val0}/test/${val1}`, config),
                $get: async (config?: AxiosRequestConfig & { params?: Val0['get']['params'] & { [key: string]: any }} & { headers?: Val0['get']['headers'] & { [key: string]: any }}) =>
                  (await client.get<Val0['get']['response']>(`${prefix}/v1/hoge/${val0}/test/${val1}`, config)).data,
              post: (data?: Val0['post']['data'], config?: AxiosRequestConfig & { params?: Val0['post']['params'] & { [key: string]: any }}) =>
                  client.post<Val0['post']['response']>(`${prefix}/v1/hoge/${val0}/test/${val1}`, data, config),
                $post: async (data?: Val0['post']['data'], config?: AxiosRequestConfig & { params?: Val0['post']['params'] & { [key: string]: any }}) =>
                  (await client.post<Val0['post']['response']>(`${prefix}/v1/hoge/${val0}/test/${val1}`, data, config)).data,
              put: (data: void, config?: AxiosRequestConfig & { params?: Val0['put']['params'] & { [key: string]: any }}) =>
                  client.put<Val0['put']['response']>(`${prefix}/v1/hoge/${val0}/test/${val1}`, data, config),
                $put: async (data: void, config?: AxiosRequestConfig & { params?: Val0['put']['params'] & { [key: string]: any }}) =>
                  (await client.put<Val0['put']['response']>(`${prefix}/v1/hoge/${val0}/test/${val1}`, data, config)).data,
              delete: (config?: AxiosRequestConfig & { params?: Val0['delete']['params'] & { [key: string]: any }} & { data?: void }) =>
                  client.delete<Val0['delete']['response']>(`${prefix}/v1/hoge/${val0}/test/${val1}`, config),
                $delete: async (config?: AxiosRequestConfig & { params?: Val0['delete']['params'] & { [key: string]: any }} & { data?: void }) =>
                  (await client.delete<Val0['delete']['response']>(`${prefix}/v1/hoge/${val0}/test/${val1}`, config)).data
              })
            }
          })
        },
      test: {
          get: (config?: AxiosRequestConfig & { params?: Val1['get']['params'] & { [key: string]: any }} & { headers?: Val1['get']['headers'] & { [key: string]: any }}) =>
            client.get<Val1['get']['response']>(`${prefix}/v1/test`, config),
          $get: async (config?: AxiosRequestConfig & { params?: Val1['get']['params'] & { [key: string]: any }} & { headers?: Val1['get']['headers'] & { [key: string]: any }}) =>
            (await client.get<Val1['get']['response']>(`${prefix}/v1/test`, config)).data,
        post: (data?: Val1['post']['data'], config?: AxiosRequestConfig & { params?: Val1['post']['params'] & { [key: string]: any }}) =>
            client.post<Val1['post']['response']>(`${prefix}/v1/test`, data, config),
          $post: async (data?: Val1['post']['data'], config?: AxiosRequestConfig & { params?: Val1['post']['params'] & { [key: string]: any }}) =>
            (await client.post<Val1['post']['response']>(`${prefix}/v1/test`, data, config)).data
        },
      users: {
          _userId: (val2: number | string) => ({
            get: (config?: AxiosRequestConfig & { params?: Val2['get']['params'] & { [key: string]: any }} & { headers?: Val2['get']['headers'] & { [key: string]: any }}) =>
              client.get<Val2['get']['response']>(`${prefix}/v1/users/${val2}`, config),
            $get: async (config?: AxiosRequestConfig & { params?: Val2['get']['params'] & { [key: string]: any }} & { headers?: Val2['get']['headers'] & { [key: string]: any }}) =>
              (await client.get<Val2['get']['response']>(`${prefix}/v1/users/${val2}`, config)).data,
          post: (data: void, config?: AxiosRequestConfig & { params?: Val2['post']['params'] & { [key: string]: any }}) =>
              client.post<Val2['post']['response']>(`${prefix}/v1/users/${val2}`, data, config),
            $post: async (data: void, config?: AxiosRequestConfig & { params?: Val2['post']['params'] & { [key: string]: any }}) =>
              (await client.post<Val2['post']['response']>(`${prefix}/v1/users/${val2}`, data, config)).data
          })
        }
      }
    }
}
