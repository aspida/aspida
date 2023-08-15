import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_by08hd } from '.';
import type { Methods as Methods_arjhv7 } from './_sampleId@number.json';
import type { Methods as Methods_1x2do5a } from './foo%3Abar';
import type { Methods as Methods_q6gj8c } from './foo%3Abar/_bar_id@string.json';
import type { Methods as Methods_1so6cbd } from './foo%3Abar/_fooId@number%40create';
import type { Methods as Methods_40e9ba } from './v1.1';
import type { Methods as Methods_krlau1 } from './v1.1/2/_hogeId';
import type { Methods as Methods_1y3r0vu } from './v1.1/2/_hogeId@number';
import type { Methods as Methods_1cro2gr } from './v1.1/2/_hogeId@string/entries.json';
import type { Methods as Methods_1dirya6 } from './v1.1/2/_hogeId@string/test-4';
import type { Methods as Methods_1d36lac } from './v1.1/2/_hogeId@string/test-4/_fugaId';
import type { Methods as Methods_1bmleo0 } from './v1.1/2/_hogeId@string/test-4/fuga aa';
import type { Methods as Methods_1f5sbkp } from './v1.1/3.1';
import type { Methods as Methods_du96ql } from './v1.1/_articleId.json';
import type { Methods as Methods_nek2fa } from './v1.1/users/_userId@string';
import type { Methods as Methods_yyaags } from './v2.0';

/**
 * root comment
 *
 * @remarks
 * root remarks comment
 */
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/';
  const PATH1 = '/foo:bar/';
  const PATH2 = '/v1.1/';
  const PATH3 = '/v1.1/2/';
  const PATH4 = '/entries.json/';
  const PATH5 = '/test-4/';
  const PATH6 = '/test-4/fuga aa/';
  const PATH7 = '/v1.1/3.1/';
  const PATH8 = '/v1.1/users/';
  const PATH9 = '/v2.0/';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    _sampleId_json: (val0: number) => {
      const prefix0 = `/${val0}.json`;

      return {
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_arjhv7['get']['resBody']>(prefix, `${prefix0}${PATH0}`, GET, option).json(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_arjhv7['get']['resBody']>(prefix, `${prefix0}${PATH0}`, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}${PATH0}`,
      };
    },
    foo_bar: {
      _bar_id_json: (val1: string) => {
        const prefix1 = `${PATH1}${val1}.json`;

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_q6gj8c['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).text(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_q6gj8c['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH0}`,
        };
      },
      _fooId_create: (val1: number) => {
        const prefix1 = `${PATH1}${val1}@create`;

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1so6cbd['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).text(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1so6cbd['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH0}`,
        };
      },
      /**
       * @deprecated `_fooId_40create` has been deprecated.
       * Use `_fooId_create` instead
       */
      _fooId_40create: (val1: number) => {
        const prefix1 = `${PATH1}${val1}@create`;

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1so6cbd['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).text(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1so6cbd['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH0}`,
        };
      },
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1x2do5a['get']['resBody']>(prefix, PATH1, GET, option).text(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1x2do5a['get']['resBody']>(prefix, PATH1, GET, option).text().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    /**
     * @deprecated `foo_3Abar` has been deprecated.
     * Use `foo_bar` instead
     */
    foo_3Abar: {
      _bar_id_json: (val1: string) => {
        const prefix1 = `${PATH1}${val1}.json`;

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_q6gj8c['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).text(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_q6gj8c['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH0}`,
        };
      },
      _fooId_create: (val1: number) => {
        const prefix1 = `${PATH1}${val1}@create`;

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1so6cbd['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).text(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1so6cbd['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH0}`,
        };
      },
      /**
       * @deprecated `_fooId_40create` has been deprecated.
       * Use `_fooId_create` instead
       */
      _fooId_40create: (val1: number) => {
        const prefix1 = `${PATH1}${val1}@create`;

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1so6cbd['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).text(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1so6cbd['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH0}`,
        };
      },
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1x2do5a['get']['resBody']>(prefix, PATH1, GET, option).text(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1x2do5a['get']['resBody']>(prefix, PATH1, GET, option).text().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    v1_1: {
      $2: {
        _hogeId: (val2: number | string) => {
          const prefix2 = `${PATH3}${val2}`;

          return {
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_krlau1['get']['resBody']>(prefix, `${prefix2}${PATH0}`, GET, option).json(),
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_krlau1['get']['resBody']>(prefix, `${prefix2}${PATH0}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}${PATH0}`,
          };
        },
        _hogeId_number: (val2: number) => {
          const prefix2 = `${PATH3}${val2}`;

          return {
            get: (option: { query?: Methods_1y3r0vu['get']['query'] | undefined, headers: Methods_1y3r0vu['get']['reqHeaders'], config?: T | undefined }) =>
              fetch<Methods_1y3r0vu['get']['resBody']>(prefix, `${prefix2}${PATH0}`, GET, option).json(),
            $get: (option: { query?: Methods_1y3r0vu['get']['query'] | undefined, headers: Methods_1y3r0vu['get']['reqHeaders'], config?: T | undefined }) =>
              fetch<Methods_1y3r0vu['get']['resBody']>(prefix, `${prefix2}${PATH0}`, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_1y3r0vu['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        _hogeId_string: (val2: string) => {
          const prefix2 = `${PATH3}${val2}`;

          return {
            entries_json: {
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_1cro2gr['get']['resBody']>(prefix, `${prefix2}${PATH4}`, GET, option).json(),
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_1cro2gr['get']['resBody']>(prefix, `${prefix2}${PATH4}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH4}`,
            },
            test_4: {
              /**
               * _fugaId comment
               */
              _fugaId: (val4: number | string) => {
                const prefix4 = `${prefix2}${PATH5}${val4}`;

                return {
                  get: (option?: { query?: Methods_1d36lac['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                    fetch<Methods_1d36lac['get']['resBody']>(prefix, `${prefix4}${PATH0}`, GET, option).json(),
                  $get: (option?: { query?: Methods_1d36lac['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                    fetch<Methods_1d36lac['get']['resBody']>(prefix, `${prefix4}${PATH0}`, GET, option).json().then(r => r.body),
                  post: (option: { body?: Methods_1d36lac['post']['reqBody'] | undefined, query: Methods_1d36lac['post']['query'], config?: T | undefined }) =>
                    fetch<Methods_1d36lac['post']['resBody']>(prefix, `${prefix4}${PATH0}`, POST, option).json(),
                  $post: (option: { body?: Methods_1d36lac['post']['reqBody'] | undefined, query: Methods_1d36lac['post']['query'], config?: T | undefined }) =>
                    fetch<Methods_1d36lac['post']['resBody']>(prefix, `${prefix4}${PATH0}`, POST, option).json().then(r => r.body),
                  put: (option: { query: Methods_1d36lac['put']['query'], config?: T | undefined }) =>
                    fetch<Methods_1d36lac['put']['resBody']>(prefix, `${prefix4}${PATH0}`, PUT, option).json(),
                  $put: (option: { query: Methods_1d36lac['put']['query'], config?: T | undefined }) =>
                    fetch<Methods_1d36lac['put']['resBody']>(prefix, `${prefix4}${PATH0}`, PUT, option).json().then(r => r.body),
                  /**
                   * _fugaId delete method
                   * @returns _fugaId resBody
                   */
                  delete: (option: { query: Methods_1d36lac['delete']['query'], config?: T | undefined }) =>
                    fetch<Methods_1d36lac['delete']['resBody']>(prefix, `${prefix4}${PATH0}`, DELETE, option).json(),
                  /**
                   * _fugaId delete method
                   * @returns _fugaId resBody
                   */
                  $delete: (option: { query: Methods_1d36lac['delete']['query'], config?: T | undefined }) =>
                    fetch<Methods_1d36lac['delete']['resBody']>(prefix, `${prefix4}${PATH0}`, DELETE, option).json().then(r => r.body),
                  $path: (option?: { method?: 'get' | undefined; query: Methods_1d36lac['get']['query'] } | { method: 'post'; query: Methods_1d36lac['post']['query'] } | { method: 'put'; query: Methods_1d36lac['put']['query'] } | { method: 'delete'; query: Methods_1d36lac['delete']['query'] } | undefined) =>
                    `${prefix}${prefix4}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
                };
              },
              fuga_aa: {
                get: (option: { query: Methods_1bmleo0['get']['query'], config?: T | undefined }) =>
                  fetch<Methods_1bmleo0['get']['resBody']>(prefix, `${prefix2}${PATH6}`, GET, option).json(),
                $get: (option: { query: Methods_1bmleo0['get']['query'], config?: T | undefined }) =>
                  fetch<Methods_1bmleo0['get']['resBody']>(prefix, `${prefix2}${PATH6}`, GET, option).json().then(r => r.body),
                post: (option: { body?: Methods_1bmleo0['post']['reqBody'] | undefined, query: Methods_1bmleo0['post']['query'], config?: T | undefined }) =>
                  fetch<Methods_1bmleo0['post']['resBody']>(prefix, `${prefix2}${PATH6}`, POST, option).json(),
                $post: (option: { body?: Methods_1bmleo0['post']['reqBody'] | undefined, query: Methods_1bmleo0['post']['query'], config?: T | undefined }) =>
                  fetch<Methods_1bmleo0['post']['resBody']>(prefix, `${prefix2}${PATH6}`, POST, option).json().then(r => r.body),
                put: (option: { query: Methods_1bmleo0['put']['query'], config?: T | undefined }) =>
                  fetch<Methods_1bmleo0['put']['resBody']>(prefix, `${prefix2}${PATH6}`, PUT, option).json(),
                $put: (option: { query: Methods_1bmleo0['put']['query'], config?: T | undefined }) =>
                  fetch<Methods_1bmleo0['put']['resBody']>(prefix, `${prefix2}${PATH6}`, PUT, option).json().then(r => r.body),
                delete: (option: { body: Methods_1bmleo0['delete']['reqBody'], query: Methods_1bmleo0['delete']['query'], config?: T | undefined }) =>
                  fetch<Methods_1bmleo0['delete']['resBody']>(prefix, `${prefix2}${PATH6}`, DELETE, option).json(),
                $delete: (option: { body: Methods_1bmleo0['delete']['reqBody'], query: Methods_1bmleo0['delete']['query'], config?: T | undefined }) =>
                  fetch<Methods_1bmleo0['delete']['resBody']>(prefix, `${prefix2}${PATH6}`, DELETE, option).json().then(r => r.body),
                $path: (option?: { method?: 'get' | undefined; query: Methods_1bmleo0['get']['query'] } | { method: 'post'; query: Methods_1bmleo0['post']['query'] } | { method: 'put'; query: Methods_1bmleo0['put']['query'] } | { method: 'delete'; query: Methods_1bmleo0['delete']['query'] } | undefined) =>
                  `${prefix}${prefix2}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
              },
              get: (option: { query: Methods_1dirya6['get']['query'], config?: T | undefined }) =>
                fetch(prefix, `${prefix2}${PATH5}`, GET, option).send(),
              $get: (option: { query: Methods_1dirya6['get']['query'], config?: T | undefined }) =>
                fetch(prefix, `${prefix2}${PATH5}`, GET, option).send().then(r => r.body),
              post: (option?: { body?: Methods_1dirya6['post']['reqBody'] | undefined, query?: Methods_1dirya6['post']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch(prefix, `${prefix2}${PATH5}`, POST, option).send(),
              $post: (option?: { body?: Methods_1dirya6['post']['reqBody'] | undefined, query?: Methods_1dirya6['post']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch(prefix, `${prefix2}${PATH5}`, POST, option).send().then(r => r.body),
              put: (option?: { query?: Methods_1dirya6['put']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_1dirya6['put']['resBody']>(prefix, `${prefix2}${PATH5}`, PUT, option).json(),
              $put: (option?: { query?: Methods_1dirya6['put']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods_1dirya6['put']['resBody']>(prefix, `${prefix2}${PATH5}`, PUT, option).json().then(r => r.body),
              delete: (option: { query: Methods_1dirya6['delete']['query'], config?: T | undefined }) =>
                fetch<Methods_1dirya6['delete']['resBody']>(prefix, `${prefix2}${PATH5}`, DELETE, option).json(),
              $delete: (option: { query: Methods_1dirya6['delete']['query'], config?: T | undefined }) =>
                fetch<Methods_1dirya6['delete']['resBody']>(prefix, `${prefix2}${PATH5}`, DELETE, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods_1dirya6['get']['query'] } | { method: 'post'; query: Methods_1dirya6['post']['query'] } | { method: 'put'; query: Methods_1dirya6['put']['query'] } | { method: 'delete'; query: Methods_1dirya6['delete']['query'] } | undefined) =>
                `${prefix}${prefix2}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
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
        get: (option?: { query?: Methods_1f5sbkp['get']['query'] | undefined, headers?: Methods_1f5sbkp['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1f5sbkp['get']['resBody']>(prefix, PATH7, GET, option).json(),
        /**
         * 3.1 get method comment
         * @param option.headers - 3.1 reqHeaders
         */
        $get: (option?: { query?: Methods_1f5sbkp['get']['query'] | undefined, headers?: Methods_1f5sbkp['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_1f5sbkp['get']['resBody']>(prefix, PATH7, GET, option).json().then(r => r.body),
        post: (option: { body?: Methods_1f5sbkp['post']['reqBody'] | undefined, query: Methods_1f5sbkp['post']['query'], config?: T | undefined }) =>
          fetch<Methods_1f5sbkp['post']['resBody']>(prefix, PATH7, POST, option, 'URLSearchParams').json(),
        $post: (option: { body?: Methods_1f5sbkp['post']['reqBody'] | undefined, query: Methods_1f5sbkp['post']['query'], config?: T | undefined }) =>
          fetch<Methods_1f5sbkp['post']['resBody']>(prefix, PATH7, POST, option, 'URLSearchParams').json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_1f5sbkp['get']['query'] } | { method: 'post'; query: Methods_1f5sbkp['post']['query'] } | undefined) =>
          `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      _articleId_json: (val1: number | string) => {
        const prefix1 = `${PATH2}${val1}.json`;

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_du96ql['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_du96ql['get']['resBody']>(prefix, `${prefix1}${PATH0}`, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}${PATH0}`,
        };
      },
      users: {
        _userId: (val2: string) => {
          const prefix2 = `${PATH8}${val2}`;

          return {
            get: (option: { query: Methods_nek2fa['get']['query'], headers: Methods_nek2fa['get']['reqHeaders'], config?: T | undefined }) =>
              fetch<Methods_nek2fa['get']['resBody']>(prefix, `${prefix2}${PATH0}`, GET, option).json(),
            $get: (option: { query: Methods_nek2fa['get']['query'], headers: Methods_nek2fa['get']['reqHeaders'], config?: T | undefined }) =>
              fetch<Methods_nek2fa['get']['resBody']>(prefix, `${prefix2}${PATH0}`, GET, option).json().then(r => r.body),
            post: (option: { query: Methods_nek2fa['post']['query'], config?: T | undefined }) =>
              fetch<Methods_nek2fa['post']['resBody']>(prefix, `${prefix2}${PATH0}`, POST, option).json(),
            $post: (option: { query: Methods_nek2fa['post']['query'], config?: T | undefined }) =>
              fetch<Methods_nek2fa['post']['resBody']>(prefix, `${prefix2}${PATH0}`, POST, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_nek2fa['get']['query'] } | { method: 'post'; query: Methods_nek2fa['post']['query'] } | undefined) =>
              `${prefix}${prefix2}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
      },
      get: (option?: { query?: Methods_40e9ba['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_40e9ba['get']['resBody'], BasicHeaders, Methods_40e9ba['get']['status']>(prefix, PATH2, GET, option).json(),
      $get: (option?: { query?: Methods_40e9ba['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_40e9ba['get']['resBody'], BasicHeaders, Methods_40e9ba['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_40e9ba['get']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    v2_0: {
      get: (option: { query: Methods_yyaags['get']['query'], headers: Methods_yyaags['get']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods_yyaags['get']['resBody'], Methods_yyaags['get']['resHeaders'], Methods_yyaags['get']['status']>(prefix, PATH9, GET, option).text(),
      $get: (option: { query: Methods_yyaags['get']['query'], headers: Methods_yyaags['get']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods_yyaags['get']['resBody'], Methods_yyaags['get']['resHeaders'], Methods_yyaags['get']['status']>(prefix, PATH9, GET, option).text().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_yyaags['get']['query'] } | undefined) =>
        `${prefix}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    /**
     * get method comment
     *
     * @remarks
     * get method remarks comment
     */
    get: (option?: { query?: Methods_by08hd['get']['query'] | undefined, headers?: Methods_by08hd['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody']>(prefix, PATH0, GET, option).formData(),
    /**
     * get method comment
     *
     * @remarks
     * get method remarks comment
     */
    $get: (option?: { query?: Methods_by08hd['get']['query'] | undefined, headers?: Methods_by08hd['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods_by08hd['get']['resBody']>(prefix, PATH0, GET, option).formData().then(r => r.body),
    /**
     * @param option.body - body comment
     */
    post: (option: { body: Methods_by08hd['post']['reqBody'], query: Methods_by08hd['post']['query'], headers?: Methods_by08hd['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody']>(prefix, PATH0, POST, option).arrayBuffer(),
    /**
     * @param option.body - body comment
     */
    $post: (option: { body: Methods_by08hd['post']['reqBody'], query: Methods_by08hd['post']['query'], headers?: Methods_by08hd['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
      fetch<Methods_by08hd['post']['resBody']>(prefix, PATH0, POST, option).arrayBuffer().then(r => r.body),
    /**
     * put method comment
     * @param option.query - query comment
     * @returns returns comment
     */
    put: (option: { query: Methods_by08hd['put']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], Methods_by08hd['put']['resHeaders'], Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json(),
    /**
     * put method comment
     * @param option.query - query comment
     * @returns returns comment
     */
    $put: (option: { query: Methods_by08hd['put']['query'], config?: T | undefined }) =>
      fetch<Methods_by08hd['put']['resBody'], Methods_by08hd['put']['resHeaders'], Methods_by08hd['put']['status']>(prefix, PATH0, PUT, option).json().then(r => r.body),
    delete: (option: { query: Methods_by08hd['delete']['query'], config?: T | undefined }) =>
      fetch<void, Methods_by08hd['delete']['resHeaders'], Methods_by08hd['delete']['status']>(prefix, PATH0, DELETE, option).send(),
    $delete: (option: { query: Methods_by08hd['delete']['query'], config?: T | undefined }) =>
      fetch<void, Methods_by08hd['delete']['resHeaders'], Methods_by08hd['delete']['status']>(prefix, PATH0, DELETE, option).send().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods_by08hd['get']['query'] } | { method: 'post'; query: Methods_by08hd['post']['query'] } | { method: 'put'; query: Methods_by08hd['put']['query'] } | { method: 'delete'; query: Methods_by08hd['delete']['query'] } | undefined) =>
      `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
