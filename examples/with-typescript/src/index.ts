import axios from 'axios'
import mock from '../mocks/$mock'

mock()

axios.get('https://example.com/users/0').then(({ data }) => {
  console.log(data)
})
