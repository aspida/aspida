import { parse } from 'swagger-parser'
import { OpenAPI, OpenAPIV3 } from 'openapi-types'
import buildV3 from './buildV3'
import resolveExternalRefs from './resolveExternalRefs'
import { Config } from './getConfig'

const isV3 = (openapi: OpenAPI.Document): openapi is OpenAPIV3.Document => 'openapi' in openapi

export default async ({ input, isYaml }: Config) => {
  const openapi = await parse(input, { parse: { json: !isYaml } })
  const docs = isV3(openapi)
    ? openapi
    : await require('swagger2openapi').convertObj(openapi, { direct: true })

  return buildV3(await resolveExternalRefs(docs, typeof input === 'string' ? input : ''))
}
