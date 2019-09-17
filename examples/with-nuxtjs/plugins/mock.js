import mockServer from 'axios-mock-server'
import route from '~/mocks/$route.js'

export default ({ app }) => {
  mockServer(route, app.$axios)
}
