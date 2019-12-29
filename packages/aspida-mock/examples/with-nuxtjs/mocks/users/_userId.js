const users = [{ id: 0, name: 'foo' }]

export default {
  get({ values }) {
    return [200, users.find(user => user.id === values.userId)]
  }
}
