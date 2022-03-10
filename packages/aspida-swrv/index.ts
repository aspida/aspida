import useSWRV, { IConfig } from 'swrv'
import { IResponse } from 'swrv/dist/types'

type keyType = string | any[] | null

type AspidaSWRVOption<T> = T & {
  /**
   * @deprecated
   * Will be dropped next major release.
   * Use key and fetcher options instead.
   *    key: (_opt, getOriginalKey) =>
   *      enabled ? getOriginalKey() : null,
   *    fetcher: enabled ? undefined : null
   */
  enabled?: boolean
  key?: keyType | ((opt: AspidaSWRVOption<T>, getOriginalKey: () => string[] | null) => keyType)
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

  const getOriginalKey = (api => () => {
    return api && [api.$path(opt), method]
  })(api)

  const key =
    opt?.key !== undefined
      ? typeof opt.key === 'function'
        ? opt.key(opt, getOriginalKey)
        : opt.key
      : enabled
      ? getOriginalKey()
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
