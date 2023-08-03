import type { AspidaClient, AspidaResponse, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods0 } from '.';
import type { Methods as Methods1 } from './_sampleId@number.json';
import type { Methods as Methods2 } from './foo%3Abar';
import type { Methods as Methods3 } from './foo%3Abar/_bar_id@string.json';
import type { Methods as Methods4 } from './foo%3Abar/_fooId@number%40create';
import type { Methods as Methods5 } from './polymorphism/get';
import type { Methods as Methods6 } from './polymorphism/users';
import type { Methods as Methods7 } from './polymorphism/users/_userId';
import type { Methods as Methods8 } from './v1.1';
import type { Methods as Methods9 } from './v1.1/2/_hogeId';
import type { Methods as Methods10 } from './v1.1/2/_hogeId@number';
import type { Methods as Methods11 } from './v1.1/2/_hogeId@string/entries.json';
import type { Methods as Methods12 } from './v1.1/2/_hogeId@string/test-4';
import type { Methods as Methods13 } from './v1.1/2/_hogeId@string/test-4/_fugaId';
import type { Methods as Methods14 } from './v1.1/2/_hogeId@string/test-4/fuga aa';
import type { Methods as Methods15 } from './v1.1/3.1';
import type { Methods as Methods16 } from './v1.1/_articleId.json';
import type { Methods as Methods17 } from './v1.1/users/_userId@string';
import type { Methods as Methods18 } from './v2.0';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://example.com/api/' : baseURL).replace(/\/$/, '');
  const PATH0 = '/foo:bar';
  const PATH1 = '/polymorphism/get';
  const PATH2 = '/polymorphism/users';
  const PATH3 = '/v1.1';
  const PATH4 = '/v1.1/2';
  const PATH5 = '/entries.json';
  const PATH6 = '/test-4';
  const PATH7 = '/test-4/fuga aa';
  const PATH8 = '/v1.1/3.1';
  const PATH9 = '/v1.1/users';
  const PATH10 = '/v2.0';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';
  const PATCH = 'PATCH';

  return {
    _sampleId_json: (val0: number) => {
      const prefix0 = `/${val0}.json`;

      return {
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody']>(prefix, prefix0, GET, option).json(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody']>(prefix, prefix0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${prefix0}`,
      };
    },
    foo_bar: {
      _bar_id_json: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}.json`;

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody']>(prefix, prefix1, GET, option).text(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody']>(prefix, prefix1, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      _fooId_create: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}@create`;

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody']>(prefix, prefix1, GET, option).text(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody']>(prefix, prefix1, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * @deprecated `_fooId_40create` has been deprecated.
       * Use `_fooId_create` instead
       */
      _fooId_40create: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}@create`;

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody']>(prefix, prefix1, GET, option).text(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody']>(prefix, prefix1, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH0, GET, option).text(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH0, GET, option).text().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    /**
     * @deprecated `foo_3Abar` has been deprecated.
     * Use `foo_bar` instead
     */
    foo_3Abar: {
      _bar_id_json: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}.json`;

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody']>(prefix, prefix1, GET, option).text(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody']>(prefix, prefix1, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      _fooId_create: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}@create`;

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody']>(prefix, prefix1, GET, option).text(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody']>(prefix, prefix1, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * @deprecated `_fooId_40create` has been deprecated.
       * Use `_fooId_create` instead
       */
      _fooId_40create: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}@create`;

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody']>(prefix, prefix1, GET, option).text(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods4['get']['resBody']>(prefix, prefix1, GET, option).text().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH0, GET, option).text(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH0, GET, option).text().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    polymorphism: {
      get: {
        get: (() => {
          function getRequest(option: { query: Methods5['get']['polymorph'][0]['query'], config?: T | undefined }): Promise<AspidaResponse<Methods5['get']['polymorph'][0]['resBody']>>
          function getRequest(option: { query: Methods5['get']['polymorph'][1]['query'], config?: T | undefined }): Promise<AspidaResponse<Methods5['get']['polymorph'][1]['resBody']>>
          function getRequest(option: any) {
            return fetch(prefix, PATH1, GET, option).json();
          }
          return getRequest;
        })(),
        $get: (() => {
          function $getRequest(option: { query: Methods5['get']['polymorph'][0]['query'], config?: T | undefined }): Promise<Methods5['get']['polymorph'][0]['resBody']>
          function $getRequest(option: { query: Methods5['get']['polymorph'][1]['query'], config?: T | undefined }): Promise<Methods5['get']['polymorph'][1]['resBody']>
          function $getRequest(option: any) {
            return fetch(prefix, PATH1, GET, option).json().then(r => r.body);
          }
          return $getRequest;
        })(),
        $path: () => `${prefix}${PATH1}`,
      },
      users: {
        _userId: (val2: number | string) => {
          const prefix2 = `${PATH2}/${val2}`;

          return {
            get: (() => {
              function getRequest(option: { body: Methods7['get']['polymorph'][0]['reqBody'], config?: T | undefined }): Promise<AspidaResponse<Methods7['get']['polymorph'][0]['resBody'], BasicHeaders, Methods7['get']['polymorph'][0]['status']>>
              function getRequest(option: { body: Methods7['get']['polymorph'][1]['reqBody'], config?: T | undefined }): Promise<AspidaResponse<Methods7['get']['polymorph'][1]['resBody'], Methods7['get']['polymorph'][1]['resHeaders']>>
              function getRequest(option: any) {
                return fetch(prefix, prefix2, GET, option).text();
              }
              return getRequest;
            })(),
            $get: (() => {
              function $getRequest(option: { body: Methods7['get']['polymorph'][0]['reqBody'], config?: T | undefined }): Promise<Methods7['get']['polymorph'][0]['resBody']>
              function $getRequest(option: { body: Methods7['get']['polymorph'][1]['reqBody'], config?: T | undefined }): Promise<Methods7['get']['polymorph'][1]['resBody']>
              function $getRequest(option: any) {
                return fetch(prefix, prefix2, GET, option).text().then(r => r.body);
              }
              return $getRequest;
            })(),
            post: (() => {
              function postRequest(option: { body: Methods7['post']['polymorph'][0]['reqBody'], config?: T | undefined }): Promise<AspidaResponse<Methods7['post']['polymorph'][0]['resBody']>>
              function postRequest(option: { body: Methods7['post']['polymorph'][1]['reqBody'], config?: T | undefined }): Promise<AspidaResponse<Methods7['post']['polymorph'][1]['resBody']>>
              function postRequest(option: any) {
                return fetch(prefix, prefix2, POST, option, 'FormData').json();
              }
              return postRequest;
            })(),
            $post: (() => {
              function $postRequest(option: { body: Methods7['post']['polymorph'][0]['reqBody'], config?: T | undefined }): Promise<Methods7['post']['polymorph'][0]['resBody']>
              function $postRequest(option: { body: Methods7['post']['polymorph'][1]['reqBody'], config?: T | undefined }): Promise<Methods7['post']['polymorph'][1]['resBody']>
              function $postRequest(option: any) {
                return fetch(prefix, prefix2, POST, option, 'FormData').json().then(r => r.body);
              }
              return $postRequest;
            })(),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        get: (() => {
          function getRequest(option: { body: Methods6['get']['polymorph'][0]['reqBody'], config?: T | undefined }): Promise<AspidaResponse<Methods6['get']['polymorph'][0]['resBody']>>
          function getRequest(option: { body: Methods6['get']['polymorph'][1]['reqBody'], config?: T | undefined }): Promise<AspidaResponse<Methods6['get']['polymorph'][1]['resBody']>>
          function getRequest(option: any) {
            return fetch(prefix, PATH2, GET, option).json();
          }
          return getRequest;
        })(),
        $get: (() => {
          function $getRequest(option: { body: Methods6['get']['polymorph'][0]['reqBody'], config?: T | undefined }): Promise<Methods6['get']['polymorph'][0]['resBody']>
          function $getRequest(option: { body: Methods6['get']['polymorph'][1]['reqBody'], config?: T | undefined }): Promise<Methods6['get']['polymorph'][1]['resBody']>
          function $getRequest(option: any) {
            return fetch(prefix, PATH2, GET, option).json().then(r => r.body);
          }
          return $getRequest;
        })(),
        post: (() => {
          function postRequest(option: { body: Methods6['post']['polymorph'][0]['reqBody'], query?: Methods6['post']['query'] | undefined, config?: T | undefined }): Promise<AspidaResponse<Methods6['post']['polymorph'][0]['resBody']>>
          function postRequest(option: { body: Methods6['post']['polymorph'][1]['reqBody'], query?: Methods6['post']['query'] | undefined, config?: T | undefined }): Promise<AspidaResponse<Methods6['post']['polymorph'][1]['resBody']>>
          function postRequest(option?: { query?: Methods6['post']['query'] | undefined, config?: T | undefined } | undefined): Promise<AspidaResponse>
          function postRequest(option: any) {
            return fetch(prefix, PATH2, POST, option).json();
          }
          return postRequest;
        })(),
        $post: (() => {
          function $postRequest(option: { body: Methods6['post']['polymorph'][0]['reqBody'], query?: Methods6['post']['query'] | undefined, config?: T | undefined }): Promise<Methods6['post']['polymorph'][0]['resBody']>
          function $postRequest(option: { body: Methods6['post']['polymorph'][1]['reqBody'], query?: Methods6['post']['query'] | undefined, config?: T | undefined }): Promise<Methods6['post']['polymorph'][1]['resBody']>
          function $postRequest(option?: { query?: Methods6['post']['query'] | undefined, config?: T | undefined } | undefined): Promise<void>
          function $postRequest(option: any) {
            return fetch(prefix, PATH2, POST, option).json().then(r => r.body);
          }
          return $postRequest;
        })(),
        patch: (option: { body: Methods6['patch']['reqBody'], config?: T | undefined }) =>
          fetch(prefix, PATH2, PATCH, option, 'FormData').send(),
        $patch: (option: { body: Methods6['patch']['reqBody'], config?: T | undefined }) =>
          fetch(prefix, PATH2, PATCH, option, 'FormData').send().then(r => r.body),
        put: (() => {
          function putRequest(option: { body: Methods6['put']['polymorph'][0]['reqBody'], query: Methods6['put']['polymorph'][0]['query'], config?: T | undefined }): Promise<AspidaResponse<Methods6['put']['resBody']>>
          function putRequest(option: { body: Methods6['put']['polymorph'][1]['reqBody'], query: Methods6['put']['polymorph'][1]['query'], config?: T | undefined }): Promise<AspidaResponse<Methods6['put']['resBody']>>
          function putRequest(option: any) {
            return fetch(prefix, PATH2, PUT, option).json();
          }
          return putRequest;
        })(),
        $put: (() => {
          function $putRequest(option: { body: Methods6['put']['polymorph'][0]['reqBody'], query: Methods6['put']['polymorph'][0]['query'], config?: T | undefined }): Promise<Methods6['put']['resBody']>
          function $putRequest(option: { body: Methods6['put']['polymorph'][1]['reqBody'], query: Methods6['put']['polymorph'][1]['query'], config?: T | undefined }): Promise<Methods6['put']['resBody']>
          function $putRequest(option: any) {
            return fetch(prefix, PATH2, PUT, option).json().then(r => r.body);
          }
          return $putRequest;
        })(),
        delete: (() => {
          function deleteRequest(option: { body?: Methods6['delete']['reqBody'] | undefined, headers: Methods6['delete']['polymorph'][0]['reqHeaders'], config?: T | undefined }): Promise<AspidaResponse<void, Methods6['delete']['polymorph'][0]['resHeaders']>>
          function deleteRequest(option?: { body?: Methods6['delete']['reqBody'] | undefined, config?: T | undefined } | undefined): Promise<AspidaResponse<void, BasicHeaders, Methods6['delete']['polymorph'][1]['status']>>
          function deleteRequest(option: any) {
            return fetch(prefix, PATH2, DELETE, option).send();
          }
          return deleteRequest;
        })(),
        $delete: (() => {
          function $deleteRequest(option: { body?: Methods6['delete']['reqBody'] | undefined, headers: Methods6['delete']['polymorph'][0]['reqHeaders'], config?: T | undefined }): Promise<void>
          function $deleteRequest(option?: { body?: Methods6['delete']['reqBody'] | undefined, config?: T | undefined } | undefined): Promise<void>
          function $deleteRequest(option: any) {
            return fetch(prefix, PATH2, DELETE, option).send().then(r => r.body);
          }
          return $deleteRequest;
        })(),
        $path: (option?: { method: 'post'; query: Methods6['post']['query'] } | undefined) =>
          `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
    v1_1: {
      $2: {
        _hogeId: (val2: number | string) => {
          const prefix2 = `${PATH4}/${val2}`;

          return {
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods9['get']['resBody']>(prefix, prefix2, GET, option).json(),
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods9['get']['resBody']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        _hogeId_number: (val2: number) => {
          const prefix2 = `${PATH4}/${val2}`;

          return {
            get: (option: { query?: Methods10['get']['query'] | undefined, headers: Methods10['get']['reqHeaders'], config?: T | undefined }) =>
              fetch<Methods10['get']['resBody']>(prefix, prefix2, GET, option).json(),
            $get: (option: { query?: Methods10['get']['query'] | undefined, headers: Methods10['get']['reqHeaders'], config?: T | undefined }) =>
              fetch<Methods10['get']['resBody']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods10['get']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
        _hogeId_string: (val2: string) => {
          const prefix2 = `${PATH4}/${val2}`;

          return {
            entries_json: {
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods11['get']['resBody']>(prefix, `${prefix2}${PATH5}`, GET, option).json(),
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods11['get']['resBody']>(prefix, `${prefix2}${PATH5}`, GET, option).json().then(r => r.body),
              $path: () => `${prefix}${prefix2}${PATH5}`,
            },
            test_4: {
              _fugaId: (val4: number | string) => {
                const prefix4 = `${prefix2}${PATH6}/${val4}`;

                return {
                  get: (option?: { query?: Methods13['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                    fetch<Methods13['get']['resBody']>(prefix, prefix4, GET, option).json(),
                  $get: (option?: { query?: Methods13['get']['query'] | undefined, config?: T | undefined } | undefined) =>
                    fetch<Methods13['get']['resBody']>(prefix, prefix4, GET, option).json().then(r => r.body),
                  post: (option: { body?: Methods13['post']['reqBody'] | undefined, query: Methods13['post']['query'], config?: T | undefined }) =>
                    fetch<Methods13['post']['resBody']>(prefix, prefix4, POST, option).json(),
                  $post: (option: { body?: Methods13['post']['reqBody'] | undefined, query: Methods13['post']['query'], config?: T | undefined }) =>
                    fetch<Methods13['post']['resBody']>(prefix, prefix4, POST, option).json().then(r => r.body),
                  put: (option: { query: Methods13['put']['query'], config?: T | undefined }) =>
                    fetch<Methods13['put']['resBody']>(prefix, prefix4, PUT, option).json(),
                  $put: (option: { query: Methods13['put']['query'], config?: T | undefined }) =>
                    fetch<Methods13['put']['resBody']>(prefix, prefix4, PUT, option).json().then(r => r.body),
                  delete: (option: { query: Methods13['delete']['query'], config?: T | undefined }) =>
                    fetch<Methods13['delete']['resBody']>(prefix, prefix4, DELETE, option).json(),
                  $delete: (option: { query: Methods13['delete']['query'], config?: T | undefined }) =>
                    fetch<Methods13['delete']['resBody']>(prefix, prefix4, DELETE, option).json().then(r => r.body),
                  $path: (option?: { method?: 'get' | undefined; query: Methods13['get']['query'] } | { method: 'post'; query: Methods13['post']['query'] } | { method: 'put'; query: Methods13['put']['query'] } | { method: 'delete'; query: Methods13['delete']['query'] } | undefined) =>
                    `${prefix}${prefix4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
                };
              },
              fuga_aa: {
                get: (option: { query: Methods14['get']['query'], config?: T | undefined }) =>
                  fetch<Methods14['get']['resBody']>(prefix, `${prefix2}${PATH7}`, GET, option).json(),
                $get: (option: { query: Methods14['get']['query'], config?: T | undefined }) =>
                  fetch<Methods14['get']['resBody']>(prefix, `${prefix2}${PATH7}`, GET, option).json().then(r => r.body),
                post: (option: { body?: Methods14['post']['reqBody'] | undefined, query: Methods14['post']['query'], config?: T | undefined }) =>
                  fetch<Methods14['post']['resBody']>(prefix, `${prefix2}${PATH7}`, POST, option).json(),
                $post: (option: { body?: Methods14['post']['reqBody'] | undefined, query: Methods14['post']['query'], config?: T | undefined }) =>
                  fetch<Methods14['post']['resBody']>(prefix, `${prefix2}${PATH7}`, POST, option).json().then(r => r.body),
                put: (option: { query: Methods14['put']['query'], config?: T | undefined }) =>
                  fetch<Methods14['put']['resBody']>(prefix, `${prefix2}${PATH7}`, PUT, option).json(),
                $put: (option: { query: Methods14['put']['query'], config?: T | undefined }) =>
                  fetch<Methods14['put']['resBody']>(prefix, `${prefix2}${PATH7}`, PUT, option).json().then(r => r.body),
                delete: (option: { body: Methods14['delete']['reqBody'], query: Methods14['delete']['query'], config?: T | undefined }) =>
                  fetch<Methods14['delete']['resBody']>(prefix, `${prefix2}${PATH7}`, DELETE, option).json(),
                $delete: (option: { body: Methods14['delete']['reqBody'], query: Methods14['delete']['query'], config?: T | undefined }) =>
                  fetch<Methods14['delete']['resBody']>(prefix, `${prefix2}${PATH7}`, DELETE, option).json().then(r => r.body),
                $path: (option?: { method?: 'get' | undefined; query: Methods14['get']['query'] } | { method: 'post'; query: Methods14['post']['query'] } | { method: 'put'; query: Methods14['put']['query'] } | { method: 'delete'; query: Methods14['delete']['query'] } | undefined) =>
                  `${prefix}${prefix2}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
              },
              get: (option: { query: Methods12['get']['query'], config?: T | undefined }) =>
                fetch(prefix, `${prefix2}${PATH6}`, GET, option).send(),
              $get: (option: { query: Methods12['get']['query'], config?: T | undefined }) =>
                fetch(prefix, `${prefix2}${PATH6}`, GET, option).send().then(r => r.body),
              post: (option?: { body?: Methods12['post']['reqBody'] | undefined, query?: Methods12['post']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch(prefix, `${prefix2}${PATH6}`, POST, option).send(),
              $post: (option?: { body?: Methods12['post']['reqBody'] | undefined, query?: Methods12['post']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch(prefix, `${prefix2}${PATH6}`, POST, option).send().then(r => r.body),
              put: (option?: { query?: Methods12['put']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods12['put']['resBody']>(prefix, `${prefix2}${PATH6}`, PUT, option).json(),
              $put: (option?: { query?: Methods12['put']['query'] | undefined, config?: T | undefined } | undefined) =>
                fetch<Methods12['put']['resBody']>(prefix, `${prefix2}${PATH6}`, PUT, option).json().then(r => r.body),
              delete: (option: { query: Methods12['delete']['query'], config?: T | undefined }) =>
                fetch<Methods12['delete']['resBody']>(prefix, `${prefix2}${PATH6}`, DELETE, option).json(),
              $delete: (option: { query: Methods12['delete']['query'], config?: T | undefined }) =>
                fetch<Methods12['delete']['resBody']>(prefix, `${prefix2}${PATH6}`, DELETE, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods12['get']['query'] } | { method: 'post'; query: Methods12['post']['query'] } | { method: 'put'; query: Methods12['put']['query'] } | { method: 'delete'; query: Methods12['delete']['query'] } | undefined) =>
                `${prefix}${prefix2}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
            },
          };
        },
      },
      $3_1: {
        get: (option?: { query?: Methods15['get']['query'] | undefined, headers?: Methods15['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods15['get']['resBody']>(prefix, PATH8, GET, option).json(),
        $get: (option?: { query?: Methods15['get']['query'] | undefined, headers?: Methods15['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods15['get']['resBody']>(prefix, PATH8, GET, option).json().then(r => r.body),
        post: (option: { body?: Methods15['post']['reqBody'] | undefined, query: Methods15['post']['query'], config?: T | undefined }) =>
          fetch<Methods15['post']['resBody']>(prefix, PATH8, POST, option, 'URLSearchParams').json(),
        $post: (option: { body?: Methods15['post']['reqBody'] | undefined, query: Methods15['post']['query'], config?: T | undefined }) =>
          fetch<Methods15['post']['resBody']>(prefix, PATH8, POST, option, 'URLSearchParams').json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods15['get']['query'] } | { method: 'post'; query: Methods15['post']['query'] } | undefined) =>
          `${prefix}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
      _articleId_json: (val1: number | string) => {
        const prefix1 = `${PATH3}/${val1}.json`;

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods16['get']['resBody']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods16['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      users: {
        _userId: (val2: string) => {
          const prefix2 = `${PATH9}/${val2}`;

          return {
            get: (option: { query: Methods17['get']['query'], headers: Methods17['get']['reqHeaders'], config?: T | undefined }) =>
              fetch<Methods17['get']['resBody']>(prefix, prefix2, GET, option).json(),
            $get: (option: { query: Methods17['get']['query'], headers: Methods17['get']['reqHeaders'], config?: T | undefined }) =>
              fetch<Methods17['get']['resBody']>(prefix, prefix2, GET, option).json().then(r => r.body),
            post: (option: { query: Methods17['post']['query'], config?: T | undefined }) =>
              fetch<Methods17['post']['resBody']>(prefix, prefix2, POST, option).json(),
            $post: (option: { query: Methods17['post']['query'], config?: T | undefined }) =>
              fetch<Methods17['post']['resBody']>(prefix, prefix2, POST, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods17['get']['query'] } | { method: 'post'; query: Methods17['post']['query'] } | undefined) =>
              `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          };
        },
      },
      get: (option?: { query?: Methods8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, PATH3, GET, option).json(),
      $get: (option?: { query?: Methods8['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods8['get']['query'] } | undefined) =>
        `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    v2_0: {
      get: (option: { query: Methods18['get']['query'], headers: Methods18['get']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods18['get']['resBody'], Methods18['get']['resHeaders'], Methods18['get']['status']>(prefix, PATH10, GET, option).text(),
      $get: (option: { query: Methods18['get']['query'], headers: Methods18['get']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods18['get']['resBody'], Methods18['get']['resHeaders'], Methods18['get']['status']>(prefix, PATH10, GET, option).text().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods18['get']['query'] } | undefined) =>
        `${prefix}${PATH10}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    get: (option?: { query?: Methods0['get']['query'] | undefined, headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody']>(prefix, '', GET, option).formData(),
    $get: (option?: { query?: Methods0['get']['query'] | undefined, headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody']>(prefix, '', GET, option).formData().then(r => r.body),
    post: (option: { body: Methods0['post']['reqBody'], query: Methods0['post']['query'], headers?: Methods0['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
      fetch<Methods0['post']['resBody']>(prefix, '', POST, option).arrayBuffer(),
    $post: (option: { body: Methods0['post']['reqBody'], query: Methods0['post']['query'], headers?: Methods0['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
      fetch<Methods0['post']['resBody']>(prefix, '', POST, option).arrayBuffer().then(r => r.body),
    put: (option: { query: Methods0['put']['query'], config?: T | undefined }) =>
      fetch<Methods0['put']['resBody'], Methods0['put']['resHeaders'], Methods0['put']['status']>(prefix, '', PUT, option).json(),
    $put: (option: { query: Methods0['put']['query'], config?: T | undefined }) =>
      fetch<Methods0['put']['resBody'], Methods0['put']['resHeaders'], Methods0['put']['status']>(prefix, '', PUT, option).json().then(r => r.body),
    delete: (option: { query: Methods0['delete']['query'], config?: T | undefined }) =>
      fetch<void, Methods0['delete']['resHeaders'], Methods0['delete']['status']>(prefix, '', DELETE, option).send(),
    $delete: (option: { query: Methods0['delete']['query'], config?: T | undefined }) =>
      fetch<void, Methods0['delete']['resHeaders'], Methods0['delete']['status']>(prefix, '', DELETE, option).send().then(r => r.body),
    $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | { method: 'post'; query: Methods0['post']['query'] } | { method: 'put'; query: Methods0['put']['query'] } | { method: 'delete'; query: Methods0['delete']['query'] } | undefined) =>
      `${prefix}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
