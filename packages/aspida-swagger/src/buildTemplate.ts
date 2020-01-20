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

const isV3 = (swagger: OpenAPI.Document): swagger is OpenAPIV3.Document => 'openapi' in swagger

export default async (input: string, isYaml: boolean): Promise<Template> => {
  const swagger = await parse(input, { parse: { json: !isYaml } })

  return buildV3(
    isV3(swagger) ? swagger : await require('swagger2openapi').convertObj(swagger, { direct: true })
  )
}
