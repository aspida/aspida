/* eslint-disable */
import { AxiosInstance } from 'axios'
import mockServer from 'axios-mock-server'
import mock0 from './users/self'
import mock1 from './users/index'
import mock2 from './users/_userId'
import mock3 from './index'

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
    path: '/',
    methods: mock3
  }
], client)
