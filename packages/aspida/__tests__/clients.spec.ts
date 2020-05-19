import { Server } from 'http'
import express from 'express'
import axiosClient from '@aspida/axios'
import api from '../samples/$api'

const port = 11111
const app = express()
const client = api(axiosClient(undefined, { baseURL: `http://localhost:${port}` }))
let server: Server

beforeEach(fn => {
  server = app.listen(port, fn)
})

afterEach(fn => server.close(fn))

test('aspida response status 404', async () => {
  const target = client.v1_1.$2._hogeId_0('hoge').entries_json
  await expect(target.get()).rejects.toHaveProperty('response.status', 404)
})

test('aspida response string', async () => {
  app.get('/v2.0', (req, res) => {
    res.send(req.query.val)
  })

  const text = 'test'
  const target = await client.v2_0.$get({
    query: { val: text },
    headers: { 'content-type': 'text/plain' }
  })

  expect(target).toBe(text)
})
