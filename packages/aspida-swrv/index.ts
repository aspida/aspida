import useSWRV, { IConfig } from 'swrv'
import { IResponse } from 'swrv/dist/types'

type Options<T extends (option: any) => Promise<any>> = Parameters<
  Parameters<T> extends [Parameters<T>[0]]
    ? (option: Parameters<T>[0] & IConfig) => void
    : (option?: Parameters<T>[0] & IConfig) => void
>

type Res<T extends (option: any) => Promise<any>> = IResponse<
  ReturnType<T> extends Promise<infer S> ? S : never,
  any
>

function useAspidaSWRV<
  T extends Record<string, any> & {
    $get: (option: any) => Promise<any>
    $path: (option?: any) => string
  }
>(api: T, ...option: Options<T['$get']>): Res<T['$get']>
function useAspidaSWRV<
  T extends Record<string, any> & { $path: (option?: any) => string },
  U extends { [K in keyof T]: T[K] extends (option: any) => Promise<any> ? K : never }[keyof T]
>(api: T, key: U, ...option: Options<T[U]>): Res<T[U]>
function useAspidaSWRV<
  T extends Record<string, any> & { $path: (option?: any) => string },
  U extends { [K in keyof T]: T[K] extends (option: any) => Promise<any> ? K : never }[keyof T]
>(api: T, key: U, ...option: Parameters<T[U]>) {
  const method = typeof key === 'string' ? key : '$get'
  const opt = typeof key === 'string' ? (option as any)[0] : key

  return useSWRV(`${api.$path(opt)}:${method}`, () => api[method](opt), opt)
}

export default useAspidaSWRV
