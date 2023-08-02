import { mockMethods } from 'aspida-mock';

export interface Methods {
  get: {
    query: { val: string };
    reqHeaders: { 'content-type': string };
    reqFormat: FormData;
    resHeaders: { token: string };
    resBody: string;
    status: 200 | 204;
  };
}

export default mockMethods<Methods>({
  get: ({ query }) =>
    query.val ? { status: 200, resBody: query.val, resHeaders: { token: 'aaa' } } : { status: 403 },
});
