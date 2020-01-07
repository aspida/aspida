import { AxiosRequestConfig } from 'axios'
import { HandlersSet } from './types'
import findHandler from './findHandler'
import createValues from './createValues'
import untransformData from './untransformData'
import compositeParams from './compositeParams'
import createRelativePath from './createRelativePath'

export default (config: AxiosRequestConfig, handlersSet: HandlersSet) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [dirPath, query] = config.url!.split('?')
  const relativePath = createRelativePath(dirPath, config.baseURL)
  const handler = findHandler(config.method, relativePath, handlersSet)

  return (
    handler &&
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    handler[2]!({
      config,
      values: createValues(handler[1], relativePath),
      params: compositeParams(query, config.params),
      data: untransformData(config.data, config.headers)
    })
  )
}
