import axios from 'axios';
import qs from 'qs';
import api from '../../aspida/samples/array/$api';
import aspida from '../index';

describe('paramsSerializer', () => {
  axios.request = jest.fn().mockResolvedValue({ headers: new Map(), status: 200, json: () => [] });

  test('default', async () => {
    const client = api(aspida(axios));
    await client.users.$get({ query: { ids: [1, 2, 3] } });
    expect(axios.request).toHaveBeenCalledTimes(1);
  });

  test('qs', async () => {
    const query = { ids: [1, 2, 3] };
    const client = api(aspida(axios, { paramsSerializer: ({ params }) => qs.stringify(params) }));
    await client.users.$get({ query });
    expect(axios.request).toHaveBeenCalledTimes(2);
  });
});
