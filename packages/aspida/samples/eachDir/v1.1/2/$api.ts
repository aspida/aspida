import type { AspidaClient } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_11hoj1j } from './_hogeId';
import type { Methods as Methods_16mvnls } from './_hogeId@number';
import type { Methods as Methods_59zc5 } from './_hogeId@string/entries.json';
import type { Methods as Methods_1gu1xec } from './_hogeId@string/test-4';
import type { Methods as Methods_1607xnu } from './_hogeId@string/test-4/_fugaId';
import type { Methods as Methods_12nwoh6 } from './_hogeId@string/test-4/fuga aa';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/v1.1/2/';
  const PATH1 = '/';
  const PATH2 = '/entries.json/';
  const PATH3 = '/test-4/';
  const PATH4 = '/test-4/fuga aa/';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    _hogeId: (val0: number | string) => {
      const prefix0 = `${PATH0}${val0}`;

      return {
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_11hoj1j['get']['resBody']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_11hoj1j['get']['resBody']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}${PATH1}`,
      };
    },
    _hogeId_number: (val0: number) => {
      const prefix0 = `${PATH0}${val0}`;

      return {
        get: (option: { query?: Methods_16mvnls['get']['query'] | undefined, headers: Methods_16mvnls['get']['reqHeaders'], config?: T | undefined }) =>
          fetch<Methods_16mvnls['get']['resBody']>(prefix, `${prefix0}${PATH1}`, GET, option).json(),
        $get: (option: { query?: Methods_16mvnls['get']['query'] | undefined, headers: Methods_16mvnls['get']['reqHeaders'], config?: T | undefined }) =>
          fetch<Methods_16mvnls['get']['resBody']>(prefix, `${prefix0}${PATH1}`, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_16mvnls['get']['query'] } | undefined) =>
          `${prefix}${prefix0}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      };
    },
    _hogeId_string: (val0: string) => {
      const prefix0 = `${PATH0}${val0}`;

      return {
        entries_json: {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_59zc5['get']['resBody']>(prefix, `${prefix0}${PATH2}`, GET, option).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_59zc5['get']['resBody']>(prefix, `${prefix0}${PATH2}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix0}${PATH2}`,
        },
        test_4: {
          /**
           * _fugaId comment
           */
          _fugaId: (val2: number | string) => {
            const prefix2 = `${prefix0}${PATH3}${val2}`;

            return {
              get: (option?: { query?: Methods_1607xnu['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_1607xnu['get']['resBody']>(prefix, `${prefix2}${PATH1}`, GET, option).json(),
              $get: (option?: { query?: Methods_1607xnu['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_1607xnu['get']['resBody']>(prefix, `${prefix2}${PATH1}`, GET, option).json().then(r => r.body),
              post: (option: { body?: Methods_1607xnu['post']['reqBody'] | undefined, query: Methods_1607xnu['post']['query'], config?: T | undefined }) =>
                fetch<Methods_1607xnu['post']['resBody']>(prefix, `${prefix2}${PATH1}`, POST, option).json(),
              $post: (option: { body?: Methods_1607xnu['post']['reqBody'] | undefined, query: Methods_1607xnu['post']['query'], config?: T | undefined }) =>
                fetch<Methods_1607xnu['post']['resBody']>(prefix, `${prefix2}${PATH1}`, POST, option).json().then(r => r.body),
              put: (option: { query: Methods_1607xnu['put']['query'], config?: T | undefined }) =>
                fetch<Methods_1607xnu['put']['resBody']>(prefix, `${prefix2}${PATH1}`, PUT, option).json(),
              $put: (option: { query: Methods_1607xnu['put']['query'], config?: T | undefined }) =>
                fetch<Methods_1607xnu['put']['resBody']>(prefix, `${prefix2}${PATH1}`, PUT, option).json().then(r => r.body),
              /**
               * _fugaId delete method
               * @returns _fugaId resBody
               */
              delete: (option: { query: Methods_1607xnu['delete']['query'], config?: T | undefined }) =>
                fetch<Methods_1607xnu['delete']['resBody']>(prefix, `${prefix2}${PATH1}`, DELETE, option).json(),
              /**
               * _fugaId delete method
               * @returns _fugaId resBody
               */
              $delete: (option: { query: Methods_1607xnu['delete']['query'], config?: T | undefined }) =>
                fetch<Methods_1607xnu['delete']['resBody']>(prefix, `${prefix2}${PATH1}`, DELETE, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods_1607xnu['get']['query'] } | { method: 'post'; query: Methods_1607xnu['post']['query'] } | { method: 'put'; query: Methods_1607xnu['put']['query'] } | { method: 'delete'; query: Methods_1607xnu['delete']['query'] } | undefined) =>
                `${prefix}${prefix2}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
            };
          },
          fuga_aa: {
            get: (option: { query: Methods_12nwoh6['get']['query'], config?: T | undefined }) =>
              fetch<Methods_12nwoh6['get']['resBody']>(prefix, `${prefix0}${PATH4}`, GET, option).json(),
            $get: (option: { query: Methods_12nwoh6['get']['query'], config?: T | undefined }) =>
              fetch<Methods_12nwoh6['get']['resBody']>(prefix, `${prefix0}${PATH4}`, GET, option).json().then(r => r.body),
            post: (option: { body?: Methods_12nwoh6['post']['reqBody'] | undefined, query: Methods_12nwoh6['post']['query'], config?: T | undefined }) =>
              fetch<Methods_12nwoh6['post']['resBody']>(prefix, `${prefix0}${PATH4}`, POST, option).json(),
            $post: (option: { body?: Methods_12nwoh6['post']['reqBody'] | undefined, query: Methods_12nwoh6['post']['query'], config?: T | undefined }) =>
              fetch<Methods_12nwoh6['post']['resBody']>(prefix, `${prefix0}${PATH4}`, POST, option).json().then(r => r.body),
            put: (option: { query: Methods_12nwoh6['put']['query'], config?: T | undefined }) =>
              fetch<Methods_12nwoh6['put']['resBody']>(prefix, `${prefix0}${PATH4}`, PUT, option).json(),
            $put: (option: { query: Methods_12nwoh6['put']['query'], config?: T | undefined }) =>
              fetch<Methods_12nwoh6['put']['resBody']>(prefix, `${prefix0}${PATH4}`, PUT, option).json().then(r => r.body),
            delete: (option: { body: Methods_12nwoh6['delete']['reqBody'], query: Methods_12nwoh6['delete']['query'], config?: T | undefined }) =>
              fetch<Methods_12nwoh6['delete']['resBody']>(prefix, `${prefix0}${PATH4}`, DELETE, option).json(),
            $delete: (option: { body: Methods_12nwoh6['delete']['reqBody'], query: Methods_12nwoh6['delete']['query'], config?: T | undefined }) =>
              fetch<Methods_12nwoh6['delete']['resBody']>(prefix, `${prefix0}${PATH4}`, DELETE, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_12nwoh6['get']['query'] } | { method: 'post'; query: Methods_12nwoh6['post']['query'] } | { method: 'put'; query: Methods_12nwoh6['put']['query'] } | { method: 'delete'; query: Methods_12nwoh6['delete']['query'] } | undefined) =>
              `${prefix}${prefix0}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
          get: (option: { query: Methods_1gu1xec['get']['query'], config?: T | undefined }) =>
            fetch(prefix, `${prefix0}${PATH3}`, GET, option).send(),
          $get: (option: { query: Methods_1gu1xec['get']['query'], config?: T | undefined }) =>
            fetch(prefix, `${prefix0}${PATH3}`, GET, option).send().then(r => r.body),
          post: (option?: { body?: Methods_1gu1xec['post']['reqBody'] | undefined, query?: Methods_1gu1xec['post']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch(prefix, `${prefix0}${PATH3}`, POST, option).send(),
          $post: (option?: { body?: Methods_1gu1xec['post']['reqBody'] | undefined, query?: Methods_1gu1xec['post']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch(prefix, `${prefix0}${PATH3}`, POST, option).send().then(r => r.body),
          put: (option?: { query?: Methods_1gu1xec['put']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1gu1xec['put']['resBody']>(prefix, `${prefix0}${PATH3}`, PUT, option).json(),
          $put: (option?: { query?: Methods_1gu1xec['put']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1gu1xec['put']['resBody']>(prefix, `${prefix0}${PATH3}`, PUT, option).json().then(r => r.body),
          delete: (option: { query: Methods_1gu1xec['delete']['query'], config?: T | undefined }) =>
            fetch<Methods_1gu1xec['delete']['resBody']>(prefix, `${prefix0}${PATH3}`, DELETE, option).json(),
          $delete: (option: { query: Methods_1gu1xec['delete']['query'], config?: T | undefined }) =>
            fetch<Methods_1gu1xec['delete']['resBody']>(prefix, `${prefix0}${PATH3}`, DELETE, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_1gu1xec['get']['query'] } | { method: 'post'; query: Methods_1gu1xec['post']['query'] } | { method: 'put'; query: Methods_1gu1xec['put']['query'] } | { method: 'delete'; query: Methods_1gu1xec['delete']['query'] } | undefined) =>
            `${prefix}${prefix0}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        },
      };
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
