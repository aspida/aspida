import { AxiosRequestConfig } from 'axios'
import createRelativePath from './createRelativePath'

export default (config: AxiosRequestConfig, status: number) => {
  const [dirPath, query] = (config.url || '').split('?')
  const relativePath = createRelativePath(dirPath, config.baseURL)
  const params = new URLSearchParams(query)
  Object.keys(config.params || {}).forEach(key => params.append(key, config.params[key]))
  const searchString = params.toString()

  return `[mock] ${config.method}: ${relativePath}${
    searchString === '' ? '' : `/?${searchString}`
  } => ${status}`
}
