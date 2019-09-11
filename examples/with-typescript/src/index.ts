import axios from 'axios'
import mockServer from 'axios-mock-server'
import route from '../mocks/$route'

mockServer(route)

axios.get('https://example.com/users/0').then(({ data }) => {
  console.log(data)
})
