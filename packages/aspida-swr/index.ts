import useSWR, { SWRResponse, SWRConfiguration } from 'swr'

type Option<T extends (option: any) => Promise<any>> = Parameters<T>[0] &
  SWRConfiguration<ResponseData<T>> & {
    enabled?: boolean
  }

type ResponseData<T extends (option: any) => Promise<any>> = ReturnType<T> extends Promise<infer S>
  ? S
  : never

function useAspidaSWR<
  T extends Record<string, any> & {
    $get: (option: any) => Promise<any>
    $path: (option?: any) => string
  }
>(api: T, option?: Option<T['$get']>): SWRResponse<ResponseData<T['$get']>, any>
function useAspidaSWR<
  T extends Record<string, any> & { $path: (option?: any) => string },
  U extends { [K in keyof T]: T[K] extends (option: any) => Promise<any> ? K : never }[keyof T]
>(api: T, key: U, option?: Option<T[U]>): SWRResponse<ResponseData<T[U]>, any>
function useAspidaSWR<
  T extends Record<string, any> & { $path: (option?: any) => string },
  U extends { [K in keyof T]: T[K] extends (option: any) => Promise<any> ? K : never }[keyof T]
>(api: T, key: U, option?: Option<T[U]>) {
  const method = typeof key === 'string' ? key : '$get'
  const opt = typeof key === 'string' ? (option as any) : key

  return useSWR(
    opt?.enabled === false ? null : [api.$path(opt), method],
    () => api[method](opt),
    opt
  )
}

export default useAspidaSWR
