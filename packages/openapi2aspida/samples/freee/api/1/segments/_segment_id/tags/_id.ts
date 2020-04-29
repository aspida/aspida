/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../../../@types'

export type Methods = {
  put: {
    resBody: Types.segmentTagResponse
    reqFormat: URLSearchParams
    reqBody: Types.segmentTagParams
  }

  delete: {
    query: {
      company_id: number
    }
  }
}

export default mockMethods<Methods>({
  put: () => ({ status: 200, resBody: { segment_tag: { id: 1, name: 'a', description: 'a', shortcut1: 'a', shortcut2: 'a' } } }),
  delete: () => ({ status: 200 })
})
