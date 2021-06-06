import { Server } from 'http'
import express from 'express'
import axiosClient from '../../aspida-axios/src'
import api from '../samples/basic/$api'

const port = 11111
const app = express()
const client = api(axiosClient(undefined, { baseURL: `http://localhost:${port}` }))
let server: Server

app.use(express.json())

beforeEach(() => new Promise((resolve) => {
  server = app.listen(port, resolve)
}))

afterEach(() => new Promise((resolve) => {
  server.close(resolve)
}))

test('aspida response status 404', async () => {
  const target = client.v1_1.$2._hogeId_string('hoge').entries_json
  await expect(target.get()).rejects.toHaveProperty('response.status', 404)
})

test('path value', async () => {
  app.get('/v1.1/2/:hogeId/entries.json', (req, res) => {
    res.json([{ id: 0, title: req.params.hogeId }])
  })

  const text = 'hoge'
  const target = client.v1_1.$2._hogeId_string(text).entries_json
  await expect(target.$get()).resolves.toMatchObject([{ id: 0, title: text }])
})

test('aspida response string', async () => {
  app.get('/v2.0', (req, res) => {
    res.send(req.query.val)
  })

  const text = 'test'
  const target = client.v2_0.$get({
    query: { val: text },
    headers: { 'content-type': 'text/plain' }
  })

  await expect(target).resolves.toBe(text)
})

test('polymorphic request', async () => {
  app.get('/polymorphism/users', (req, res) => {
    res.send(req.body)
  })

  const body = { id: 1 }
  const target: Promise<typeof body> = client.polymorphism.users.$get({ body })
  await expect(target).resolves.toMatchObject(body)

  const body1 = [{ id: 1 }]
  const target1: Promise<typeof body1> = client.polymorphism.users.$get({ body: body1 })
  await expect(target1).resolves.toMatchObject(body1)
})
