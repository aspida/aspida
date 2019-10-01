import mockServer from 'axios-mock-server'
import route from '~/mocks/$route.js'

export default ({ $axios }) => {
  mockServer(route, $axios)
}
