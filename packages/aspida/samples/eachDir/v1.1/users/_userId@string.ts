export type Methods = {
  get: {
    query: { aa?: number };
    reqHeaders: {};
    resBody: { id: number };
  };

  post: {
    query: { aa: number };
    resBody: { id: number };
  };
};
