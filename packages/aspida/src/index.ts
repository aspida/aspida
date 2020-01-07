import 'url-search-params-polyfill'

export type BasicHeaders = { [key: string]: string }
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH'

export interface AspidaRequest<T = any> {
  query?: { [key: string]: any }
  headers?: BasicHeaders
  body?: T
}

export interface AspidaResponse<T, U> {
  status: number
  headers: U
  body: any
  data: T
}

export interface AspidaClient {
  fetch: <T, U extends BasicHeaders = BasicHeaders>(
    url: string,
    method: HttpMethod,
    request?: AspidaRequest
  ) => {
    send(): Promise<AspidaResponse<null, U>>
    json(): Promise<AspidaResponse<T, U>>
    text(): Promise<AspidaResponse<string, U>>
    arrayBuffer(): Promise<AspidaResponse<ArrayBuffer, U>>
    blob(): Promise<AspidaResponse<Blob, U>>
    formData(): Promise<AspidaResponse<FormData, U>>
  }
}

export function headersToObject<T extends BasicHeaders>(headers: Headers) {
  return [...headers.entries()].reduce((prev, [key, val]) => ({ ...prev, [key]: val }), {}) as T
}

function dataToFormData(data: { [key: string]: any }) {
  const formData = new FormData()
  Object.keys(data).forEach(key => {
    formData.append(key, data[key])
  })
  return formData
}

export function dataToURLString(data: { [key: string]: any }) {
  const params = new URLSearchParams()
  Object.keys(data).forEach(key => {
    params.append(key, data[key])
  })
  return params.toString()
}

type Option<T = any> = { query?: any; headers?: any; data?: T }

function optionToRequest(option: Option, type: 'FormData'): AspidaRequest<FormData>
function optionToRequest(option: Option, type: 'URLSearchParams'): AspidaRequest<URLSearchParams>
function optionToRequest(
  option: Option<ArrayBuffer>,
  type: 'ArrayBuffer'
): AspidaRequest<ArrayBuffer>
function optionToRequest(option: Option<Blob>, type: 'Blob'): AspidaRequest<Blob>
function optionToRequest(option: Option<string>, type: 'string'): AspidaRequest<string>
function optionToRequest(option: Option): AspidaRequest
function optionToRequest(
  option: Option,
  type?: 'FormData' | 'URLSearchParams' | 'ArrayBuffer' | 'Blob' | 'string'
): AspidaRequest {
  if (!option.data) return option

  let body
  const headers = { ...option.headers }

  switch (type) {
    case 'FormData':
      body = dataToFormData(option.data)
      break
    case 'URLSearchParams':
      body = dataToURLString(option.data)
      headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
      break
    case 'ArrayBuffer':
    case 'string':
    case 'Blob':
      body = option.data
      break
    default:
      body = JSON.stringify(option.data)
      headers['Content-Type'] = 'application/json;charset=utf-8'
      break
  }

  return { query: option.query, headers, body }
}

export { optionToRequest }
