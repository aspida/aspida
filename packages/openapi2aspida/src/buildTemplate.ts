import { parse } from 'swagger-parser'
import { OpenAPI, OpenAPIV3 } from 'openapi-types'
import buildV3 from './buildV3'

export type Template = {
  baseURL: string
  types: string | null
  files: {
    file: string[]
    methods: string
  }[]
}

const isV3 = (openapi: OpenAPI.Document): openapi is OpenAPIV3.Document => 'openapi' in openapi

export default async (
  input: string | OpenAPI.Document,
  isYaml: boolean,
  needsMock: boolean,
  needsMockType: boolean
): Promise<Template> => {
  const openapi = await parse(input, { parse: { json: !isYaml } })

  return buildV3(
    isV3(openapi)
      ? openapi
      : await require('swagger2openapi').convertObj(openapi, { direct: true }),
    needsMock,
    needsMockType
  )
}
