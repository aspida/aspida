import { mockMethods } from 'aspida-mock';

export type Methods = {
  get: {
    // test
    query?:
      | {
          aa: number /*
    test { aa }
    */;
        }
      | { bb: string[] };
    status: 200;
    resBody: { aa: number } | { bb: Array<string> };
  };
};

export default mockMethods<Methods>({
  // @ts-expect-error
  get: ({ query }) => (query ? { status: 201, resBody: query } : { status: 403 }),
});
