import minimist from 'minimist'
import build from '.'

export const run = (args: string[]) => {
  const argv = minimist(args, {
    string: ['version', 'input', 'config'],
    alias: { v: 'version', i: 'input', c: 'config', o: 'outputdir' }
  })

  argv.version !== undefined
    ? console.log(`v${require('../package.json').version}`)
    : argv.input || (argv.input && argv.outputdir)
    ? build(
        { outputEachDir: true, openapi: { inputFile: argv.input, outputDir: argv.outputdir } },
        argv.outputdir
      )
    : build(argv.config)
}
