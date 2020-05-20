/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    status: 200
    resBody: Types.sectionResponse
  }

  put: {
    status: 200
    resBody: Types.sectionResponse
    reqFormat: URLSearchParams
    reqBody?: Types.sectionParams
  }

  delete: {
    query: {
      company_id: number
    }

    status: 204
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { section: { id: 1, name: 'a', long_name: 'a', company_id: 1, shortcut1: 'a', shortcut2: 'a' } } }),
  put: () => ({ status: 200, resBody: { section: { id: 1, name: 'a', long_name: 'a', company_id: 1, shortcut1: 'a', shortcut2: 'a' } } }),
  delete: () => ({ status: 204 })
})
