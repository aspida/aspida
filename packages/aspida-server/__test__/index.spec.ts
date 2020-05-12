import { fork, ChildProcess } from 'child_process'
import fs from 'fs'
import FormData from 'form-data'
import axios from 'axios'
import aspida from '@aspida/axios'
import api from '../apis/$api'

const baseURL = 'http://localhost:10000'
const client = api(aspida(undefined, { baseURL }))
let server: ChildProcess

beforeAll(async fn => {
  server = fork(`${__dirname}/../.aspida/server`)

  while (true) {
    try {
      await client.$get({ query: { id: '1', disable: 'false' } })
      break
    } catch (e) {
      await new Promise(resolve => setTimeout(resolve, 100))
    }
  }
  fn()
})
afterAll(() => {
  server.kill()
})

test('GET: 200', async () => {
  const res = await client.$get({ query: { id: '1', disable: 'false' } })
  expect(res?.id).toBe(1)
})

test('GET: 400', async () => {
  await Promise.all([
    expect(client.get({ query: { id: '1', disable: 'no boolean' } })).rejects.toHaveProperty(
      'response.status',
      400
    ),
    expect(client.get({ query: { id: 'no number', disable: 'true' } })).rejects.toHaveProperty(
      'response.status',
      400
    )
  ])
})

test('POST: formdata', async () => {
  const port = '3000'
  const form = new FormData()
  form.append('port', port)
  form.append('file', fs.createReadStream('tsconfig.json'))
  const res = await axios.post(baseURL, form, {
    headers: form.getHeaders(),
    params: { id: 1, disable: true }
  })
  expect(res.data.port).toBe(port)
})
