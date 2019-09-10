import axios from 'axios'
import mockServer from 'axios-mock-server'
import route from '../mocks/$route'

mockServer(route)

const button = document.querySelector('button')

button.addEventListener('click', async () => {
  const { data } = await axios.get('https://example.com/users/0')
  alert(JSON.stringify(data))
})
