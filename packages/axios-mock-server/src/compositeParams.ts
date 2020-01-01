export default (
  query: string | undefined,
  configParams: { [key: string]: any }
): { [key: string]: any } => {
  const searchParams = new URLSearchParams(query)
  const searchObject = [...searchParams].reduce(
    (prev, current) => ({
      ...prev,
      [current[0]]: isNaN(+current[1]) ? current[1] : +current[1]
    }),
    {}
  )

  return {
    ...searchObject,
    ...configParams
  }
}
