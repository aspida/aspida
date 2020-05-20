export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH' | 'OPTIONS'
export type LowerHttpMethod = 'get' | 'post' | 'put' | 'delete' | 'head' | 'patch' | 'options'
export type RequestType = 'FormData' | 'URLSearchParams' | 'ArrayBuffer' | 'Blob' | 'string' | 'any'
export type HttpStatusOk = 200 | 201 | 202 | 203 | 204 | 205 | 206
export type BasicHeaders = Record<string, string>

export type AspidaRequest<Config = any> = {
  query?: any
  headers?: any
  body?: any
  data?: any
  config?: Config
}

export type AspidaResponse<T, U, V> = {
  status: V
  headers: U
  originalResponse: any
  data: T
}

export type AspidaParams<Config = any> = {
  query?: any
  headers?: any
  data?: any
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
    send(): Promise<AspidaResponse<null, U, V>>
    json(): Promise<AspidaResponse<T, U, V>>
    text(): Promise<AspidaResponse<string, U, V>>
    arrayBuffer(): Promise<AspidaResponse<ArrayBuffer, U, V>>
    blob(): Promise<AspidaResponse<Blob, U, V>>
    formData(): Promise<AspidaResponse<FormData, U, V>>
  }
}

export const headersToObject = (headers: Headers): any =>
  [...headers.entries()].reduce((prev, [key, val]) => ({ ...prev, [key]: val }), {})

const dataToFormData = (data: Record<string, any>) => {
  const formData = new FormData()
  Object.keys(data).forEach(key => {
    formData.append(key, data[key])
  })
  return formData
}

const encode = (str: Parameters<typeof encodeURIComponent>[0]) =>
  encodeURIComponent(str).replace(
    /[!'()~]|%20|%00/g,
    match =>
      (({
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+',
        '%00': '\x00'
      } as Record<string, string>)[match])
  )

export const dataToURLString = (data: Record<string, any>) =>
  Object.keys(data)
    .map(key =>
      Array.isArray(data[key])
        ? data[key].map((v: string) => `${encode(key)}=${encode(v)}`).join('&')
        : `${encode(key)}=${encode(data[key])}`
    )
    .join('&')

export const optionToRequest = (
  option?: AspidaParams,
  type?: RequestType
): AspidaRequest | undefined => {
  if (!option?.data) return option

  let body
  const headers: BasicHeaders = {}

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
    case 'any':
      body = option.data
      break
    default:
      body = JSON.stringify(option.data)
      headers['Content-Type'] = 'application/json;charset=utf-8'
      break
  }

  return { body, ...option, headers: { ...headers, ...option.headers } }
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

export type AspidaMethods = {
  [method in LowerHttpMethod]?: AspidaMethodParams
}
