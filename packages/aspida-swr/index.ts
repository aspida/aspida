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

type ValueKey = string | any[] | null

type AspidaSWROption<T> = T & {
  /**
   * @deprecated
   * Will be dropped next major release.
   * Use key and fetcher options instead.
   *    key: enabled ? undefined : null,
   *    fetcher: enabled ? undefined : null
   */
  enabled?: boolean
  key?: ValueKey | (() => ValueKey)
  fetcher?:
    | ((f: (opt: AspidaSWROption<T>) => any) => (opt: AspidaSWROption<T>) => any)
    | null
    | undefined
}

type Options<T extends (option: any) => Promise<any>> = Parameters<
  Parameters<T> extends [Parameters<T>[0]]
    ? (option: AspidaSWROption<Parameters<T>[0] & SWRConfiguration<ResponseData<T>>>) => void
    : (option?: AspidaSWROption<Parameters<T>[0] & SWRConfiguration<ResponseData<T>>>) => void
>

type InfiniteOptions<T extends (option: any) => Promise<any>> = Parameters<
  Parameters<T> extends [Parameters<T>[0]]
    ? (
        option: Parameters<T>[0] extends Record<string, any> & { query: any }
          ? Omit<Parameters<T>[0], 'query'> & {
              query: (
                index: number,
                previousPageData: ResponseData<T> | null
              ) => Parameters<T>[0]['query']
            } & SWRInfiniteConfiguration<ResponseData<T>> & {
                enabled?: boolean
              }
          : Parameters<T>[0] &
              SWRInfiniteConfiguration<ResponseData<T>> & {
                enabled?: boolean
              }
      ) => void
    : (
        option?: Parameters<T>[0] extends Record<string, any> & { query: any }
          ? Omit<Parameters<T>[0], 'query'> & {
              query: (
                index: number,
                previousPageData: ResponseData<T> | null
              ) => Parameters<T>[0]['query']
            } & SWRInfiniteConfiguration<ResponseData<T>> & {
                enabled?: boolean
              }
          : Parameters<T>[0] &
              SWRInfiniteConfiguration<ResponseData<T>> & {
                enabled?: boolean
              }
      ) => void
>

function getAspidaSWRDefaultKey<
  T extends Record<string, any> & {
    $get: (option: any) => Promise<any>
    $path: (option?: any) => string
  }
>(api: T, ...option: Options<T['$get']>): string[]
function getAspidaSWRDefaultKey<
  T extends Record<string, any> & { $path: (option?: any) => string },
  U extends { [K in keyof T]: T[K] extends (option: any) => Promise<any> ? K : never }[keyof T]
>(api: T, method: U, ...option: Options<T[U]>): string[]
function getAspidaSWRDefaultKey<
  T extends Record<string, any> & { $path: (option?: any) => string },
  U extends { [K in keyof T]: T[K] extends (option: any) => Promise<any> ? K : never }[keyof T]
>(api: T, maybeMethod: U, ...option: Parameters<T[U]>) {
  const method = typeof maybeMethod === 'string' ? maybeMethod : '$get'
  const opt = typeof maybeMethod === 'string' ? (option as any)[0] : maybeMethod

  return [api.$path(opt), method]
}
export { getAspidaSWRDefaultKey as getSWRDefaultKey }

function useAspidaSWR<
  T extends Record<string, any> & {
    $get: (option: any) => Promise<any>
    $path: (option?: any) => string
  }
>(api: T, ...option: Options<T['$get']>): SWRResponse<ResponseData<T['$get']>, any>
function useAspidaSWR<
  T extends Record<string, any> & { $path: (option?: any) => string },
  U extends { [K in keyof T]: T[K] extends (option: any) => Promise<any> ? K : never }[keyof T]
>(api: T, method: U, ...option: Options<T[U]>): SWRResponse<ResponseData<T[U]>, any>
function useAspidaSWR<
  T extends Record<string, any> & { $path: (option?: any) => string },
  U extends { [K in keyof T]: T[K] extends (option: any) => Promise<any> ? K : never }[keyof T]
>(api: T, maybeMethod: U, ...option: Parameters<T[U]>) {
  const method = typeof maybeMethod === 'string' ? maybeMethod : '$get'
  const opt = typeof maybeMethod === 'string' ? (option as any)[0] : maybeMethod

  const enabled = opt?.enabled ?? true

  const key =
    opt?.key !== undefined
      ? typeof opt.key === 'function'
        ? opt.key()
        : opt.key
      : enabled
      ? getAspidaSWRDefaultKey(api as any, method as any, opt)
      : null

  const fetcherInterv = opt?.fetcher === undefined ? (enabled ? (f: any) => f : null) : opt?.fetcher
  const fetcher =
    !api || typeof fetcherInterv !== 'function'
      ? null
      : (api => () => {
          return fetcherInterv(api[method])(opt)
        })(api)

  return useSWR(key, fetcher, opt)
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
): SWRInfiniteResponse<ResponseData<T[U]>>
export function useAspidaSWRInfinite<
  T extends Record<string, any> & { $path: (option?: any) => string },
  U extends { [K in keyof T]: T[K] extends (option: any) => Promise<any> ? K : never }[keyof T]
>(getKey: KeyLoader, api: T, key: U, ...option: Parameters<T[U]>) {
  const method = typeof key === 'string' ? key : '$get'
  const opt = typeof key === 'string' ? (option as any)[0] : key

  return useSWRInfinite(
    (...args: Parameters<SWRKeyLoader>) =>
      opt?.enabled === false
        ? null
        : getKey(
            api.$path({
              ...opt,
              ...(opt?.query ? { query: opt.query(...args) } : {})
            }),
            method,
            ...args
          ),
    () => api[method](opt),
    opt
  )
}

export default useAspidaSWR
