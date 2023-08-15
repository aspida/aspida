import type { AspidaClient } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_14u5b7a } from './_userId@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/v1.1/users';
  const GET = 'GET';
  const POST = 'POST';

  return {
    _userId: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`;

      return {
        $get: (option: { query: Methods_14u5b7a['get']['query'], headers: Methods_14u5b7a['get']['reqHeaders'], config?: T | undefined }) =>
          fetch<Methods_14u5b7a['get']['resBody']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $post: (option: { query: Methods_14u5b7a['post']['query'], config?: T | undefined }) =>
          fetch<Methods_14u5b7a['post']['resBody']>(prefix, prefix0, POST, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_14u5b7a['get']['query'] } | { method: 'post'; query: Methods_14u5b7a['post']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
