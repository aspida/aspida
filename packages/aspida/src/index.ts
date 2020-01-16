export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH' | 'OPTIONS'

type BasicHeaders = { [key: string]: string }
export interface AspidaRequest<T = any, Config = any> {
  query?: any
  headers?: any
  body?: T
  config?: Config
}

export interface AspidaResponse<T, U> {
  status: number
  headers: U
  originalResponse: any
  data: T
}

export interface AspidaClient<Config> {
  baseURL: string | undefined
  fetch: <T, U = BasicHeaders>(
    prefix: string,
    path: string,
    method: HttpMethod,
    request?: AspidaRequest<any, Config>
  ) => {
    send(): Promise<AspidaResponse<null, U>>
    json(): Promise<AspidaResponse<T, U>>
    text(): Promise<AspidaResponse<string, U>>
    arrayBuffer(): Promise<AspidaResponse<ArrayBuffer, U>>
    blob(): Promise<AspidaResponse<Blob, U>>
    formData(): Promise<AspidaResponse<FormData, U>>
  }
}

export function headersToObject<T>(headers: Headers) {
  return [...headers.entries()].reduce((prev, [key, val]) => ({ ...prev, [key]: val }), {} as T)
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

type Option<T = any> = { config?: any, query?: any; headers?: any; data?: T }

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

  return { query: option.query, headers, body, config: option.config }
}

export { optionToRequest }
