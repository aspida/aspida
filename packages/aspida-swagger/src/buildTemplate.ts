import { parse } from 'swagger-parser'
import { OpenAPI, OpenAPIV3 } from 'openapi-types'
import buildV2 from './buildV2'
import buildV3 from './buildV3'
import { Template } from './Template'

const isV3 = (swagger: OpenAPI.Document): swagger is OpenAPIV3.Document => 'openapi' in swagger

export default async (input: string, isYaml: boolean): Promise<Template> => {
  const swagger = await parse(input, {
    parse: { json: !isYaml }
  })
  return isV3(swagger) ? buildV3(swagger) : buildV2(swagger)
}
