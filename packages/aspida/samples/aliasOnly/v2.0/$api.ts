import type { AspidaClient } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/v2.0';
  const GET = 'GET';

  return {
    $get: (option: { query: Methods_by08hd['get']['query'], headers: Methods_by08hd['get']['reqHeaders'], config?: T | undefined }) =>
      fetch<Methods_by08hd['get']['resBody'], Methods_by08hd['get']['resHeaders'], Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).text().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
