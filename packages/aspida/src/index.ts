import NodeFormData from 'form-data'
import type { ReadStream } from 'fs'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH' | 'OPTIONS'
export type LowerHttpMethod = 'get' | 'post' | 'put' | 'delete' | 'head' | 'patch' | 'options'
export type RequestType = 'FormData' | 'URLSearchParams' | 'ArrayBuffer' | 'Blob' | 'string' | 'any'
export type HttpStatusOk = 200 | 201 | 202 | 203 | 204 | 205 | 206
export type BasicHeaders = Record<string, string>

export type AspidaRequest<Config = any> = {
  query?: any
  headers?: any
  httpBody?: any
  body?: any
  config?: Config
}

export type AspidaResponse<T = void, U = BasicHeaders, V = HttpStatusOk> = {
  status: V
  headers: U
  originalResponse: any
  body: T
}

export type AspidaParams<Config = any> = {
  query?: any
  headers?: any
  body?: any
  config?: Config
}

export type AspidaClient<Config> = {
  baseURL: string | undefined
  fetch: <T, U = BasicHeaders, V = HttpStatusOk>(
    prefix: string,
    path: string,
    method: HttpMethod,
    params?: AspidaParams<Config>,
    type?: RequestType
  ) => {
    send(): Promise<AspidaResponse<void, U, V>>
    json(): Promise<AspidaResponse<T, U, V>>
    text(): Promise<AspidaResponse<string, U, V>>
    arrayBuffer(): Promise<AspidaResponse<ArrayBuffer, U, V>>
    blob(): Promise<AspidaResponse<Blob, U, V>>
    formData(): Promise<AspidaResponse<FormData, U, V>>
  }
}

export const headersToObject = (headers: Headers): any =>
  [...headers.entries()].reduce((prev, [key, val]) => ({ ...prev, [key]: val }), {})

const appendDataToFormData = (data: Record<string, any>, formData: FormData | NodeFormData) => {
  for (const key in data) {
    if (Array.isArray(data[key])) {
      data[key].forEach((d: any) => formData.append(key, d))
    } else if (data[key] != null) {
      formData.append(key, data[key])
    }
  }

  return formData
}

const encode = (str: Parameters<typeof encodeURIComponent>[0]) =>
  encodeURIComponent(str).replace(
    /[!'()~]|%20|%00/g,
    match =>
      ((
        {
          '!': '%21',
          "'": '%27',
          '(': '%28',
          ')': '%29',
          '~': '%7E',
          '%20': '+',
          '%00': '\x00'
        } as Record<string, string>
      )[match])
  )

export const dataToURLString = (data: Record<string, any>) =>
  Object.keys(data)
    .filter(key => data[key] != null)
    .map(key =>
      Array.isArray(data[key])
        ? data[key].map((v: string) => `${encode(key)}=${encode(v)}`).join('&')
        : `${encode(key)}=${encode(data[key])}`
    )
    .join('&')

const hasFormData = typeof FormData !== 'undefined'

export const optionToRequest = (
  option?: AspidaParams,
  type?: RequestType
): AspidaRequest | undefined => {
  if (option?.body === undefined) return option

  let httpBody
  let headers: BasicHeaders = {}

  switch (type) {
    case 'FormData':
      if (hasFormData) {
        httpBody = appendDataToFormData(option.body, new FormData())
      } else {
        const formData = new NodeFormData()
        httpBody = appendDataToFormData(option.body, formData)
        headers = formData.getHeaders()
      }
      break
    case 'URLSearchParams':
      httpBody = dataToURLString(option.body)
      headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
      break
    case 'ArrayBuffer':
    case 'string':
    case 'Blob':
    case 'any':
      httpBody = option.body
      break
    default:
      httpBody = JSON.stringify(option.body)
      headers['Content-Type'] = 'application/json;charset=utf-8'
      break
  }

  return { httpBody, ...option, headers: { ...headers, ...option.headers } }
}

type AspidaMethodParamsReqOthers = {
  reqHeaders?: any
  reqFormat?: URLSearchParams | ArrayBuffer | Blob | string
  reqBody?: any
  polymorph?: Array<AspidaMethodParamsOthers & Omit<AspidaMethodParamsReqOthers, 'polymorph'>>
}
type AspidaMethodParamsReqFormData = {
  reqHeaders?: any
  reqFormat?: FormData
  reqBody?: Record<string, string | number | File | File[] | ReadStream>
  polymorph?: Array<AspidaMethodParamsOthers & Omit<AspidaMethodParamsReqFormData, 'polymorph'>>
}

type AspidaMethodParamsReq = AspidaMethodParamsReqOthers | AspidaMethodParamsReqFormData

type JSONValue = string | number | boolean | null | { [key: string]: JSONValue } | Array<JSONValue>

type AspidaMethodParamsOthers = {
  status?: number
  query?: Record<string, string | number | (string | number)[]>
  resHeaders?: { [key: string]: string | undefined }
  resBody?: JSONValue | FormData | ArrayBuffer
}

export type AspidaMethodParams = {
  status?: number
  query?: any
  reqHeaders?: any
  reqFormat?: FormData | URLSearchParams | ArrayBuffer | Blob | string | any
  reqBody?: any
  resHeaders?: any
  resBody?: any
}

export type AspidaMethods = Partial<Record<LowerHttpMethod, AspidaMethodParams>>

type AspidaMethodParamsStrict = AspidaMethodParamsReq & AspidaMethodParamsOthers

type AspidaMethodsStrict = Partial<Record<LowerHttpMethod, AspidaMethodParamsStrict>>

export type DefineMethods<T extends AspidaMethodsStrict> = T
