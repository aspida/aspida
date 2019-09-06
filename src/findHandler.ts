import { AxiosRequestConfig } from 'axios'
import { HandlersSet, HttpMethod } from './types'
import createRelativePath from './createRelativePath'

export default (config: AxiosRequestConfig, handlersSet: HandlersSet) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const handlers = handlersSet[config.method!.toLowerCase() as HttpMethod]
  if (!handlers) return

  const relativePath = createRelativePath(config.url, config.baseURL)

  return handlers.find(([regPath]) => regPath.test(relativePath))
}
