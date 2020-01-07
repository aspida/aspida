const users = [{ id: 0, name: 'foo' }]

module.exports = {
  get({ values }) {
    return [200, users.find(user => user.id === values.userId)]
  }
}
