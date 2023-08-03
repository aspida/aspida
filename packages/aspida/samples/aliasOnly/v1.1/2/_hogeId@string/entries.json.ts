import { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    resBody: {
      id: number;
      title: string;
    }[];
  };
}>;
