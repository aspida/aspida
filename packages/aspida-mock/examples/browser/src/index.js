import axios from 'axios'
import mock from '../mocks/$mock'

mock()

const button = document.querySelector('button')

button.addEventListener('click', async () => {
  const { data } = await axios.get('https://example.com/users/0')
  alert(JSON.stringify(data))
})
