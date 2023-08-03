import minimist from 'minimist';
import { build, version, watch } from './commands';

export const run = (args: string[]) => {
  const argv = minimist(args, {
    string: ['version', 'config', 'watch'],
    alias: { v: 'version', c: 'config', w: 'watch' },
  });

  // eslint-disable-next-line no-unused-expressions
  argv.version !== undefined
    ? console.log(`v${version()}`)
    : argv.watch !== undefined
    ? watch(argv.config)
    : build(argv.config);
};
