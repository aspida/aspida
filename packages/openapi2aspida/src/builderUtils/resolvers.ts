/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { OpenAPIV3 } from 'openapi-types'
import { isRefObject, $ref2TypeName } from './converters'

export const resolveParamsRef = (
  openapi: OpenAPIV3.Document,
  ref: string
): OpenAPIV3.ParameterObject => {
  const target = openapi.components?.parameters![$ref2TypeName(ref)]
  return isRefObject(target) ? resolveParamsRef(openapi, target.$ref) : target
}

export const resolveSchemasRef = (
  openapi: OpenAPIV3.Document,
  ref: string
): OpenAPIV3.SchemaObject => {
  const target = openapi.components?.schemas![$ref2TypeName(ref)]
  return isRefObject(target) ? resolveSchemasRef(openapi, target.$ref) : target
}

export const resolveResRef = (
  openapi: OpenAPIV3.Document,
  ref: string
): OpenAPIV3.ResponseObject => {
  const target = openapi.components?.responses![$ref2TypeName(ref)]
  return isRefObject(target) ? resolveResRef(openapi, target.$ref) : target
}

export const resolveReqRef = (
  openapi: OpenAPIV3.Document,
  ref: string
): OpenAPIV3.RequestBodyObject => {
  const target = openapi.components?.requestBodies![$ref2TypeName(ref)]
  return isRefObject(target) ? resolveReqRef(openapi, target.$ref) : target
}
