import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore: Cannot find module
import mock from '../mocks/$mock'

mock()

axios.get('https://example.com/users/0').then(({ data }) => {
  console.log(data)
})
