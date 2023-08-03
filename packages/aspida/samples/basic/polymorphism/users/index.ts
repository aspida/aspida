import { DefineMethods } from '../../../../src';

export type Methods = DefineMethods<{
  get: {
    polymorph: [
      { reqBody: { id: number }; resBody: { id: number } },
      { reqBody: { id: number }[]; resBody: { id: number }[] }
    ];
  };

  post: {
    query?: { count: number };
    polymorph: [
      { reqBody: { id: number }; resBody: { id: number } },
      { reqBody: { name: string }[]; resBody: { name: string }[] },
      {}
    ];
  };

  patch: {
    reqFormat: FormData;
    reqBody: { id: number };
  };

  put: {
    resBody: { id: number };
    polymorph: [
      { query: { type: 'object' }; reqBody: { id: number } },
      { query: { type: 'array' }; reqBody: { id: number }[] }
    ];
  };

  delete: {
    reqBody?: { id: number };
    polymorph: [{ reqHeaders: { token: string }; resHeaders: { token: string } }, { status: 204 }];
  };
}>;
