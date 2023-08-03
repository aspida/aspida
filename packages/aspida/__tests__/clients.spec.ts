import fastify, { FastifyInstance } from 'fastify';
import axiosClient from '../../aspida-axios';
import api from '../samples/basic/$api';

const port = 11111;
const client = api(axiosClient(undefined, { baseURL: `http://localhost:${port}` }));
let server: FastifyInstance;

beforeEach(() => {
  server = fastify();
});

afterEach(() => server.close());

test('aspida response status 404', async () => {
  await server.listen({ port });
  const target = client.v1_1.$2._hogeId_string('hoge').entries_json;
  await expect(target.get()).rejects.toHaveProperty('response.status', 404);
});

test('path value', async () => {
  server.get('/v1.1/2/:hogeId/entries.json', (req, res) => {
    res.send([{ id: 0, title: (req.params as Record<string, string | number>).hogeId }]);
  });
  await server.listen({ port });

  const text = 'hoge';
  const target = client.v1_1.$2._hogeId_string(text).entries_json;
  await expect(target.$get()).resolves.toMatchObject([{ id: 0, title: text }]);
});

test('aspida response string', async () => {
  server.get('/v2.0', (req, res) => {
    res.send((req.query as Record<string, string | number>).val);
  });
  await server.listen({ port });

  const text = 'test';
  const target = client.v2_0.$get({
    query: { val: text },
    headers: { 'content-type': 'text/plain' },
  });

  await expect(target).resolves.toBe(text);
});

test('polymorphic request', async () => {
  server.post('/polymorphism/users', (req, res) => {
    res.send(req.body);
  });
  await server.listen({ port });

  const body = { id: 1 };
  const target: Promise<typeof body> = client.polymorphism.users.$post({ body });
  await expect(target).resolves.toMatchObject(body);

  const body1 = [{ name: 'aaa' }];
  const target1: Promise<typeof body1> = client.polymorphism.users.$post({ body: body1 });
  await expect(target1).resolves.toMatchObject(body1);
});
