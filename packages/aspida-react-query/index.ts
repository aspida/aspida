import { useQuery, UseQueryResult, UseQueryOptions } from 'react-query'

type QueryOptions<T extends (option: any) => Promise<any>> = Parameters<
  Parameters<T> extends [Parameters<T>[0]]
    ? (
        option: Parameters<T>[0] &
          UseQueryOptions<ReturnType<T> extends Promise<infer S> ? S : never>
      ) => void
    : (
        option?: Parameters<T>[0] &
          UseQueryOptions<ReturnType<T> extends Promise<infer S> ? S : never>
      ) => void
>

type QueryResult<T extends (option: any) => Promise<any>> = UseQueryResult<
  ReturnType<T> extends Promise<infer S> ? S : never,
  any
>

function useAspidaQuery<
  T extends Record<string, any> & {
    $get: (option: any) => Promise<any>
    $path: (option?: any) => string
  }
>(api: T, ...option: QueryOptions<T['$get']>): QueryResult<T['$get']>
function useAspidaQuery<
  T extends Record<string, any> & { $path: (option?: any) => string },
  U extends { [K in keyof T]: T[K] extends (option: any) => Promise<any> ? K : never }[keyof T]
>(api: T, key: U, ...option: QueryOptions<T[U]>): QueryResult<T[U]>
function useAspidaQuery<
  T extends Record<string, any> & { $path: (option?: any) => string },
  U extends { [K in keyof T]: T[K] extends (option: any) => Promise<any> ? K : never }[keyof T]
>(api: T, key: U, ...option: Parameters<T[U]>) {
  const method = typeof key === 'string' ? key : '$get'
  const opt = typeof key === 'string' ? (option as any)[0] : key

  return useQuery(
    typeof key === 'string' ? [api.$path(opt), method] : api.$path(opt),
    () => api[method](opt),
    opt
  )
}

export { useAspidaQuery }
