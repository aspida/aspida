/* eslint-disable */
import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
import { Methods as Methods0 } from './index'
import { Methods as Methods1 } from './v1.1/2/_hogeId/entries.json'
import { Methods as Methods2 } from './v1.1/2/_hogeId/test-4/index'
import { Methods as Methods3 } from './v1.1/2/_hogeId/test-4/_fugaId'
import { Methods as Methods4 } from './v1.1/2/_hogeId/test-4/fuga aa'
import { Methods as Methods5 } from './v1.1/3.1'
import { Methods as Methods6 } from './v1.1/users/_userId'

export const baseURL = 'https://example.com'

const api = (client: AxiosInstance = axios) => {
  const prefix = (client.defaults.baseURL ? '' : baseURL).replace(/\/$/, '')

  return {
    v1_1: {
      $2: {
        _hogeId: (val0: number | string) => ({
          entries_json: {
            get: (config?: AxiosRequestConfig) =>
              client.get<Methods1['get']['response']>(`${prefix}/v1.1/2/${val0}/entries.json`, config),
            $get: async (config?: AxiosRequestConfig) =>
              (await client.get<Methods1['get']['response']>(`${prefix}/v1.1/2/${val0}/entries.json`, config)).data
          },
          test_4: {
            _fugaId: (val1: number | string) => ({
              get: (config?: { params?: Methods3['get']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
                client.get<Methods3['get']['response']>(`${prefix}/v1.1/2/${val0}/test-4/${val1}`, config),
              $get: async (config?: { params?: Methods3['get']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
                (await client.get<Methods3['get']['response']>(`${prefix}/v1.1/2/${val0}/test-4/${val1}`, config)).data,
              post: (data: Methods3['post']['data'] | null, config: { params: Methods3['post']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
                client.post<Methods3['post']['response']>(`${prefix}/v1.1/2/${val0}/test-4/${val1}`, data, config),
              $post: async (data: Methods3['post']['data'] | null, config: { params: Methods3['post']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
                (await client.post<Methods3['post']['response']>(`${prefix}/v1.1/2/${val0}/test-4/${val1}`, data, config)).data,
              put: (data: null, config: { params: Methods3['put']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
                client.put<Methods3['put']['response']>(`${prefix}/v1.1/2/${val0}/test-4/${val1}`, data, config),
              $put: async (data: null, config: { params: Methods3['put']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
                (await client.put<Methods3['put']['response']>(`${prefix}/v1.1/2/${val0}/test-4/${val1}`, data, config)).data,
              delete: (config: { params: Methods3['delete']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
                client.delete<Methods3['delete']['response']>(`${prefix}/v1.1/2/${val0}/test-4/${val1}`, config),
              $delete: async (config: { params: Methods3['delete']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
                (await client.delete<Methods3['delete']['response']>(`${prefix}/v1.1/2/${val0}/test-4/${val1}`, config)).data
            }),
            fuga_aa: {
              get: (config: { params: Methods4['get']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
                client.get<Methods4['get']['response']>(`${prefix}/v1.1/2/${val0}/test-4/fuga aa`, config),
              $get: async (config: { params: Methods4['get']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
                (await client.get<Methods4['get']['response']>(`${prefix}/v1.1/2/${val0}/test-4/fuga aa`, config)).data,
              post: (data: Methods4['post']['data'] | null, config: { params: Methods4['post']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
                client.post<Methods4['post']['response']>(`${prefix}/v1.1/2/${val0}/test-4/fuga aa`, data, config),
              $post: async (data: Methods4['post']['data'] | null, config: { params: Methods4['post']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
                (await client.post<Methods4['post']['response']>(`${prefix}/v1.1/2/${val0}/test-4/fuga aa`, data, config)).data,
              put: (data: null, config: { params: Methods4['put']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
                client.put<Methods4['put']['response']>(`${prefix}/v1.1/2/${val0}/test-4/fuga aa`, data, config),
              $put: async (data: null, config: { params: Methods4['put']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
                (await client.put<Methods4['put']['response']>(`${prefix}/v1.1/2/${val0}/test-4/fuga aa`, data, config)).data,
              delete: (config: { params: Methods4['delete']['params'] & { [key: string]: any }} & AxiosRequestConfig & { data: Methods4['delete']['data'] }) =>
                client.delete<Methods4['delete']['response']>(`${prefix}/v1.1/2/${val0}/test-4/fuga aa`, config),
              $delete: async (config: { params: Methods4['delete']['params'] & { [key: string]: any }} & AxiosRequestConfig & { data: Methods4['delete']['data'] }) =>
                (await client.delete<Methods4['delete']['response']>(`${prefix}/v1.1/2/${val0}/test-4/fuga aa`, config)).data
            },
            get: (config: { params: Methods2['get']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
              client.get<void>(`${prefix}/v1.1/2/${val0}/test-4`, config),
            $get: async (config: { params: Methods2['get']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
              (await client.get<void>(`${prefix}/v1.1/2/${val0}/test-4`, config)).data,
            post: (data?: Methods2['post']['data'] | null, config?: { params?: Methods2['post']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
              client.post<void>(`${prefix}/v1.1/2/${val0}/test-4`, data, config),
            $post: async (data?: Methods2['post']['data'] | null, config?: { params?: Methods2['post']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
              (await client.post<void>(`${prefix}/v1.1/2/${val0}/test-4`, data, config)).data,
            put: (data?: null, config?: { params?: Methods2['put']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
              client.put<Methods2['put']['response']>(`${prefix}/v1.1/2/${val0}/test-4`, data, config),
            $put: async (data?: null, config?: { params?: Methods2['put']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
              (await client.put<Methods2['put']['response']>(`${prefix}/v1.1/2/${val0}/test-4`, data, config)).data,
            delete: (config: { params: Methods2['delete']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
              client.delete<Methods2['delete']['response']>(`${prefix}/v1.1/2/${val0}/test-4`, config),
            $delete: async (config: { params: Methods2['delete']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
              (await client.delete<Methods2['delete']['response']>(`${prefix}/v1.1/2/${val0}/test-4`, config)).data
          }
        })
      },
      $3_1: {
        get: (config?: { params?: Methods5['get']['params'] & { [key: string]: any }} & { headers?: Methods5['get']['headers'] & { [key: string]: any }} & AxiosRequestConfig) =>
          client.get<Methods5['get']['response']>(`${prefix}/v1.1/3.1`, config),
        $get: async (config?: { params?: Methods5['get']['params'] & { [key: string]: any }} & { headers?: Methods5['get']['headers'] & { [key: string]: any }} & AxiosRequestConfig) =>
          (await client.get<Methods5['get']['response']>(`${prefix}/v1.1/3.1`, config)).data,
        post: (data: Methods5['post']['data'] | null, config: { params: Methods5['post']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
          client.post<Methods5['post']['response']>(`${prefix}/v1.1/3.1`, data, config),
        $post: async (data: Methods5['post']['data'] | null, config: { params: Methods5['post']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
          (await client.post<Methods5['post']['response']>(`${prefix}/v1.1/3.1`, data, config)).data
      },
      users: {
        _userId: (val2: number | string) => ({
          get: (config: { params: Methods6['get']['params'] & { [key: string]: any }} & { headers?: Methods6['get']['headers'] & { [key: string]: any }} & AxiosRequestConfig) =>
            client.get<Methods6['get']['response']>(`${prefix}/v1.1/users/${val2}`, config),
          $get: async (config: { params: Methods6['get']['params'] & { [key: string]: any }} & { headers?: Methods6['get']['headers'] & { [key: string]: any }} & AxiosRequestConfig) =>
            (await client.get<Methods6['get']['response']>(`${prefix}/v1.1/users/${val2}`, config)).data,
          post: (data: null, config: { params: Methods6['post']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
            client.post<Methods6['post']['response']>(`${prefix}/v1.1/users/${val2}`, data, config),
          $post: async (data: null, config: { params: Methods6['post']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
            (await client.post<Methods6['post']['response']>(`${prefix}/v1.1/users/${val2}`, data, config)).data
        })
      }
    },
    get: (config: { params: Methods0['get']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
      client.get<Methods0['get']['response']>(`${prefix}/`, config),
    $get: async (config: { params: Methods0['get']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
      (await client.get<Methods0['get']['response']>(`${prefix}/`, config)).data,
    post: (data: Methods0['post']['data'] | null, config: { params: Methods0['post']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
      client.post<Methods0['post']['response']>(`${prefix}/`, data, config),
    $post: async (data: Methods0['post']['data'] | null, config: { params: Methods0['post']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
      (await client.post<Methods0['post']['response']>(`${prefix}/`, data, config)).data,
    put: (data: null, config: { params: Methods0['put']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
      client.put<Methods0['put']['response']>(`${prefix}/`, data, config),
    $put: async (data: null, config: { params: Methods0['put']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
      (await client.put<Methods0['put']['response']>(`${prefix}/`, data, config)).data,
    delete: (config: { params: Methods0['delete']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
      client.delete<Methods0['delete']['response']>(`${prefix}/`, config),
    $delete: async (config: { params: Methods0['delete']['params'] & { [key: string]: any }} & AxiosRequestConfig) =>
      (await client.delete<Methods0['delete']['response']>(`${prefix}/`, config)).data
  }
}

export type ApiInstance = ReturnType<typeof api>

export default api
