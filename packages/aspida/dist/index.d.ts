export declare type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH' | 'OPTIONS';
export declare type LowerHttpMethod = 'get' | 'post' | 'put' | 'delete' | 'head' | 'patch' | 'options';
export declare type RequestType = 'FormData' | 'URLSearchParams' | 'ArrayBuffer' | 'Blob' | 'string' | 'any';
export declare type HttpStatusOk = 200 | 201 | 202 | 203 | 204 | 205 | 206;
export declare type BasicHeaders = Record<string, string>;
export declare type AspidaRequest<Config = any> = {
    query?: any;
    headers?: any;
    httpBody?: any;
    body?: any;
    config?: Config;
};
export declare type AspidaResponse<T = void, U = BasicHeaders, V = HttpStatusOk> = {
    status: V;
    headers: U;
    originalResponse: any;
    body: T;
};
export declare type AspidaParams<Config = any> = {
    query?: any;
    headers?: any;
    body?: any;
    config?: Config;
};
export declare type AspidaClient<Config> = {
    baseURL: string | undefined;
    fetch: <T, U = BasicHeaders, V = HttpStatusOk>(prefix: string, path: string, method: HttpMethod, params?: AspidaParams<Config>, type?: RequestType) => {
        send(): Promise<AspidaResponse<void, U, V>>;
        json(): Promise<AspidaResponse<T, U, V>>;
        text(): Promise<AspidaResponse<string, U, V>>;
        arrayBuffer(): Promise<AspidaResponse<ArrayBuffer, U, V>>;
        blob(): Promise<AspidaResponse<Blob, U, V>>;
        formData(): Promise<AspidaResponse<FormData, U, V>>;
    };
};
export declare const headersToObject: (headers: Headers) => any;
export declare const dataToURLString: (data: Record<string, any>) => string;
export declare const optionToRequest: (option?: AspidaParams<any> | undefined, type?: RequestType | undefined) => AspidaRequest | undefined;
export declare type AspidaMethodParams = {
    status?: number;
    query?: any;
    reqHeaders?: any;
    reqFormat?: FormData | URLSearchParams | ArrayBuffer | Blob | string | any;
    reqBody?: any;
    resHeaders?: any;
    resBody?: any;
};
export declare type AspidaMethod = AspidaMethodParams & {
    polymorph?: AspidaMethodParams[];
};
export declare type AspidaMethods = {
    [method in LowerHttpMethod]?: AspidaMethod;
};
export declare type DefineMethods<T extends AspidaMethods> = T;
//# sourceMappingURL=index.d.ts.map