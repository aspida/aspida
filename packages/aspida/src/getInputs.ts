import { defaultConfig } from './getConfig'

export default (input?: string | string[]) =>
  Array.isArray(input) ? input : [input || defaultConfig.input]
