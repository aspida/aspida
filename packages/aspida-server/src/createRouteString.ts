import path from 'path'
import fs from 'fs'

export default (inputDir: string) => {
  const middlewares: string[] = []
  const controllers: string[] = []

  const createText = (input: string, indent: string, params: [string, string][], user = '') => {
    let result = ''
    const userPath = fs.existsSync(path.join(input, '@user.ts'))
      ? './@user'
      : user
      ? `./.${user}`
      : ''

    if (params.length || userPath) {
      fs.writeFileSync(
        path.join(input, '$values.ts'),
        `/* eslint-disable */
${userPath ? `import { User } from '${userPath}'\n\n` : ''}export type Values = {
${
  params.length
    ? `  params: {
${params.map(v => `    ${v[0]}: ${v[1]}`).join('\n')}
  }`
    : ''
}${params.length ? '\n' : ''}${userPath ? '  user: User' : ''}
}
`,
        'utf8'
      )
    } else if (fs.existsSync(path.join(input, '@values.ts'))) {
      fs.unlinkSync(path.join(input, '$values.ts'))
    }

    if (fs.existsSync(path.join(input, '@controller.ts'))) {
      result += `,\n${indent}controller: controller${controllers.length}`
      controllers.push(`${input}/@controller`)
    }

    if (fs.existsSync(path.join(input, '@middleware.ts'))) {
      result += `,\n${indent}middleware: middleware${middlewares.length}`
      middlewares.push(`${input}/@middleware`)
    }

    const childrenDirs = fs
      .readdirSync(input)
      .filter(d => fs.statSync(path.join(input, d)).isDirectory())
    if (childrenDirs.length) {
      result += `,\n${indent}children: {\n`
      const names = childrenDirs.filter(d => !d.startsWith('_'))
      if (names.length) {
        result += `  ${indent}names: [\n`
        result += names
          .map(
            n =>
              `    ${indent}{\n      ${indent}name: '/${n}'${createText(
                path.posix.join(input, n),
                `      ${indent}`,
                params,
                userPath
              )}\n    ${indent}}`
          )
          .join(',\n')
        result += `\n  ${indent}]`
      }

      const value = childrenDirs.find(d => d.startsWith('_'))
      if (value) {
        result += `${
          names.length ? ',\n' : ''
        }  ${indent}value: {\n    ${indent}name: '/${value}'${createText(
          path.posix.join(input, value),
          `    ${indent}`,
          [...params, [value.slice(1).split('@')[0], value.split('@')[1] ?? 'string']],
          userPath
        )}\n  ${indent}}`
      }
      result += `\n${indent}}`
    }

    return result
  }

  const text = createText(inputDir, '  ', [])

  return `/* eslint-disable */${controllers.length ? '\n' : ''}${controllers
    .map((c, i) => `import controller${i} from '${c.replace(inputDir, '.')}'`)
    .join('\n')}${middlewares.length ? '\n' : ''}${middlewares
    .map((m, i) => `import middleware${i} from '${m.replace(inputDir, '.')}'`)
    .join('\n')}

export default {
  name: '/'${text}
}
`
}
