/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      offset?: number
      limit?: number
    }

    status: 200

    resBody: {
      segment_tags: Types.segmentTagResponse['segment_tag'][]
    }
  }

  post: {
    status: 201
    resBody: Types.segmentTagResponse
    reqFormat: URLSearchParams
    reqBody: Types.segmentTagParams
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { segment_tags: [{ id: 1, name: 'a', description: 'a', shortcut1: 'a', shortcut2: 'a' }] } }),
  post: () => ({ status: 201, resBody: { segment_tag: { id: 1, name: 'a', description: 'a', shortcut1: 'a', shortcut2: 'a' } } })
})
