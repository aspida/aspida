/* eslint-disable */
import { AxiosInstance } from 'axios'
import mockServer from 'axios-mock-server'
import mock0 from './users/self'
import mock1 from './users/index'
import mock2 from './users/_userId'
import mock3 from './search/_userName@string'
import mock4 from './index'
import mock5 from './collections/entries.json'

export default (client?: AxiosInstance) => mockServer([
  {
    path: '/users/self',
    methods: mock0
  },
  {
    path: '/users',
    methods: mock1
  },
  {
    path: '/users/_userId',
    methods: mock2
  },
  {
    path: '/search/_userName@string',
    methods: mock3
  },
  {
    path: '/',
    methods: mock4
  },
  {
    path: '/collections/entries.json',
    methods: mock5
  }
], client)
