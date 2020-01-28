import { parse } from 'swagger-parser'
import { OpenAPI, OpenAPIV3 } from 'openapi-types'
import buildV3 from './buildV3'

export interface Template {
  baseURL: string
  types?: string
  files: {
    file: string[]
    methods: string
  }[]
}

const isV3 = (openapi: OpenAPI.Document): openapi is OpenAPIV3.Document => 'openapi' in openapi

export default async (input: string | OpenAPI.Document, isYaml: boolean): Promise<Template> => {
  const openapi = await parse(input, { parse: { json: !isYaml } })

  return buildV3(
    isV3(openapi) ? openapi : await require('swagger2openapi').convertObj(openapi, { direct: true })
  )
}
