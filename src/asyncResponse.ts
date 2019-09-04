import { MockResponse } from './types'

export default async (
  status: number,
  query: Promise<any>,
  headers?: any
): Promise<MockResponse> => [status, await query, headers]
