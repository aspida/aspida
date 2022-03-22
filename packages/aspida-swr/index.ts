import useSWR, { SWRResponse, SWRConfiguration, mutate } from 'swr'
import { MutatorCallback } from 'swr/dist/types'

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

type MutatorOptions<T extends (option: any) => Promise<any>> = Parameters<
  Parameters<T> extends [Parameters<T>[0]]
    ? (
        option: AspidaSWROption<Parameters<T>[0]>,
        data?: ResponseData<T> | Promise<ResponseData<T>> | MutatorCallback<ResponseData<T>>,
        maybeShouldRevalidate?: string
      ) => void
    : (
        option?: AspidaSWROption<Parameters<T>[0]>,
        data?: ResponseData<T> | Promise<ResponseData<T>> | MutatorCallback<ResponseData<T>>,
        maybeShouldRevalidate?: string
      ) => void
>

type ResponseData<T extends (option: any) => Promise<any>> = ReturnType<T> extends Promise<infer S>
  ? S
  : never

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

function aspidaMutate<
  T extends Record<string, any> & {
    $get: (option: any) => Promise<any>
    $path: (option?: any) => string
  }
>(api: T, ...option: MutatorOptions<T['$get']>): Promise<ResponseData<T['$get']> | undefined>
function aspidaMutate<
  T extends Record<string, any> & { $path: (option?: any) => string },
  U extends { [K in keyof T]: T[K] extends (option: any) => Promise<any> ? K : never }[keyof T]
>(api: T, method: U, ...option: MutatorOptions<T[U]>): Promise<ResponseData<T[U]> | undefined>
function aspidaMutate<
  T extends Record<string, any> & { $path: (option?: any) => string },
  U extends { [K in keyof T]: T[K] extends (option: any) => Promise<any> ? K : never }[keyof T]
>(
  api: T,
  maybeMethod: U,
  maybeOption: Parameters<T[U]>[0],
  maybeData?:
    | ResponseData<T['$get']>
    | Promise<ResponseData<T['$get']>>
    | MutatorCallback<ResponseData<T['$get']>>,
  maybeShouldRevalidate?: string
) {
  const method = typeof maybeMethod === 'string' ? maybeMethod : '$get'
  const option = typeof maybeMethod === 'string' ? maybeOption : maybeMethod
  const data = typeof maybeMethod === 'string' ? maybeData : maybeOption
  const shouldRevalidate = typeof maybeMethod === 'string' ? maybeShouldRevalidate : maybeData
  const key = getAspidaSWRDefaultKey(api as any, method as any, option as any)
  return mutate(key, data, shouldRevalidate as any)
}
export { aspidaMutate }

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

export default useAspidaSWR
