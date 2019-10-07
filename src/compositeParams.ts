import qs from 'query-string'

export default (query = '', configParams: { [key: string]: any }): { [key: string]: any } => {
  const searchParams = qs.parse(query)
  const searchObject = Object.keys(searchParams).reduce(
    (prev, current) => ({
      ...prev,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      [current]: isNaN(+searchParams[current]!) ? searchParams[current]! : +searchParams[current]!
    }),
    {}
  )

  return {
    ...searchObject,
    ...configParams
  }
}
