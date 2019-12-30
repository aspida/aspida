const axios = require('axios')
require('../mocks/$mock')()

axios.get('https://example.com/users/0').then(({ data }) => {
  console.log(data)
})
