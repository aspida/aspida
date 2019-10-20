/* eslint-disable */
module.exports = (client) => require('axios-mock-server')([
  {
    path: '/users/self',
    methods: require('./users/self')
  },
  {
    path: '/users',
    methods: require('./users/index')
  },
  {
    path: '/users/_userId',
    methods: require('./users/_userId')
  },
  {
    path: '/search/_userName@string',
    methods: require('./search/_userName@string')
  },
  {
    path: '/',
    methods: require('./index')
  },
  {
    path: '/collections/entries.json',
    methods: require('./collections/entries.json')
  }
], client, 'https://example.com/api')
