import { AxiosError } from 'axios'

/**
 * This function was imported from https://github.com/axios/axios/blob/v1.x/lib/core/settle.js.
 * Because axios has changed from v1 to esm, it has become difficult to resolve the module when executing jest,
 * so it has become difficult to refer to node_module/axios.
 * This file only use testing.
 */
export default function settle(
  resolve: (res: any) => void,
  reject: (reason: any) => void,
  response: any
) {
  const validateStatus = response.config.validateStatus
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response)
  } else {
    reject(
      new AxiosError(
        'Request failed with status code ' + response.status,
        [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][
          Math.floor(response.status / 100) - 4
        ],
        response.config,
        response.request,
        response
      )
    )
  }
}
