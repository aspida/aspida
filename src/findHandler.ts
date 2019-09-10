import { HandlersSet, HttpMethod } from './types'

export default (method = '', relativePath: string, handlersSet: HandlersSet) => {
  const handlers = handlersSet[method.toLowerCase() as HttpMethod]

  if (handlers) return handlers.find(([regPath]) => regPath.test(relativePath))
}
