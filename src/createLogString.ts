import { AxiosRequestConfig } from 'axios'
import qs from 'query-string'
import createRelativePath from './createRelativePath'

export default (config: AxiosRequestConfig, status: number) => {
  const [dirPath, query] = (config.url || '').split('?')
  const relativePath = createRelativePath(dirPath, config.baseURL)
  const searchString = qs.stringify(
    Object.keys(config.params || {}).reduce(
      (prev, current) => ({
        ...prev,
        [current]: config.params[current]
      }),
      qs.parse(query)
    )
  )

  return `[mock] ${config.method}: ${relativePath}${
    searchString === '' ? '' : `?${searchString}`
  } => ${status}`
}
