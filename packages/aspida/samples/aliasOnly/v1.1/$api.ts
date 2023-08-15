import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_1863s82 } from './2/_hogeId';
import type { Methods as Methods_10jwsvn } from './2/_hogeId@number';
import type { Methods as Methods_1c6yqcc } from './2/_hogeId@string/entries.json';
import type { Methods as Methods_23mgxx } from './2/_hogeId@string/test-4';
import type { Methods as Methods_dqwexv } from './2/_hogeId@string/test-4/_fugaId';
import type { Methods as Methods_nqml4r } from './2/_hogeId@string/test-4/fuga aa';
import type { Methods as Methods_1xy14kq } from './3.1';
import type { Methods as Methods_1j2b452 } from './_articleId.json';
import type { Methods as Methods_pxqx5v } from './users/_userId@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/v1.1';
  const PATH1 = '/v1.1/2';
  const PATH2 = '/entries.json';
  const PATH3 = '/test-4';
  const PATH4 = '/test-4/fuga aa';
  const PATH5 = '/v1.1/3.1';
  const PATH6 = '/v1.1/users';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    $2: {
      _hogeId: (val1: number | string) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1863s82['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      _hogeId_number: (val1: number) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          $get: (option: { query?: Methods_10jwsvn['get']['query'] | undefined, headers: Methods_10jwsvn['get']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods_10jwsvn['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_10jwsvn['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      _hogeId_string: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          entries_json: {
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1c6yqcc['get']['resBody']>(prefix, `${prefix1}${PATH2}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH2}`,
          },
          test_4: {
            /**
             * _fugaId comment
             */
            _fugaId: (val3: number | string) => {
              const prefix3 = `${prefix1}${PATH3}/${val3}`;

              return {
                $get: (option?: { query?: Methods_dqwexv['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                  fetch<Methods_dqwexv['get']['resBody']>(prefix, prefix3, GET, option).json().then(r => r.body),
                $post: (option: { body?: Methods_dqwexv['post']['reqBody'] | undefined, query: Methods_dqwexv['post']['query'], config?: T | undefined }) =>
                  fetch<Methods_dqwexv['post']['resBody']>(prefix, prefix3, POST, option).json().then(r => r.body),
                $put: (option: { query: Methods_dqwexv['put']['query'], config?: T | undefined }) =>
                  fetch<Methods_dqwexv['put']['resBody']>(prefix, prefix3, PUT, option).json().then(r => r.body),
                /**
                 * _fugaId delete method
                 * @returns _fugaId resBody
                 */
                $delete: (option: { query: Methods_dqwexv['delete']['query'], config?: T | undefined }) =>
                  fetch<Methods_dqwexv['delete']['resBody']>(prefix, prefix3, DELETE, option).json().then(r => r.body),
                $path: (option?: { method?: 'get' | undefined; query: Methods_dqwexv['get']['query'] } | { method: 'post'; query: Methods_dqwexv['post']['query'] } | { method: 'put'; query: Methods_dqwexv['put']['query'] } | { method: 'delete'; query: Methods_dqwexv['delete']['query'] } | undefined) =>
                  `${prefix}${prefix3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
              };
            },
            fuga_aa: {
              $get: (option: { query: Methods_nqml4r['get']['query'], config?: T | undefined }) =>
                fetch<Methods_nqml4r['get']['resBody']>(prefix, `${prefix1}${PATH4}`, GET, option).json().then(r => r.body),
              $post: (option: { body?: Methods_nqml4r['post']['reqBody'] | undefined, query: Methods_nqml4r['post']['query'], config?: T | undefined }) =>
                fetch<Methods_nqml4r['post']['resBody']>(prefix, `${prefix1}${PATH4}`, POST, option).json().then(r => r.body),
              $put: (option: { query: Methods_nqml4r['put']['query'], config?: T | undefined }) =>
                fetch<Methods_nqml4r['put']['resBody']>(prefix, `${prefix1}${PATH4}`, PUT, option).json().then(r => r.body),
              $delete: (option: { body: Methods_nqml4r['delete']['reqBody'], query: Methods_nqml4r['delete']['query'], config?: T | undefined }) =>
                fetch<Methods_nqml4r['delete']['resBody']>(prefix, `${prefix1}${PATH4}`, DELETE, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods_nqml4r['get']['query'] } | { method: 'post'; query: Methods_nqml4r['post']['query'] } | { method: 'put'; query: Methods_nqml4r['put']['query'] } | { method: 'delete'; query: Methods_nqml4r['delete']['query'] } | undefined) =>
                `${prefix}${prefix1}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
            },
            $get: (option: { query: Methods_23mgxx['get']['query'], config?: T | undefined }) =>
              fetch(prefix, `${prefix1}${PATH3}`, GET, option).send().then(r => r.body),
            $post: (option?: { body?: Methods_23mgxx['post']['reqBody'] | undefined, query?: Methods_23mgxx['post']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch(prefix, `${prefix1}${PATH3}`, POST, option).send().then(r => r.body),
            $put: (option?: { query?: Methods_23mgxx['put']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_23mgxx['put']['resBody']>(prefix, `${prefix1}${PATH3}`, PUT, option).json().then(r => r.body),
            $delete: (option: { query: Methods_23mgxx['delete']['query'], config?: T | undefined }) =>
              fetch<Methods_23mgxx['delete']['resBody']>(prefix, `${prefix1}${PATH3}`, DELETE, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_23mgxx['get']['query'] } | { method: 'post'; query: Methods_23mgxx['post']['query'] } | { method: 'put'; query: Methods_23mgxx['put']['query'] } | { method: 'delete'; query: Methods_23mgxx['delete']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
        };
      },
    },
    /**
     * 3.1 comment
     */
    $3_1: {
      /**
       * 3.1 get method comment
       * @param option.headers - 3.1 reqHeaders
       */
      $get: (option?: { query?: Methods_1xy14kq['get']['query'] | undefined, headers?: Methods_1xy14kq['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1xy14kq['get']['resBody']>(prefix, PATH5, GET, option).json().then(r => r.body),
      $post: (option: { body?: Methods_1xy14kq['post']['reqBody'] | undefined, query: Methods_1xy14kq['post']['query'], config?: T | undefined }) =>
        fetch<Methods_1xy14kq['post']['resBody']>(prefix, PATH5, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1xy14kq['get']['query'] } | { method: 'post'; query: Methods_1xy14kq['post']['query'] } | undefined) =>
        `${prefix}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    _articleId_json: (val0: number | string) => {
      const prefix0 = `${PATH0}/${val0}.json`;

      return {
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_1j2b452['get']['resBody']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
    users: {
      _userId: (val1: string) => {
        const prefix1 = `${PATH6}/${val1}`;

        return {
          $get: (option: { query: Methods_pxqx5v['get']['query'], headers: Methods_pxqx5v['get']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods_pxqx5v['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $post: (option: { query: Methods_pxqx5v['post']['query'], config?: T | undefined }) =>
            fetch<Methods_pxqx5v['post']['resBody']>(prefix, prefix1, POST, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_pxqx5v['get']['query'] } | { method: 'post'; query: Methods_pxqx5v['post']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
    },
    $get: (option?: { query?: Methods_by08hd['get']['query'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody'], BasicHeaders, Methods_by08hd['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
