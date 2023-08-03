import { DefineMethods } from '../../../../../../src';

export type Methods = DefineMethods<{
  get: {
    query: { aa?: number };
    resBody: { id: number };
  };

  post: {
    query: { aa: number };
    reqBody?: { name: string };
    resBody: { id: number };
  };

  put: {
    query: { aa: number };
    resBody: { id: number };
  };

  delete: {
    query: { aa: number };
    reqBody: { name: string };
    resBody: { id: number };
  };
}>;
