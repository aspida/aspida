import { DefineMethods } from '../../../src';
type User = {
  id: number;
  name: string;
};
export type Methods = DefineMethods<{
  get: {
    query?: { ids: number[] };
    resBody: User[];
  };
}>;
