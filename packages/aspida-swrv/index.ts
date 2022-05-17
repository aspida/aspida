import useSWRV, { IConfig, mutate, SWRVCache } from 'swrv'
import { IResponse } from 'swrv/dist/types'

type keyType = string | any[] | null

type AspidaSWRVOption<T> = T & {
  /**
   * @deprecated
   * Will be dropped next major release.
   * Use key and fetcher options instead.
   *    key: enabled ? undefined : null,
   *    fetcher: enabled ? undefined : null
   */
  enabled?: boolean
  key?: keyType | (() => keyType)
  fetcher?:
    | ((f: (opt: AspidaSWRVOption<T>) => any) => (opt: AspidaSWRVOption<T>) => any)
    | null
    | undefined
}

type Options<T extends (option: any) => Promise<any>> = Parameters<
  Parameters<T> extends [Parameters<T>[0]]
    ? (option: AspidaSWRVOption<Parameters<T>[0] & Omit<IConfig, 'fetcher'>>) => void
    : (option?: AspidaSWRVOption<Parameters<T>[0] & Omit<IConfig, 'fetcher'>>) => void
>

type Res<T extends (option: any) => Promise<any>> = IResponse<
  ReturnType<T> extends Promise<infer S> ? S : never,
  any
>

function getAspidaSWRVDefaultKey<
  T extends Record<string, any> & {
    $get: (option: any) => Promise<any>
    $path: (option?: any) => string
  }
>(api: T, ...option: Options<T['$get']>): string[]
function getAspidaSWRVDefaultKey<
  T extends Record<string, any> & { $path: (option?: any) => string },
  U extends {
    [K in keyof T]: T[K] extends (option: any) => Promise<any> ? K : never
  }[keyof T]
>(api: T, method: U, ...option: Options<T[U]>): string[]
function getAspidaSWRVDefaultKey<
  T extends Record<string, any> & { $path: (option?: any) => string },
  U extends {
    [K in keyof T]: T[K] extends (option: any) => Promise<any> ? K : never
  }[keyof T]
>(api: T, maybeMethod: U, ...option: Parameters<T[U]>) {
  const method = typeof maybeMethod === 'string' ? maybeMethod : '$get'
  const opt = typeof maybeMethod === 'string' ? (option as any)[0] : maybeMethod

  return [api.$path(opt), method]
}
export { getAspidaSWRVDefaultKey }

type AwaitedPolyfill<T> = T extends null | undefined
  ? T
  : T extends object
  ? T extends { then(onfulfilled: infer F): any }
    ? F extends (value: infer V) => any
      ? Awaited<V>
      : never
    : T
  : T

type MutatorOptions<T extends (option: any) => Promise<any>> = Parameters<
  Parameters<T> extends [Parameters<T>[0]]
    ? (
        option: AspidaSWRVOption<Parameters<T>[0]>,
        res?: AwaitedPolyfill<ReturnType<T>>,
        cache?: SWRVCache<Pick<IResponse<any, any>, 'error' | 'data' | 'isValidating'>>,
        ttl?: number
      ) => void
    : (
        option?: AspidaSWRVOption<Parameters<T>[0]>,
        res?: AwaitedPolyfill<ReturnType<T>>,
        cache?: SWRVCache<Pick<IResponse<any, any>, 'error' | 'data' | 'isValidating'>>,
        ttl?: number
      ) => void
>

function aspidaMutate<
  T extends Record<string, any> & {
    $get: (option: any) => Promise<any>
    $path: (option?: any) => string
  }
>(
  api: T,
  ...option: MutatorOptions<T['$get']>
): Promise<{
  data?: AwaitedPolyfill<ReturnType<T['$get']>>
  error?: unknown
  isValidating: boolean
}>
function aspidaMutate<
  T extends Record<string, any> & { $path: (option?: any) => string },
  U extends { [K in keyof T]: T[K] extends (option: any) => Promise<any> ? K : never }[keyof T]
>(
  api: T,
  method: U,
  ...option: MutatorOptions<T[U]>
): Promise<{
  data?: AwaitedPolyfill<ReturnType<T[U]>>
  error?: unknown
  isValidating: boolean
}>
function aspidaMutate<
  T extends Record<string, any> & { $path: (option?: any) => string },
  U extends { [K in keyof T]: T[K] extends (option: any) => Promise<any> ? K : never }[keyof T]
>(
  api: T,
  maybeMethod: U,
  maybeOption: Parameters<T[U]>[0],
  maybeRes?: Parameters<T[U]>[1],
  maybeCache?: Parameters<T[U]>[2],
  maybeTtl?: Parameters<T[U]>[3]
): Promise<{
  data?: T[U]
  error?: unknown
  isValidating: boolean
}> {
  const method = typeof maybeMethod === 'string' ? maybeMethod : '$get'
  const option = typeof maybeMethod === 'string' ? maybeOption : maybeMethod
  const res = typeof maybeMethod === 'string' ? maybeRes : maybeOption
  const cache = typeof maybeMethod === 'string' ? maybeCache : maybeRes
  const ttl = typeof maybeMethod === 'string' ? maybeTtl : maybeCache
  const key = getAspidaSWRVDefaultKey(api as any, method as any, option as any)
  return mutate(key as any, res as any, cache as any, ttl as any)
}
export { aspidaMutate }

function useAspidaSWRV<
  T extends Record<string, any> & {
    $get: (option: any) => Promise<any>
    $path: (option?: any) => string
  }
>(api: T | null | (() => T | null), ...option: Options<T['$get']>): Res<T['$get']>
function useAspidaSWRV<
  T extends Record<string, any> & { $path: (option?: any) => string },
  U extends {
    [K in keyof T]: T[K] extends (option: any) => Promise<any> ? K : never
  }[keyof T]
>(api: T | null | (() => T | null), method: U, ...option: Options<T[U]>): Res<T[U]>
function useAspidaSWRV<
  T extends Record<string, any> & { $path: (option?: any) => string },
  U extends {
    [K in keyof T]: T[K] extends (option: any) => Promise<any> ? K : never
  }[keyof T]
>(api: T | null | (() => T | null), maybeMethod: U, ...option: Parameters<T[U]>) {
  if (typeof api === 'function') api = api()
  const method = typeof maybeMethod === 'string' ? maybeMethod : '$get'
  const opt = typeof maybeMethod === 'string' ? (option as any)[0] : maybeMethod

  const enabled = opt?.enabled ?? true

  const key =
    opt?.key !== undefined
      ? typeof opt.key === 'function'
        ? opt.key()
        : opt.key
      : enabled
      ? getAspidaSWRVDefaultKey(api as any, method, opt)
      : null

  const fetcherInterv = opt?.fetcher === undefined ? (enabled ? (f: any) => f : null) : opt?.fetcher
  const fetcher =
    !api || typeof fetcherInterv !== 'function'
      ? null
      : (api => () => {
          return fetcherInterv(api[method])(opt)
        })(api)

  // TODO: Why as any? https://github.com/Kong/swrv/pull/274.
  return useSWRV(key, fetcher as any, opt)
}

export default useAspidaSWRV
