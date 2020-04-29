/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
    }

    resBody: {
      sections: Types.sectionResponse['section'][]
    }
  }

  post: {
    resBody: Types.sectionResponse
    reqFormat: URLSearchParams
    reqBody?: Types.sectionParams
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { sections: [{ id: 1, name: 'a', long_name: 'a', company_id: 1, shortcut1: 'a', shortcut2: 'a' }] } }),
  post: () => ({ status: 200, resBody: { section: { id: 1, name: 'a', long_name: 'a', company_id: 1, shortcut1: 'a', shortcut2: 'a' } } })
})
