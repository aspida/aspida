import { DefineMethods } from '../../../../src';

export type Methods = DefineMethods<{
  get: {
    polymorph: [
      { query: { hoge: number }; resBody: { hoge: number } },
      { query: { foo: string }; resBody: { foo: string } }
    ];
  };
}>;
