import useSWR, { responseInterface, ConfigInterface } from 'swr'

function useAspidaSWR<
  T extends Record<string, any> & {
    $get: (option: any) => Promise<any>
    $path: (option?: any) => string
  }
>(
  api: T,
  ...option: Parameters<
    Parameters<T['$get']> extends [Parameters<T['$get']>[0]]
      ? (
          option: Parameters<T['$get']>[0] &
            ConfigInterface<ReturnType<T['$get']> extends Promise<infer S> ? S : never>
        ) => void
      : (
          option?: Parameters<T['$get']>[0] &
            ConfigInterface<ReturnType<T['$get']> extends Promise<infer S> ? S : never>
        ) => void
  >
): responseInterface<ReturnType<T['$get']> extends Promise<infer S> ? S : never, any>
function useAspidaSWR<
  T extends Record<string, any> & { $path: (option?: any) => string },
  U extends { [K in keyof T]: T[K] extends (option: any) => Promise<any> ? K : never }[keyof T]
>(
  api: T,
  key: U,
  ...option: Parameters<
    Parameters<T[U]> extends [Parameters<T[U]>[0]]
      ? (
          option: Parameters<T[U]>[0] &
            ConfigInterface<ReturnType<T[U]> extends Promise<infer S> ? S : never>
        ) => void
      : (
          option?: Parameters<T[U]>[0] &
            ConfigInterface<ReturnType<T[U]> extends Promise<infer S> ? S : never>
        ) => void
  >
): responseInterface<ReturnType<T[U]> extends Promise<infer S> ? S : never, any>
function useAspidaSWR<
  T extends Record<string, any> & { $path: (option?: any) => string },
  U extends { [K in keyof T]: T[K] extends (option: any) => Promise<any> ? K : never }[keyof T]
>(api: T, key: U, ...option: Parameters<T[U]>) {
  const method = typeof key === 'string' ? key : '$get'
  const opt = typeof key === 'string' ? option[0] : key

  return useSWR<ReturnType<T[U]> extends Promise<infer S> ? S : never>(
    [api.$path(opt), method],
    () => api[method](opt),
    opt as any
  )
}

export default useAspidaSWR
