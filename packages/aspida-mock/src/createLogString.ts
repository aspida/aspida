import { dataToURLString } from 'aspida'
import { MockRequestConfig } from './'

export default (config: MockRequestConfig, status: number) => {
  const searchString = dataToURLString(config.query)

  return `[mock] ${config.method}: ${config.path}${
    searchString ? `?${searchString}` : ''
  } => ${status}`
}
