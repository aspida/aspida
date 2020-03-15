/* eslint-disable */
import { MockClient, MockConfig } from 'aspida-mock'
import api from './$api'
import mock0 from './api/v3/user/profile'
import mock1 from './api/v3/user/index'
import mock2 from './api/v3/user/_userId'
import mock3 from './api/v3/stories/_storyId/items/index'
import mock4 from './api/v3/stories/_storyId/items/_itemId/reaction'
import mock5 from './api/v3/stories/_storyId/items/_itemId/index'
import mock6 from './api/v3/organisation/users'
import mock7 from './api/v3/organisation/index'
import mock8 from './api/v3/me'
import mock9 from './api/v3/logout'
import mock10 from './api/v3/login'
import mock11 from './api/v3/info'
import mock12 from './api/v3/fcm_token'
import mock13 from './api/v3/extension/video'
import mock14 from './api/v3/extension/story/_storyId/video'
import mock15 from './api/v3/extension/story/_storyId/index'
import mock16 from './api/v3/extension/story/_storyId/image'
import mock17 from './api/v3/extension/story/_storyId/audio'
import mock18 from './api/v3/extension/parse'
import mock19 from './api/v3/extension/image'
import mock20 from './api/v3/extension/audio'
import mock21 from './api/v3/chats/keys'
import mock22 from './api/v3/chats/_chatId/items/video'
import mock23 from './api/v3/chats/_chatId/items/index'
import mock24 from './api/v3/chats/_chatId/items/image'
import mock25 from './api/v3/chats/_chatId/items/audio'
import mock26 from './api/v3/chats/_chatId/items/_itemId'
import mock27 from './api/v3/channels/index'
import mock28 from './api/v3/channels/_channelId/notifications'
import mock29 from './api/v3/channels/_channelId/news-feed'
import mock30 from './api/v3/channels/_channelId/index'
import mock31 from './api/v3/channels/_channelId/chats/index'
import mock32 from './api/v3/channels/_channelId/chats/_chatId/users/remove'
import mock33 from './api/v3/channels/_channelId/chats/_chatId/users/index'
import mock34 from './api/v3/channels/_channelId/chats/_chatId/itemslist'
import mock35 from './api/v3/channels/_channelId/chats/_chatId/items/video'
import mock36 from './api/v3/channels/_channelId/chats/_chatId/items/index'
import mock37 from './api/v3/channels/_channelId/chats/_chatId/items/image'
import mock38 from './api/v3/channels/_channelId/chats/_chatId/items/audio'
import mock39 from './api/v3/channels/_channelId/chats/_chatId/items/_itemId'
import mock40 from './api/v3/channels/_channelId/chats/_chatId/index'
import mock41 from './api/v3/2fa'
import mock42 from './api/v1/token'
import mock43 from './api/v1/parse/index'
import mock44 from './api/v1/parse/image'
import mock45 from './api/v1/mixes/index'
import mock46 from './api/v1/mixes/_mixId/url'
import mock47 from './api/v1/mixes/_mixId/cards'
import mock48 from './api/v1/mixes/_id'
import mock49 from './api/v1/me'
import mock50 from './api/stream/v1/stories/index'
import mock51 from './api/stream/v1/stories/_storyId'

export const mockRoutes = () => [
  { path: '/api/v3/user/profile', methods: mock0 },
  { path: '/api/v3/user', methods: mock1 },
  { path: '/api/v3/user/_userId', methods: mock2 },
  { path: '/api/v3/stories/_storyId/items', methods: mock3 },
  { path: '/api/v3/stories/_storyId/items/_itemId/reaction', methods: mock4 },
  { path: '/api/v3/stories/_storyId/items/_itemId', methods: mock5 },
  { path: '/api/v3/organisation/users', methods: mock6 },
  { path: '/api/v3/organisation', methods: mock7 },
  { path: '/api/v3/me', methods: mock8 },
  { path: '/api/v3/logout', methods: mock9 },
  { path: '/api/v3/login', methods: mock10 },
  { path: '/api/v3/info', methods: mock11 },
  { path: '/api/v3/fcm_token', methods: mock12 },
  { path: '/api/v3/extension/video', methods: mock13 },
  { path: '/api/v3/extension/story/_storyId/video', methods: mock14 },
  { path: '/api/v3/extension/story/_storyId', methods: mock15 },
  { path: '/api/v3/extension/story/_storyId/image', methods: mock16 },
  { path: '/api/v3/extension/story/_storyId/audio', methods: mock17 },
  { path: '/api/v3/extension/parse', methods: mock18 },
  { path: '/api/v3/extension/image', methods: mock19 },
  { path: '/api/v3/extension/audio', methods: mock20 },
  { path: '/api/v3/chats/keys', methods: mock21 },
  { path: '/api/v3/chats/_chatId/items/video', methods: mock22 },
  { path: '/api/v3/chats/_chatId/items', methods: mock23 },
  { path: '/api/v3/chats/_chatId/items/image', methods: mock24 },
  { path: '/api/v3/chats/_chatId/items/audio', methods: mock25 },
  { path: '/api/v3/chats/_chatId/items/_itemId', methods: mock26 },
  { path: '/api/v3/channels', methods: mock27 },
  { path: '/api/v3/channels/_channelId/notifications', methods: mock28 },
  { path: '/api/v3/channels/_channelId/news-feed', methods: mock29 },
  { path: '/api/v3/channels/_channelId', methods: mock30 },
  { path: '/api/v3/channels/_channelId/chats', methods: mock31 },
  { path: '/api/v3/channels/_channelId/chats/_chatId/users/remove', methods: mock32 },
  { path: '/api/v3/channels/_channelId/chats/_chatId/users', methods: mock33 },
  { path: '/api/v3/channels/_channelId/chats/_chatId/itemslist', methods: mock34 },
  { path: '/api/v3/channels/_channelId/chats/_chatId/items/video', methods: mock35 },
  { path: '/api/v3/channels/_channelId/chats/_chatId/items', methods: mock36 },
  { path: '/api/v3/channels/_channelId/chats/_chatId/items/image', methods: mock37 },
  { path: '/api/v3/channels/_channelId/chats/_chatId/items/audio', methods: mock38 },
  { path: '/api/v3/channels/_channelId/chats/_chatId/items/_itemId', methods: mock39 },
  { path: '/api/v3/channels/_channelId/chats/_chatId', methods: mock40 },
  { path: '/api/v3/2fa', methods: mock41 },
  { path: '/api/v1/token', methods: mock42 },
  { path: '/api/v1/parse', methods: mock43 },
  { path: '/api/v1/parse/image', methods: mock44 },
  { path: '/api/v1/mixes', methods: mock45 },
  { path: '/api/v1/mixes/_mixId/url', methods: mock46 },
  { path: '/api/v1/mixes/_mixId/cards', methods: mock47 },
  { path: '/api/v1/mixes/_id', methods: mock48 },
  { path: '/api/v1/me', methods: mock49 },
  { path: '/api/stream/v1/stories', methods: mock50 },
  { path: '/api/stream/v1/stories/_storyId', methods: mock51 }
]

export default <U>(client: MockClient<U>, config?: MockConfig) => {
  client.attachRoutes(mockRoutes(), config)

  return api(client)
}
