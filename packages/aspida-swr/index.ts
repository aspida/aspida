import useSWR, {
  useSWRInfinite,
  SWRResponse,
  SWRConfiguration,
  SWRInfiniteResponse,
  SWRInfiniteConfiguration,
  KeyLoader as SWRKeyLoader
} from 'swr'

type ResponseData<T extends (option: any) => Promise<any>> = ReturnType<T> extends Promise<infer S>
  ? S
  : never

type AspidaOptions<
  T extends (option: any) => Promise<any>,
  U extends SWRConfiguration | SWRInfiniteConfiguration
> = Parameters<
  Parameters<T> extends [Parameters<T>[0]]
    ? (
        option: Parameters<T>[0] &
          U & {
            enabled?: boolean
          }
      ) => void
    : (
        option?: Parameters<T>[0] &
          U & {
            enabled?: boolean
          }
      ) => void
>

type Options<T extends (option: any) => Promise<any>> = AspidaOptions<
  T,
  SWRConfiguration<ResponseData<T>>
>

type InfiniteOptions<T extends (option: any) => Promise<any>> = AspidaOptions<
  T,
  SWRInfiniteConfiguration<ResponseData<T>>
>

function useAspidaSWR<
  T extends Record<string, any> & {
    $get: (option: any) => Promise<any>
    $path: (option?: any) => string
  }
>(api: T, ...option: Options<T['$get']>): SWRResponse<ResponseData<T['$get']>, any>
function useAspidaSWR<
  T extends Record<string, any> & { $path: (option?: any) => string },
  U extends { [K in keyof T]: T[K] extends (option: any) => Promise<any> ? K : never }[keyof T]
>(api: T, key: U, ...option: Options<T[U]>): SWRResponse<ResponseData<T[U]>, any>
function useAspidaSWR<
  T extends Record<string, any> & { $path: (option?: any) => string },
  U extends { [K in keyof T]: T[K] extends (option: any) => Promise<any> ? K : never }[keyof T]
>(api: T, key: U, ...option: Parameters<T[U]>) {
  const method = typeof key === 'string' ? key : '$get'
  const opt = typeof key === 'string' ? (option as any)[0] : key

  return useSWR(
    opt?.enabled === false ? null : [api.$path(opt), method],
    () => api[method](opt),
    opt
  )
}

type KeyLoader<Method = any, Data = any> = (
  path: string,
  method: Method,
  index: number,
  previousPageData: Data | null
) => ReturnType<SWRKeyLoader>

export function useAspidaSWRInfinite<
  T extends Record<string, any> & {
    $get: (option: any) => Promise<any>
    $path: (option?: any) => string
  }
>(
  getKey: KeyLoader<'$get', ResponseData<T['$get']>>,
  api: T,
  ...option: InfiniteOptions<T['$get']>
): SWRInfiniteResponse<ResponseData<T['$get']>, any>
export function useAspidaSWRInfinite<
  T extends Record<string, any> & { $path: (option?: any) => string },
  U extends { [K in keyof T]: T[K] extends (option: any) => Promise<any> ? K : never }[keyof T]
>(
  getKey: KeyLoader<U, ResponseData<T[U]>>,
  api: T,
  key: U,
  ...option: InfiniteOptions<T[U]>
): SWRInfiniteResponse<ResponseData<T[U]>, any>
export function useAspidaSWRInfinite<
  T extends Record<string, any> & { $path: (option?: any) => string },
  U extends { [K in keyof T]: T[K] extends (option: any) => Promise<any> ? K : never }[keyof T]
>(getKey: KeyLoader, api: T, key: U, ...option: Parameters<T[U]>) {
  const method = typeof key === 'string' ? key : '$get'
  const opt = typeof key === 'string' ? (option as any)[0] : key

  return useSWRInfinite(
    (...args: Parameters<SWRKeyLoader>) =>
      opt?.enabled === false ? null : getKey(api.$path(opt), method, ...args),
    () => api[method](opt),
    opt
  )
}

export default useAspidaSWR
