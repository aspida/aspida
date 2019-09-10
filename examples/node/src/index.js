const axios = require('axios')
const mockServer = require('axios-mock-server')
const route = require('../mocks/$route')

mockServer(route)

axios.get('https://example.com/users/0').then(({ data }) => {
  console.log(data)
})
