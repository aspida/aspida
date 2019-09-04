import { AxiosRequestConfig } from 'axios'
import { HandlersSet } from './types'
import findHandler from './findHandler'
import createValues from './createValues'
import untransformData from './untransformData'

export default (config: AxiosRequestConfig, handlersSet: HandlersSet) => {
  const handler = findHandler(config, handlersSet)

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return (
    handler &&
    handler[2]!({
      config,
      values: createValues(handler[1], config.url, config.baseURL),
      data: untransformData(config.data, config.headers)
    })
  )
}
