/* eslint-disable */
import { AspidaClient } from 'aspida'
import { Methods as Methods0 } from './api/stream/v1/stories/index'
import { Methods as Methods1 } from './api/stream/v1/stories/_storyId'
import { Methods as Methods2 } from './api/v1/me'
import { Methods as Methods3 } from './api/v1/mixes/index'
import { Methods as Methods4 } from './api/v1/mixes/_id'
import { Methods as Methods5 } from './api/v1/mixes/_mixId/cards'
import { Methods as Methods6 } from './api/v1/mixes/_mixId/url'
import { Methods as Methods7 } from './api/v1/parse/index'
import { Methods as Methods8 } from './api/v1/parse/image'
import { Methods as Methods9 } from './api/v1/token'
import { Methods as Methods10 } from './api/v3/2fa'
import { Methods as Methods11 } from './api/v3/channels/index'
import { Methods as Methods12 } from './api/v3/channels/_channelId/index'
import { Methods as Methods13 } from './api/v3/channels/_channelId/chats/index'
import { Methods as Methods14 } from './api/v3/channels/_channelId/chats/_chatId/index'
import { Methods as Methods15 } from './api/v3/channels/_channelId/chats/_chatId/items/index'
import { Methods as Methods16 } from './api/v3/channels/_channelId/chats/_chatId/items/_itemId'
import { Methods as Methods17 } from './api/v3/channels/_channelId/chats/_chatId/items/audio'
import { Methods as Methods18 } from './api/v3/channels/_channelId/chats/_chatId/items/image'
import { Methods as Methods19 } from './api/v3/channels/_channelId/chats/_chatId/items/video'
import { Methods as Methods20 } from './api/v3/channels/_channelId/chats/_chatId/itemslist'
import { Methods as Methods21 } from './api/v3/channels/_channelId/chats/_chatId/users/index'
import { Methods as Methods22 } from './api/v3/channels/_channelId/chats/_chatId/users/remove'
import { Methods as Methods23 } from './api/v3/channels/_channelId/news-feed'
import { Methods as Methods24 } from './api/v3/channels/_channelId/notifications'
import { Methods as Methods25 } from './api/v3/chats/_chatId/items/index'
import { Methods as Methods26 } from './api/v3/chats/_chatId/items/_itemId'
import { Methods as Methods27 } from './api/v3/chats/_chatId/items/audio'
import { Methods as Methods28 } from './api/v3/chats/_chatId/items/image'
import { Methods as Methods29 } from './api/v3/chats/_chatId/items/video'
import { Methods as Methods30 } from './api/v3/chats/keys'
import { Methods as Methods31 } from './api/v3/extension/audio'
import { Methods as Methods32 } from './api/v3/extension/image'
import { Methods as Methods33 } from './api/v3/extension/parse'
import { Methods as Methods34 } from './api/v3/extension/story/_storyId/index'
import { Methods as Methods35 } from './api/v3/extension/story/_storyId/audio'
import { Methods as Methods36 } from './api/v3/extension/story/_storyId/image'
import { Methods as Methods37 } from './api/v3/extension/story/_storyId/video'
import { Methods as Methods38 } from './api/v3/extension/video'
import { Methods as Methods39 } from './api/v3/fcm_token'
import { Methods as Methods40 } from './api/v3/info'
import { Methods as Methods41 } from './api/v3/login'
import { Methods as Methods42 } from './api/v3/logout'
import { Methods as Methods43 } from './api/v3/me'
import { Methods as Methods44 } from './api/v3/organisation/index'
import { Methods as Methods45 } from './api/v3/organisation/users'
import { Methods as Methods46 } from './api/v3/stories/_storyId/items/index'
import { Methods as Methods47 } from './api/v3/stories/_storyId/items/_itemId/index'
import { Methods as Methods48 } from './api/v3/stories/_storyId/items/_itemId/reaction'
import { Methods as Methods49 } from './api/v3/user/index'
import { Methods as Methods50 } from './api/v3/user/_userId'
import { Methods as Methods51 } from './api/v3/user/profile'

const api = <T>(client: AspidaClient<T>) => {
  const prefix = (client.baseURL === undefined ? '' : client.baseURL).replace(/\/$/, '')

  return {
    api: {
      stream: {
        v1: {
          stories: {
            _storyId: (val0: number | string) => ({
              get: (option: { query: Methods1['get']['query'], config?: T }) =>
                client.fetch<Methods1['get']['resBody']>(prefix, `/api/stream/v1/stories/${val0}`, 'GET', option).json(),
              $get: async (option: { query: Methods1['get']['query'], config?: T }) =>
                (await client.fetch<Methods1['get']['resBody']>(prefix, `/api/stream/v1/stories/${val0}`, 'GET', option).json()).data
            }),
            get: (option: { query: Methods0['get']['query'], config?: T }) =>
              client.fetch<Methods0['get']['resBody']>(prefix, '/api/stream/v1/stories', 'GET', option).json(),
            $get: async (option: { query: Methods0['get']['query'], config?: T }) =>
              (await client.fetch<Methods0['get']['resBody']>(prefix, '/api/stream/v1/stories', 'GET', option).json()).data
          }
        }
      },
      v1: {
        me: {
          get: (option?: { config?: T }) =>
            client.fetch<Methods2['get']['resBody']>(prefix, '/api/v1/me', 'GET', option).json(),
          $get: async (option?: { config?: T }) =>
            (await client.fetch<Methods2['get']['resBody']>(prefix, '/api/v1/me', 'GET', option).json()).data
        },
        mixes: {
          _id: (val1: number | string) => ({
            put: (option?: { data?: Methods4['put']['reqBody'], config?: T }) =>
              client.fetch<void>(prefix, `/api/v1/mixes/${val1}`, 'PUT', option).send(),
            $put: async (option?: { data?: Methods4['put']['reqBody'], config?: T }) =>
              (await client.fetch<void>(prefix, `/api/v1/mixes/${val1}`, 'PUT', option).send()).data
          }),
          _mixId: (val2: number | string) => ({
            cards: {
              post: (option?: { data?: Methods5['post']['reqBody'], config?: T }) =>
                client.fetch<void>(prefix, `/api/v1/mixes/${val2}/cards`, 'POST', option).send(),
              $post: async (option?: { data?: Methods5['post']['reqBody'], config?: T }) =>
                (await client.fetch<void>(prefix, `/api/v1/mixes/${val2}/cards`, 'POST', option).send()).data
            },
            url: {
              post: (option?: { data?: Methods6['post']['reqBody'], config?: T }) =>
                client.fetch<void>(prefix, `/api/v1/mixes/${val2}/url`, 'POST', option).send(),
              $post: async (option?: { data?: Methods6['post']['reqBody'], config?: T }) =>
                (await client.fetch<void>(prefix, `/api/v1/mixes/${val2}/url`, 'POST', option).send()).data
            }
          }),
          get: (option?: { config?: T }) =>
            client.fetch<Methods3['get']['resBody']>(prefix, '/api/v1/mixes', 'GET', option).json(),
          $get: async (option?: { config?: T }) =>
            (await client.fetch<Methods3['get']['resBody']>(prefix, '/api/v1/mixes', 'GET', option).json()).data,
          post: (option?: { data?: Methods3['post']['reqBody'], config?: T }) =>
            client.fetch<Methods3['post']['resBody']>(prefix, '/api/v1/mixes', 'POST', option).json(),
          $post: async (option?: { data?: Methods3['post']['reqBody'], config?: T }) =>
            (await client.fetch<Methods3['post']['resBody']>(prefix, '/api/v1/mixes', 'POST', option).json()).data
        },
        parse: {
          image: {
            post: (option?: { data?: Methods8['post']['reqBody'], config?: T }) =>
              client.fetch<Methods8['post']['resBody']>(prefix, '/api/v1/parse/image', 'POST', option, 'FormData').json(),
            $post: async (option?: { data?: Methods8['post']['reqBody'], config?: T }) =>
              (await client.fetch<Methods8['post']['resBody']>(prefix, '/api/v1/parse/image', 'POST', option, 'FormData').json()).data
          },
          post: (option?: { data?: Methods7['post']['reqBody'], config?: T }) =>
            client.fetch<Methods7['post']['resBody']>(prefix, '/api/v1/parse', 'POST', option).json(),
          $post: async (option?: { data?: Methods7['post']['reqBody'], config?: T }) =>
            (await client.fetch<Methods7['post']['resBody']>(prefix, '/api/v1/parse', 'POST', option).json()).data
        },
        token: {
          post: (option?: { data?: Methods9['post']['reqBody'], config?: T }) =>
            client.fetch<Methods9['post']['resBody']>(prefix, '/api/v1/token', 'POST', option).json(),
          $post: async (option?: { data?: Methods9['post']['reqBody'], config?: T }) =>
            (await client.fetch<Methods9['post']['resBody']>(prefix, '/api/v1/token', 'POST', option).json()).data
        }
      },
      v3: {
        $2fa: {
          post: (option: { data: Methods10['post']['reqBody'], headers?: Methods10['post']['reqHeaders'], config?: T }) =>
            client.fetch<Methods10['post']['resBody']>(prefix, '/api/v3/2fa', 'POST', option).json(),
          $post: async (option: { data: Methods10['post']['reqBody'], headers?: Methods10['post']['reqHeaders'], config?: T }) =>
            (await client.fetch<Methods10['post']['resBody']>(prefix, '/api/v3/2fa', 'POST', option).json()).data
        },
        channels: {
          _channelId: (val3: number | string) => ({
            chats: {
              _chatId: (val4: number | string) => ({
                items: {
                  _itemId: (val5: number | string) => ({
                    post: (option?: { data?: Methods16['post']['reqBody'], headers?: Methods16['post']['reqHeaders'], config?: T }) =>
                      client.fetch<Methods16['post']['resBody']>(prefix, `/api/v3/channels/${val3}/chats/${val4}/items/${val5}`, 'POST', option).json(),
                    $post: async (option?: { data?: Methods16['post']['reqBody'], headers?: Methods16['post']['reqHeaders'], config?: T }) =>
                      (await client.fetch<Methods16['post']['resBody']>(prefix, `/api/v3/channels/${val3}/chats/${val4}/items/${val5}`, 'POST', option).json()).data
                  }),
                  audio: {
                    post: (option?: { data?: Methods17['post']['reqBody'], headers?: Methods17['post']['reqHeaders'], config?: T }) =>
                      client.fetch<Methods17['post']['resBody']>(prefix, `/api/v3/channels/${val3}/chats/${val4}/items/audio`, 'POST', option, 'FormData').json(),
                    $post: async (option?: { data?: Methods17['post']['reqBody'], headers?: Methods17['post']['reqHeaders'], config?: T }) =>
                      (await client.fetch<Methods17['post']['resBody']>(prefix, `/api/v3/channels/${val3}/chats/${val4}/items/audio`, 'POST', option, 'FormData').json()).data
                  },
                  image: {
                    post: (option?: { data?: Methods18['post']['reqBody'], headers?: Methods18['post']['reqHeaders'], config?: T }) =>
                      client.fetch<Methods18['post']['resBody']>(prefix, `/api/v3/channels/${val3}/chats/${val4}/items/image`, 'POST', option, 'FormData').json(),
                    $post: async (option?: { data?: Methods18['post']['reqBody'], headers?: Methods18['post']['reqHeaders'], config?: T }) =>
                      (await client.fetch<Methods18['post']['resBody']>(prefix, `/api/v3/channels/${val3}/chats/${val4}/items/image`, 'POST', option, 'FormData').json()).data
                  },
                  video: {
                    post: (option?: { data?: Methods19['post']['reqBody'], headers?: Methods19['post']['reqHeaders'], config?: T }) =>
                      client.fetch<Methods19['post']['resBody']>(prefix, `/api/v3/channels/${val3}/chats/${val4}/items/video`, 'POST', option, 'FormData').json(),
                    $post: async (option?: { data?: Methods19['post']['reqBody'], headers?: Methods19['post']['reqHeaders'], config?: T }) =>
                      (await client.fetch<Methods19['post']['resBody']>(prefix, `/api/v3/channels/${val3}/chats/${val4}/items/video`, 'POST', option, 'FormData').json()).data
                  },
                  get: (option?: { query?: Methods15['get']['query'], headers?: Methods15['get']['reqHeaders'], config?: T }) =>
                    client.fetch<Methods15['get']['resBody']>(prefix, `/api/v3/channels/${val3}/chats/${val4}/items`, 'GET', option).json(),
                  $get: async (option?: { query?: Methods15['get']['query'], headers?: Methods15['get']['reqHeaders'], config?: T }) =>
                    (await client.fetch<Methods15['get']['resBody']>(prefix, `/api/v3/channels/${val3}/chats/${val4}/items`, 'GET', option).json()).data,
                  post: (option: { data: Methods15['post']['reqBody'], headers?: Methods15['post']['reqHeaders'], config?: T }) =>
                    client.fetch<Methods15['post']['resBody']>(prefix, `/api/v3/channels/${val3}/chats/${val4}/items`, 'POST', option).json(),
                  $post: async (option: { data: Methods15['post']['reqBody'], headers?: Methods15['post']['reqHeaders'], config?: T }) =>
                    (await client.fetch<Methods15['post']['resBody']>(prefix, `/api/v3/channels/${val3}/chats/${val4}/items`, 'POST', option).json()).data
                },
                itemslist: {
                  get: (option: { query: Methods20['get']['query'], headers?: Methods20['get']['reqHeaders'], config?: T }) =>
                    client.fetch<Methods20['get']['resBody']>(prefix, `/api/v3/channels/${val3}/chats/${val4}/itemslist`, 'GET', option).json(),
                  $get: async (option: { query: Methods20['get']['query'], headers?: Methods20['get']['reqHeaders'], config?: T }) =>
                    (await client.fetch<Methods20['get']['resBody']>(prefix, `/api/v3/channels/${val3}/chats/${val4}/itemslist`, 'GET', option).json()).data
                },
                users: {
                  remove: {
                    post: (option: { data: Methods22['post']['reqBody'], headers?: Methods22['post']['reqHeaders'], config?: T }) =>
                      client.fetch<void>(prefix, `/api/v3/channels/${val3}/chats/${val4}/users/remove`, 'POST', option).send(),
                    $post: async (option: { data: Methods22['post']['reqBody'], headers?: Methods22['post']['reqHeaders'], config?: T }) =>
                      (await client.fetch<void>(prefix, `/api/v3/channels/${val3}/chats/${val4}/users/remove`, 'POST', option).send()).data
                  },
                  get: (option?: { headers?: Methods21['get']['reqHeaders'], config?: T }) =>
                    client.fetch<Methods21['get']['resBody']>(prefix, `/api/v3/channels/${val3}/chats/${val4}/users`, 'GET', option).json(),
                  $get: async (option?: { headers?: Methods21['get']['reqHeaders'], config?: T }) =>
                    (await client.fetch<Methods21['get']['resBody']>(prefix, `/api/v3/channels/${val3}/chats/${val4}/users`, 'GET', option).json()).data,
                  post: (option: { data: Methods21['post']['reqBody'], headers?: Methods21['post']['reqHeaders'], config?: T }) =>
                    client.fetch<void>(prefix, `/api/v3/channels/${val3}/chats/${val4}/users`, 'POST', option).send(),
                  $post: async (option: { data: Methods21['post']['reqBody'], headers?: Methods21['post']['reqHeaders'], config?: T }) =>
                    (await client.fetch<void>(prefix, `/api/v3/channels/${val3}/chats/${val4}/users`, 'POST', option).send()).data,
                  put: (option: { data: Methods21['put']['reqBody'], headers?: Methods21['put']['reqHeaders'], config?: T }) =>
                    client.fetch<void>(prefix, `/api/v3/channels/${val3}/chats/${val4}/users`, 'PUT', option).send(),
                  $put: async (option: { data: Methods21['put']['reqBody'], headers?: Methods21['put']['reqHeaders'], config?: T }) =>
                    (await client.fetch<void>(prefix, `/api/v3/channels/${val3}/chats/${val4}/users`, 'PUT', option).send()).data
                },
                get: (option?: { headers?: Methods14['get']['reqHeaders'], config?: T }) =>
                  client.fetch<Methods14['get']['resBody']>(prefix, `/api/v3/channels/${val3}/chats/${val4}`, 'GET', option).json(),
                $get: async (option?: { headers?: Methods14['get']['reqHeaders'], config?: T }) =>
                  (await client.fetch<Methods14['get']['resBody']>(prefix, `/api/v3/channels/${val3}/chats/${val4}`, 'GET', option).json()).data,
                put: (option: { data: Methods14['put']['reqBody'], headers?: Methods14['put']['reqHeaders'], config?: T }) =>
                  client.fetch<void>(prefix, `/api/v3/channels/${val3}/chats/${val4}`, 'PUT', option).send(),
                $put: async (option: { data: Methods14['put']['reqBody'], headers?: Methods14['put']['reqHeaders'], config?: T }) =>
                  (await client.fetch<void>(prefix, `/api/v3/channels/${val3}/chats/${val4}`, 'PUT', option).send()).data,
                delete: (option?: { headers?: Methods14['delete']['reqHeaders'], config?: T }) =>
                  client.fetch<void>(prefix, `/api/v3/channels/${val3}/chats/${val4}`, 'DELETE', option).send(),
                $delete: async (option?: { headers?: Methods14['delete']['reqHeaders'], config?: T }) =>
                  (await client.fetch<void>(prefix, `/api/v3/channels/${val3}/chats/${val4}`, 'DELETE', option).send()).data
              }),
              get: (option?: { headers?: Methods13['get']['reqHeaders'], config?: T }) =>
                client.fetch<Methods13['get']['resBody']>(prefix, `/api/v3/channels/${val3}/chats`, 'GET', option).json(),
              $get: async (option?: { headers?: Methods13['get']['reqHeaders'], config?: T }) =>
                (await client.fetch<Methods13['get']['resBody']>(prefix, `/api/v3/channels/${val3}/chats`, 'GET', option).json()).data,
              post: (option: { data: Methods13['post']['reqBody'], headers?: Methods13['post']['reqHeaders'], config?: T }) =>
                client.fetch<Methods13['post']['resBody']>(prefix, `/api/v3/channels/${val3}/chats`, 'POST', option).json(),
              $post: async (option: { data: Methods13['post']['reqBody'], headers?: Methods13['post']['reqHeaders'], config?: T }) =>
                (await client.fetch<Methods13['post']['resBody']>(prefix, `/api/v3/channels/${val3}/chats`, 'POST', option).json()).data
            },
            news_feed: {
              get: (option?: { query?: Methods23['get']['query'], headers?: Methods23['get']['reqHeaders'], config?: T }) =>
                client.fetch<Methods23['get']['resBody']>(prefix, `/api/v3/channels/${val3}/news-feed`, 'GET', option).json(),
              $get: async (option?: { query?: Methods23['get']['query'], headers?: Methods23['get']['reqHeaders'], config?: T }) =>
                (await client.fetch<Methods23['get']['resBody']>(prefix, `/api/v3/channels/${val3}/news-feed`, 'GET', option).json()).data
            },
            notifications: {
              get: (option?: { query?: Methods24['get']['query'], headers?: Methods24['get']['reqHeaders'], config?: T }) =>
                client.fetch<Methods24['get']['resBody']>(prefix, `/api/v3/channels/${val3}/notifications`, 'GET', option).json(),
              $get: async (option?: { query?: Methods24['get']['query'], headers?: Methods24['get']['reqHeaders'], config?: T }) =>
                (await client.fetch<Methods24['get']['resBody']>(prefix, `/api/v3/channels/${val3}/notifications`, 'GET', option).json()).data
            },
            get: (option?: { query?: Methods12['get']['query'], headers?: Methods12['get']['reqHeaders'], config?: T }) =>
              client.fetch<void>(prefix, `/api/v3/channels/${val3}`, 'GET', option).send(),
            $get: async (option?: { query?: Methods12['get']['query'], headers?: Methods12['get']['reqHeaders'], config?: T }) =>
              (await client.fetch<void>(prefix, `/api/v3/channels/${val3}`, 'GET', option).send()).data
          }),
          get: (option?: { query?: Methods11['get']['query'], headers?: Methods11['get']['reqHeaders'], config?: T }) =>
            client.fetch<Methods11['get']['resBody']>(prefix, '/api/v3/channels', 'GET', option).json(),
          $get: async (option?: { query?: Methods11['get']['query'], headers?: Methods11['get']['reqHeaders'], config?: T }) =>
            (await client.fetch<Methods11['get']['resBody']>(prefix, '/api/v3/channels', 'GET', option).json()).data
        },
        chats: {
          _chatId: (val6: number | string) => ({
            items: {
              _itemId: (val7: number | string) => ({
                post: (option?: { data?: Methods26['post']['reqBody'], headers?: Methods26['post']['reqHeaders'], config?: T }) =>
                  client.fetch<Methods26['post']['resBody']>(prefix, `/api/v3/chats/${val6}/items/${val7}`, 'POST', option).json(),
                $post: async (option?: { data?: Methods26['post']['reqBody'], headers?: Methods26['post']['reqHeaders'], config?: T }) =>
                  (await client.fetch<Methods26['post']['resBody']>(prefix, `/api/v3/chats/${val6}/items/${val7}`, 'POST', option).json()).data,
                get: (option?: { headers?: Methods26['get']['reqHeaders'], config?: T }) =>
                  client.fetch<Methods26['get']['resBody']>(prefix, `/api/v3/chats/${val6}/items/${val7}`, 'GET', option).json(),
                $get: async (option?: { headers?: Methods26['get']['reqHeaders'], config?: T }) =>
                  (await client.fetch<Methods26['get']['resBody']>(prefix, `/api/v3/chats/${val6}/items/${val7}`, 'GET', option).json()).data
              }),
              audio: {
                post: (option?: { data?: Methods27['post']['reqBody'], headers?: Methods27['post']['reqHeaders'], config?: T }) =>
                  client.fetch<Methods27['post']['resBody']>(prefix, `/api/v3/chats/${val6}/items/audio`, 'POST', option, 'FormData').json(),
                $post: async (option?: { data?: Methods27['post']['reqBody'], headers?: Methods27['post']['reqHeaders'], config?: T }) =>
                  (await client.fetch<Methods27['post']['resBody']>(prefix, `/api/v3/chats/${val6}/items/audio`, 'POST', option, 'FormData').json()).data
              },
              image: {
                post: (option?: { data?: Methods28['post']['reqBody'], headers?: Methods28['post']['reqHeaders'], config?: T }) =>
                  client.fetch<Methods28['post']['resBody']>(prefix, `/api/v3/chats/${val6}/items/image`, 'POST', option, 'FormData').json(),
                $post: async (option?: { data?: Methods28['post']['reqBody'], headers?: Methods28['post']['reqHeaders'], config?: T }) =>
                  (await client.fetch<Methods28['post']['resBody']>(prefix, `/api/v3/chats/${val6}/items/image`, 'POST', option, 'FormData').json()).data
              },
              video: {
                post: (option?: { data?: Methods29['post']['reqBody'], headers?: Methods29['post']['reqHeaders'], config?: T }) =>
                  client.fetch<Methods29['post']['resBody']>(prefix, `/api/v3/chats/${val6}/items/video`, 'POST', option, 'FormData').json(),
                $post: async (option?: { data?: Methods29['post']['reqBody'], headers?: Methods29['post']['reqHeaders'], config?: T }) =>
                  (await client.fetch<Methods29['post']['resBody']>(prefix, `/api/v3/chats/${val6}/items/video`, 'POST', option, 'FormData').json()).data
              },
              get: (option?: { query?: Methods25['get']['query'], headers?: Methods25['get']['reqHeaders'], config?: T }) =>
                client.fetch<Methods25['get']['resBody']>(prefix, `/api/v3/chats/${val6}/items`, 'GET', option).json(),
              $get: async (option?: { query?: Methods25['get']['query'], headers?: Methods25['get']['reqHeaders'], config?: T }) =>
                (await client.fetch<Methods25['get']['resBody']>(prefix, `/api/v3/chats/${val6}/items`, 'GET', option).json()).data,
              post: (option: { data: Methods25['post']['reqBody'], headers?: Methods25['post']['reqHeaders'], config?: T }) =>
                client.fetch<Methods25['post']['resBody']>(prefix, `/api/v3/chats/${val6}/items`, 'POST', option).json(),
              $post: async (option: { data: Methods25['post']['reqBody'], headers?: Methods25['post']['reqHeaders'], config?: T }) =>
                (await client.fetch<Methods25['post']['resBody']>(prefix, `/api/v3/chats/${val6}/items`, 'POST', option).json()).data
            }
          }),
          keys: {
            get: (option?: { headers?: Methods30['get']['reqHeaders'], config?: T }) =>
              client.fetch<Methods30['get']['resBody']>(prefix, '/api/v3/chats/keys', 'GET', option).json(),
            $get: async (option?: { headers?: Methods30['get']['reqHeaders'], config?: T }) =>
              (await client.fetch<Methods30['get']['resBody']>(prefix, '/api/v3/chats/keys', 'GET', option).json()).data
          }
        },
        extension: {
          audio: {
            post: (option?: { data?: Methods31['post']['reqBody'], headers?: Methods31['post']['reqHeaders'], config?: T }) =>
              client.fetch<Methods31['post']['resBody']>(prefix, '/api/v3/extension/audio', 'POST', option, 'FormData').json(),
            $post: async (option?: { data?: Methods31['post']['reqBody'], headers?: Methods31['post']['reqHeaders'], config?: T }) =>
              (await client.fetch<Methods31['post']['resBody']>(prefix, '/api/v3/extension/audio', 'POST', option, 'FormData').json()).data
          },
          image: {
            post: (option?: { data?: Methods32['post']['reqBody'], headers?: Methods32['post']['reqHeaders'], config?: T }) =>
              client.fetch<Methods32['post']['resBody']>(prefix, '/api/v3/extension/image', 'POST', option, 'FormData').json(),
            $post: async (option?: { data?: Methods32['post']['reqBody'], headers?: Methods32['post']['reqHeaders'], config?: T }) =>
              (await client.fetch<Methods32['post']['resBody']>(prefix, '/api/v3/extension/image', 'POST', option, 'FormData').json()).data
          },
          parse: {
            post: (option: { data: Methods33['post']['reqBody'], headers?: Methods33['post']['reqHeaders'], config?: T }) =>
              client.fetch<Methods33['post']['resBody']>(prefix, '/api/v3/extension/parse', 'POST', option).json(),
            $post: async (option: { data: Methods33['post']['reqBody'], headers?: Methods33['post']['reqHeaders'], config?: T }) =>
              (await client.fetch<Methods33['post']['resBody']>(prefix, '/api/v3/extension/parse', 'POST', option).json()).data
          },
          story: {
            _storyId: (val8: number | string) => ({
              audio: {
                post: (option?: { data?: Methods35['post']['reqBody'], headers?: Methods35['post']['reqHeaders'], config?: T }) =>
                  client.fetch<Methods35['post']['resBody']>(prefix, `/api/v3/extension/story/${val8}/audio`, 'POST', option, 'FormData').json(),
                $post: async (option?: { data?: Methods35['post']['reqBody'], headers?: Methods35['post']['reqHeaders'], config?: T }) =>
                  (await client.fetch<Methods35['post']['resBody']>(prefix, `/api/v3/extension/story/${val8}/audio`, 'POST', option, 'FormData').json()).data
              },
              image: {
                post: (option?: { data?: Methods36['post']['reqBody'], headers?: Methods36['post']['reqHeaders'], config?: T }) =>
                  client.fetch<Methods36['post']['resBody']>(prefix, `/api/v3/extension/story/${val8}/image`, 'POST', option, 'FormData').json(),
                $post: async (option?: { data?: Methods36['post']['reqBody'], headers?: Methods36['post']['reqHeaders'], config?: T }) =>
                  (await client.fetch<Methods36['post']['resBody']>(prefix, `/api/v3/extension/story/${val8}/image`, 'POST', option, 'FormData').json()).data
              },
              video: {
                post: (option?: { data?: Methods37['post']['reqBody'], headers?: Methods37['post']['reqHeaders'], config?: T }) =>
                  client.fetch<Methods37['post']['resBody']>(prefix, `/api/v3/extension/story/${val8}/video`, 'POST', option, 'FormData').json(),
                $post: async (option?: { data?: Methods37['post']['reqBody'], headers?: Methods37['post']['reqHeaders'], config?: T }) =>
                  (await client.fetch<Methods37['post']['resBody']>(prefix, `/api/v3/extension/story/${val8}/video`, 'POST', option, 'FormData').json()).data
              },
              post: (option: { data: Methods34['post']['reqBody'], headers?: Methods34['post']['reqHeaders'], config?: T }) =>
                client.fetch<Methods34['post']['resBody']>(prefix, `/api/v3/extension/story/${val8}`, 'POST', option, 'FormData').json(),
              $post: async (option: { data: Methods34['post']['reqBody'], headers?: Methods34['post']['reqHeaders'], config?: T }) =>
                (await client.fetch<Methods34['post']['resBody']>(prefix, `/api/v3/extension/story/${val8}`, 'POST', option, 'FormData').json()).data
            })
          },
          video: {
            post: (option?: { data?: Methods38['post']['reqBody'], headers?: Methods38['post']['reqHeaders'], config?: T }) =>
              client.fetch<Methods38['post']['resBody']>(prefix, '/api/v3/extension/video', 'POST', option, 'FormData').json(),
            $post: async (option?: { data?: Methods38['post']['reqBody'], headers?: Methods38['post']['reqHeaders'], config?: T }) =>
              (await client.fetch<Methods38['post']['resBody']>(prefix, '/api/v3/extension/video', 'POST', option, 'FormData').json()).data
          }
        },
        fcm_token: {
          post: (option: { data: Methods39['post']['reqBody'], headers?: Methods39['post']['reqHeaders'], config?: T }) =>
            client.fetch<void>(prefix, '/api/v3/fcm_token', 'POST', option).send(),
          $post: async (option: { data: Methods39['post']['reqBody'], headers?: Methods39['post']['reqHeaders'], config?: T }) =>
            (await client.fetch<void>(prefix, '/api/v3/fcm_token', 'POST', option).send()).data
        },
        info: {
          get: (option?: { headers?: Methods40['get']['reqHeaders'], config?: T }) =>
            client.fetch<Methods40['get']['resBody']>(prefix, '/api/v3/info', 'GET', option).json(),
          $get: async (option?: { headers?: Methods40['get']['reqHeaders'], config?: T }) =>
            (await client.fetch<Methods40['get']['resBody']>(prefix, '/api/v3/info', 'GET', option).json()).data
        },
        login: {
          post: (option: { data: Methods41['post']['reqBody'], headers?: Methods41['post']['reqHeaders'], config?: T }) =>
            client.fetch<Methods41['post']['resBody']>(prefix, '/api/v3/login', 'POST', option).json(),
          $post: async (option: { data: Methods41['post']['reqBody'], headers?: Methods41['post']['reqHeaders'], config?: T }) =>
            (await client.fetch<Methods41['post']['resBody']>(prefix, '/api/v3/login', 'POST', option).json()).data
        },
        logout: {
          post: (option: { data: Methods42['post']['reqBody'], headers?: Methods42['post']['reqHeaders'], config?: T }) =>
            client.fetch<void>(prefix, '/api/v3/logout', 'POST', option).send(),
          $post: async (option: { data: Methods42['post']['reqBody'], headers?: Methods42['post']['reqHeaders'], config?: T }) =>
            (await client.fetch<void>(prefix, '/api/v3/logout', 'POST', option).send()).data
        },
        me: {
          get: (option?: { headers?: Methods43['get']['reqHeaders'], config?: T }) =>
            client.fetch<Methods43['get']['resBody']>(prefix, '/api/v3/me', 'GET', option).json(),
          $get: async (option?: { headers?: Methods43['get']['reqHeaders'], config?: T }) =>
            (await client.fetch<Methods43['get']['resBody']>(prefix, '/api/v3/me', 'GET', option).json()).data
        },
        organisation: {
          users: {
            get: (option: { query: Methods45['get']['query'], headers?: Methods45['get']['reqHeaders'], config?: T }) =>
              client.fetch<Methods45['get']['resBody']>(prefix, '/api/v3/organisation/users', 'GET', option).json(),
            $get: async (option: { query: Methods45['get']['query'], headers?: Methods45['get']['reqHeaders'], config?: T }) =>
              (await client.fetch<Methods45['get']['resBody']>(prefix, '/api/v3/organisation/users', 'GET', option).json()).data
          },
          get: (option?: { headers?: Methods44['get']['reqHeaders'], config?: T }) =>
            client.fetch<Methods44['get']['resBody']>(prefix, '/api/v3/organisation', 'GET', option).json(),
          $get: async (option?: { headers?: Methods44['get']['reqHeaders'], config?: T }) =>
            (await client.fetch<Methods44['get']['resBody']>(prefix, '/api/v3/organisation', 'GET', option).json()).data
        },
        stories: {
          _storyId: (val9: number | string) => ({
            items: {
              _itemId: (val10: number | string) => ({
                reaction: {
                  post: (option: { data: Methods48['post']['reqBody'], headers?: Methods48['post']['reqHeaders'], config?: T }) =>
                    client.fetch<Methods48['post']['resBody']>(prefix, `/api/v3/stories/${val9}/items/${val10}/reaction`, 'POST', option).json(),
                  $post: async (option: { data: Methods48['post']['reqBody'], headers?: Methods48['post']['reqHeaders'], config?: T }) =>
                    (await client.fetch<Methods48['post']['resBody']>(prefix, `/api/v3/stories/${val9}/items/${val10}/reaction`, 'POST', option).json()).data
                },
                get: (option?: { headers?: Methods47['get']['reqHeaders'], config?: T }) =>
                  client.fetch<Methods47['get']['resBody']>(prefix, `/api/v3/stories/${val9}/items/${val10}`, 'GET', option).json(),
                $get: async (option?: { headers?: Methods47['get']['reqHeaders'], config?: T }) =>
                  (await client.fetch<Methods47['get']['resBody']>(prefix, `/api/v3/stories/${val9}/items/${val10}`, 'GET', option).json()).data
              }),
              get: (option?: { query?: Methods46['get']['query'], headers?: Methods46['get']['reqHeaders'], config?: T }) =>
                client.fetch<Methods46['get']['resBody']>(prefix, `/api/v3/stories/${val9}/items`, 'GET', option).json(),
              $get: async (option?: { query?: Methods46['get']['query'], headers?: Methods46['get']['reqHeaders'], config?: T }) =>
                (await client.fetch<Methods46['get']['resBody']>(prefix, `/api/v3/stories/${val9}/items`, 'GET', option).json()).data
            }
          })
        },
        user: {
          _userId: (val11: number | string) => ({
            get: (option?: { headers?: Methods50['get']['reqHeaders'], config?: T }) =>
              client.fetch<Methods50['get']['resBody']>(prefix, `/api/v3/user/${val11}`, 'GET', option).json(),
            $get: async (option?: { headers?: Methods50['get']['reqHeaders'], config?: T }) =>
              (await client.fetch<Methods50['get']['resBody']>(prefix, `/api/v3/user/${val11}`, 'GET', option).json()).data
          }),
          profile: {
            put: (option?: { data?: Methods51['put']['reqBody'], headers?: Methods51['put']['reqHeaders'], config?: T }) =>
              client.fetch<void>(prefix, '/api/v3/user/profile', 'PUT', option, 'FormData').send(),
            $put: async (option?: { data?: Methods51['put']['reqBody'], headers?: Methods51['put']['reqHeaders'], config?: T }) =>
              (await client.fetch<void>(prefix, '/api/v3/user/profile', 'PUT', option, 'FormData').send()).data
          },
          get: (option?: { headers?: Methods49['get']['reqHeaders'], config?: T }) =>
            client.fetch<Methods49['get']['resBody']>(prefix, '/api/v3/user', 'GET', option).json(),
          $get: async (option?: { headers?: Methods49['get']['reqHeaders'], config?: T }) =>
            (await client.fetch<Methods49['get']['resBody']>(prefix, '/api/v3/user', 'GET', option).json()).data
        }
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
