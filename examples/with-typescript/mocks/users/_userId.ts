import { MockMethods } from 'axios-mock-server'

const users = [{ id: 0, name: 'foo' }]

const mockMethods: MockMethods = {
  get({ values }) {
    return [200, users.find(user => user.id === values.userId)]
  }
}

export default mockMethods
