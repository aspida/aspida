/* eslint-disable */
import axios, { AxiosRequestConfig } from 'axios'
import { Methods as Methods0 } from './index'
import { Methods as Methods1 } from './v1/hoge/_hogeId/test/index'
import { Methods as Methods2 } from './v1/hoge/_hogeId/test/_fugaId'
import { Methods as Methods3 } from './v1/hoge/_hogeId/test/fuga'
import { Methods as Methods4 } from './v1/test'
import { Methods as Methods5 } from './v1/users/_userId'

export const baseURL = 'https://example.com'

export default (client = axios) => {
  const prefix = (client.defaults.baseURL ? '' : baseURL).replace(/\/$/, '')

  return {
    v1: {
      hoge: {
        _hogeId: (val0: number | string) => ({
          test: {
            _fugaId: (val1: number | string) => ({
              get: (config?: AxiosRequestConfig & { params?: Methods2['get']['params'] & { [key: string]: any }}) =>
                client.get<Methods2['get']['response']>(`${prefix}/v1/hoge/${val0}/test/${val1}`, config),
              $get: async (config?: AxiosRequestConfig & { params?: Methods2['get']['params'] & { [key: string]: any }}) =>
                (await client.get<Methods2['get']['response']>(`${prefix}/v1/hoge/${val0}/test/${val1}`, config)).data,
              post: (data?: Methods2['post']['data'], config?: AxiosRequestConfig & { params?: Methods2['post']['params'] & { [key: string]: any }}) =>
                client.post<Methods2['post']['response']>(`${prefix}/v1/hoge/${val0}/test/${val1}`, data, config),
              $post: async (data?: Methods2['post']['data'], config?: AxiosRequestConfig & { params?: Methods2['post']['params'] & { [key: string]: any }}) =>
                (await client.post<Methods2['post']['response']>(`${prefix}/v1/hoge/${val0}/test/${val1}`, data, config)).data,
              put: (data: void, config?: AxiosRequestConfig & { params?: Methods2['put']['params'] & { [key: string]: any }}) =>
                client.put<Methods2['put']['response']>(`${prefix}/v1/hoge/${val0}/test/${val1}`, data, config),
              $put: async (data: void, config?: AxiosRequestConfig & { params?: Methods2['put']['params'] & { [key: string]: any }}) =>
                (await client.put<Methods2['put']['response']>(`${prefix}/v1/hoge/${val0}/test/${val1}`, data, config)).data,
              delete: (config?: AxiosRequestConfig & { params?: Methods2['delete']['params'] & { [key: string]: any }} & { data?: void }) =>
                client.delete<Methods2['delete']['response']>(`${prefix}/v1/hoge/${val0}/test/${val1}`, config),
              $delete: async (config?: AxiosRequestConfig & { params?: Methods2['delete']['params'] & { [key: string]: any }} & { data?: void }) =>
                (await client.delete<Methods2['delete']['response']>(`${prefix}/v1/hoge/${val0}/test/${val1}`, config)).data
            }),
            fuga: {
              get: (config?: AxiosRequestConfig & { params?: Methods3['get']['params'] & { [key: string]: any }}) =>
                client.get<Methods3['get']['response']>(`${prefix}/v1/hoge/${val0}/test/fuga`, config),
              $get: async (config?: AxiosRequestConfig & { params?: Methods3['get']['params'] & { [key: string]: any }}) =>
                (await client.get<Methods3['get']['response']>(`${prefix}/v1/hoge/${val0}/test/fuga`, config)).data,
              post: (data?: Methods3['post']['data'], config?: AxiosRequestConfig & { params?: Methods3['post']['params'] & { [key: string]: any }}) =>
                client.post<Methods3['post']['response']>(`${prefix}/v1/hoge/${val0}/test/fuga`, data, config),
              $post: async (data?: Methods3['post']['data'], config?: AxiosRequestConfig & { params?: Methods3['post']['params'] & { [key: string]: any }}) =>
                (await client.post<Methods3['post']['response']>(`${prefix}/v1/hoge/${val0}/test/fuga`, data, config)).data,
              put: (data: void, config?: AxiosRequestConfig & { params?: Methods3['put']['params'] & { [key: string]: any }}) =>
                client.put<Methods3['put']['response']>(`${prefix}/v1/hoge/${val0}/test/fuga`, data, config),
              $put: async (data: void, config?: AxiosRequestConfig & { params?: Methods3['put']['params'] & { [key: string]: any }}) =>
                (await client.put<Methods3['put']['response']>(`${prefix}/v1/hoge/${val0}/test/fuga`, data, config)).data,
              delete: (config?: AxiosRequestConfig & { params?: Methods3['delete']['params'] & { [key: string]: any }} & { data?: void }) =>
                client.delete<Methods3['delete']['response']>(`${prefix}/v1/hoge/${val0}/test/fuga`, config),
              $delete: async (config?: AxiosRequestConfig & { params?: Methods3['delete']['params'] & { [key: string]: any }} & { data?: void }) =>
                (await client.delete<Methods3['delete']['response']>(`${prefix}/v1/hoge/${val0}/test/fuga`, config)).data
            },
            get: (config?: AxiosRequestConfig & { params?: Methods1['get']['params'] & { [key: string]: any }}) =>
              client.get<void>(`${prefix}/v1/hoge/${val0}/test`, config),
            $get: async (config?: AxiosRequestConfig & { params?: Methods1['get']['params'] & { [key: string]: any }}) =>
              (await client.get<void>(`${prefix}/v1/hoge/${val0}/test`, config)).data,
            post: (data?: Methods1['post']['data'], config?: AxiosRequestConfig & { params?: Methods1['post']['params'] & { [key: string]: any }}) =>
              client.post<void>(`${prefix}/v1/hoge/${val0}/test`, data, config),
            $post: async (data?: Methods1['post']['data'], config?: AxiosRequestConfig & { params?: Methods1['post']['params'] & { [key: string]: any }}) =>
              (await client.post<void>(`${prefix}/v1/hoge/${val0}/test`, data, config)).data,
            put: (data: void, config?: AxiosRequestConfig & { params?: Methods1['put']['params'] & { [key: string]: any }}) =>
              client.put<Methods1['put']['response']>(`${prefix}/v1/hoge/${val0}/test`, data, config),
            $put: async (data: void, config?: AxiosRequestConfig & { params?: Methods1['put']['params'] & { [key: string]: any }}) =>
              (await client.put<Methods1['put']['response']>(`${prefix}/v1/hoge/${val0}/test`, data, config)).data,
            delete: (config?: AxiosRequestConfig & { params?: Methods1['delete']['params'] & { [key: string]: any }} & { data?: void }) =>
              client.delete<Methods1['delete']['response']>(`${prefix}/v1/hoge/${val0}/test`, config),
            $delete: async (config?: AxiosRequestConfig & { params?: Methods1['delete']['params'] & { [key: string]: any }} & { data?: void }) =>
              (await client.delete<Methods1['delete']['response']>(`${prefix}/v1/hoge/${val0}/test`, config)).data
          }
        })
      },
      test: {
        get: (config?: AxiosRequestConfig & { params?: Methods4['get']['params'] & { [key: string]: any }} & { headers?: Methods4['get']['headers'] & { [key: string]: any }}) =>
          client.get<Methods4['get']['response']>(`${prefix}/v1/test`, config),
        $get: async (config?: AxiosRequestConfig & { params?: Methods4['get']['params'] & { [key: string]: any }} & { headers?: Methods4['get']['headers'] & { [key: string]: any }}) =>
          (await client.get<Methods4['get']['response']>(`${prefix}/v1/test`, config)).data,
        post: (data?: Methods4['post']['data'], config?: AxiosRequestConfig & { params?: Methods4['post']['params'] & { [key: string]: any }}) =>
          client.post<Methods4['post']['response']>(`${prefix}/v1/test`, data, config),
        $post: async (data?: Methods4['post']['data'], config?: AxiosRequestConfig & { params?: Methods4['post']['params'] & { [key: string]: any }}) =>
          (await client.post<Methods4['post']['response']>(`${prefix}/v1/test`, data, config)).data
      },
      users: {
        _userId: (val2: number | string) => ({
          get: (config?: AxiosRequestConfig & { params?: Methods5['get']['params'] & { [key: string]: any }} & { headers?: Methods5['get']['headers'] & { [key: string]: any }}) =>
            client.get<Methods5['get']['response']>(`${prefix}/v1/users/${val2}`, config),
          $get: async (config?: AxiosRequestConfig & { params?: Methods5['get']['params'] & { [key: string]: any }} & { headers?: Methods5['get']['headers'] & { [key: string]: any }}) =>
            (await client.get<Methods5['get']['response']>(`${prefix}/v1/users/${val2}`, config)).data,
          post: (data: void, config?: AxiosRequestConfig & { params?: Methods5['post']['params'] & { [key: string]: any }}) =>
            client.post<Methods5['post']['response']>(`${prefix}/v1/users/${val2}`, data, config),
          $post: async (data: void, config?: AxiosRequestConfig & { params?: Methods5['post']['params'] & { [key: string]: any }}) =>
            (await client.post<Methods5['post']['response']>(`${prefix}/v1/users/${val2}`, data, config)).data
        })
      }
    },
    get: (config?: AxiosRequestConfig & { params?: Methods0['get']['params'] & { [key: string]: any }}) =>
      client.get<Methods0['get']['response']>(`${prefix}/`, config),
    $get: async (config?: AxiosRequestConfig & { params?: Methods0['get']['params'] & { [key: string]: any }}) =>
      (await client.get<Methods0['get']['response']>(`${prefix}/`, config)).data,
    post: (data?: Methods0['post']['data'], config?: AxiosRequestConfig & { params?: Methods0['post']['params'] & { [key: string]: any }}) =>
      client.post<Methods0['post']['response']>(`${prefix}/`, data, config),
    $post: async (data?: Methods0['post']['data'], config?: AxiosRequestConfig & { params?: Methods0['post']['params'] & { [key: string]: any }}) =>
      (await client.post<Methods0['post']['response']>(`${prefix}/`, data, config)).data,
    put: (data: void, config?: AxiosRequestConfig & { params?: Methods0['put']['params'] & { [key: string]: any }}) =>
      client.put<Methods0['put']['response']>(`${prefix}/`, data, config),
    $put: async (data: void, config?: AxiosRequestConfig & { params?: Methods0['put']['params'] & { [key: string]: any }}) =>
      (await client.put<Methods0['put']['response']>(`${prefix}/`, data, config)).data,
    delete: (config?: AxiosRequestConfig & { params?: Methods0['delete']['params'] & { [key: string]: any }} & { data?: void }) =>
      client.delete<Methods0['delete']['response']>(`${prefix}/`, config),
    $delete: async (config?: AxiosRequestConfig & { params?: Methods0['delete']['params'] & { [key: string]: any }} & { data?: void }) =>
      (await client.delete<Methods0['delete']['response']>(`${prefix}/`, config)).data
  }
}
