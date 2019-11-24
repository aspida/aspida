import { MockMethods } from '~/src/types'

export const users = [
  { id: 0, name: 'aaa' },
  { id: 1, name: '123' }
]

export default {
  get: () => [200, users],
  post: ({ data }) => {
    const user = {
      id: users.length,
      name: data.name
    }

    users.push(user)

    return [201, user]
  }
} as MockMethods
