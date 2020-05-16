import fs from 'fs'
import FormData from 'form-data'
import axios from 'axios'
import aspida from '@aspida/axios'
import api from '../apis/$api'
import { run, app } from '../apis/server'

const config = require('../aspida.config') as any
const baseURL = `http://localhost:${config.server.port}${config.server.basePath ?? ''}`
const client = api(aspida(undefined, { baseURL }))
let server: ReturnType<typeof app.listen>

beforeAll(async fn => {
  server = await run()
  fn()
})

afterAll(() => {
  server.close()
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
  const fileName = 'tsconfig.json'
  const form = new FormData()
  form.append('port', port)
  form.append('file', fs.createReadStream(fileName))
  const res = await axios.post(baseURL, form, {
    headers: form.getHeaders(),
    params: { id: 1, disable: true }
  })
  expect(res.data.port).toBe(port)
  expect(res.data.fileName).toBe(fileName)
})

test('GET: static', async () => {
  const res = await axios.get(`http://localhost:${config.server.port}/sample.json`)
  expect(res.data.sample).toBe(true)
})
