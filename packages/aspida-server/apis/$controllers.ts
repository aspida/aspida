/* eslint-disable */
import controller0 from './@controller'
import controller1 from './users/@controller'
import controller2 from './users/_userId@number/@controller'
import middleware0 from './@middleware'

export default {
  name: '/',
  controller: controller0,
  middleware: middleware0,
  children: {
    names: [
      {
        name: '/users',
        controller: controller1,
        children: {
          value: {
            name: '/_userId@number',
            controller: controller2
          }
        }
      }
    ]
  }
}
