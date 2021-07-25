import { Server } from 'http'
import express from 'express'
import { createApi } from '../samples/basic/$api'

const port = 11111
const app = express()
const client = createApi({ baseURL: `http://localhost:${port}` })
let server: Server

app.use(express.json())

beforeEach(
  () =>
    new Promise(resolve => {
      server = app.listen(port, resolve)
    })
)

afterEach(
  () =>
    new Promise(resolve => {
      server.close(resolve)
    })
)

test('aspida response status 404', async () => {
  const { err } = await client.v1_1.$2._hogeId_string('hoge').entries_json.$get()

  expect(err?.data).toHaveProperty('status', 404)
})

test('path value', async () => {
  app.get('/v1.1/2/:hogeId/entries.json', (req, res) => {
    res.json([{ id: 0, title: req.params.hogeId }])
  })

  const text = 'hoge'
  const { res } = await client.v1_1.$2._hogeId_string(text).entries_json.$get()
  expect(res?.body).toMatchObject([{ id: 0, title: text }])
})

test('aspida response string', async () => {
  app.get('/v2.0', (req, res) => {
    res.send(req.query.val)
  })

  const text = 'test'
  const { res } = await client.v2_0.$get({
    query: { val: text },
    headers: { 'content-type': 'text/plain' }
  })

  expect(res?.body).toBe(text)
})
