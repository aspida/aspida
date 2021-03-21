export type LowerHttpMethod = 'get' | 'post' | 'put' | 'delete' | 'head' | 'patch' | 'options'

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
