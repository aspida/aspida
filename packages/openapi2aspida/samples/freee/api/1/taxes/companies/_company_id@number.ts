/* eslint-disable */
import { mockMethods } from 'aspida-mock'
export type Methods = {
  get: {
    status: 200

    resBody: {
      taxes: {
        code: number
        name: string
        name_ja: string
        display_category: 'tax_5' | 'tax_8' | 'tax_r8' | 'tax_10'
        available: boolean
      }[]
    }
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { taxes: [{ code: 1, name: 'a', name_ja: 'a', display_category: 'tax_5', available: true }] } })
})
