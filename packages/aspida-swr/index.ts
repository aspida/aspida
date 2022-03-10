import useSWR, { SWRResponse, SWRConfiguration } from 'swr'

type ValueKey = string | any[] | null

type AspidaSWROption<T> = T & {
  /**
   * @deprecated
   * Will be dropped next major release.
   * Use key and fetcher options instead.
   *    key: (_opt, getOriginalKey) =>
   *      enabled ? getOriginalKey() : null,
   *    fetcher: enabled ? undefined : null
   */
  enabled?: boolean
  key?: ValueKey | ((opt: AspidaSWROption<T>, getOriginalKey: () => string[]) => ValueKey)
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

type ResponseData<T extends (option: any) => Promise<any>> = ReturnType<T> extends Promise<infer S>
  ? S
  : never

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

  return useSWR(key, fetcher, opt)
}

export default useAspidaSWR
