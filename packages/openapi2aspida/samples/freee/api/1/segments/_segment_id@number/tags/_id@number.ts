/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../../../@types'

export type Methods = {
  put: {
    status: 200
    resBody: Types.segmentTagResponse
    reqFormat: URLSearchParams
    reqBody: Types.segmentTagParams
  }

  delete: {
    query: {
      company_id: number
    }

    status: 204
  }
}

export default mockMethods<Methods>({
  put: () => ({ status: 200, resBody: { segment_tag: { id: 1, name: 'a', description: 'a', shortcut1: 'a', shortcut2: 'a' } } }),
  delete: () => ({ status: 204 })
})
