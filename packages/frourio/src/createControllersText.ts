import path from 'path'
import fs from 'fs'
import parseInterface from 'aspida/dist/parseInterface'

export default (inputDir: string) => {
  const middlewares: string[] = []
  const controllers: [string, boolean][] = []
  const validates: string[] = []

  const createText = (input: string, indent: string, params: [string, string][], user = '') => {
    let result = ''
    const userPath =
      fs.existsSync(path.join(input, '@middleware.ts')) &&
      parseInterface(fs.readFileSync(path.join(input, '@middleware.ts'), 'utf8'), 'User')
        ? './@middleware'
        : user
        ? `./.${user}`
        : ''

    if (params.length || userPath) {
      fs.writeFileSync(
        path.join(input, '$values.ts'),
        `/* eslint-disable */\n${
          userPath ? `import { User } from '${userPath}'\n\n` : ''
        }export type Values = {${
          params.length
            ? `\n  params: {\n${params.map(v => `    ${v[0]}: ${v[1]}`).join('\n')}\n  }`
            : ''
        }${userPath ? '\n  user: User' : ''}\n}\n`,
        'utf8'
      )
    } else if (fs.existsSync(path.join(input, '@values.ts'))) {
      fs.unlinkSync(path.join(input, '$values.ts'))
    }

    if (fs.existsSync(path.join(input, 'index.ts'))) {
      const text = fs.readFileSync(path.join(input, 'index.ts'), 'utf8')
      const methods = parseInterface(text, 'Methods')
      if (methods) {
        const validateInfo = methods
          .map(m => {
            const props: [string, { value: string; hasQuestion: boolean }][] = []
            if (m.props.query && text.includes(`export class ${m.props.query.value} `)) {
              props.push(['query', m.props.query])
            }
            if (m.props.reqBody && text.includes(`export class ${m.props.reqBody.value} `)) {
              props.push(['body', m.props.reqBody])
            }
            if (m.props.reqHeaders && text.includes(`export class ${m.props.reqHeaders.value} `)) {
              props.push(['headers', m.props.reqHeaders])
            }
            return { method: m.name, props }
          })
          .filter(v => v.props.length)

        if (validateInfo.length) {
          result += `,\n${indent}validator: {\n${validateInfo
            .map(
              v =>
                `  ${indent}${v.method}: {\n${v.props
                  .map(
                    p =>
                      `    ${indent}${p[0]}: { required: ${!p[1].hasQuestion}, Class: validator${
                        validates.length
                      }.${p[1].value} }`
                  )
                  .join(',\n')}\n  ${indent}}`
            )
            .join(',\n')}\n${indent}}`
          validates.push(input)
        }

        const uploaders = methods
          .filter(m => m.props.reqFormat?.value === 'FormData')
          .map(m => m.name)
        if (uploaders.length) {
          result += `,\n${indent}uploader: ['${uploaders.join("', '")}']`
        }
      }
    }

    if (fs.existsSync(path.join(input, '@controller.ts'))) {
      result += `,\n${indent}controller: controller${controllers.length}`
      const text = fs.readFileSync(path.join(input, '@controller.ts'), 'utf8')
      const hasMiddleware = /export (const|{)(.*[ ,])?middleware[, }=]/.test(text)

      if (hasMiddleware) {
        result += `,\n${indent}ctrlMiddleware: ctrlMiddleware${controllers.length}`
      }

      controllers.push([`${input}/@controller`, hasMiddleware])
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
  const ctrlMiddleware = controllers.filter(c => c[1])

  return `/* eslint-disable */${validates.length ? '\n' : ''}${validates
    .map((v, i) => `import * as validator${i} from '${v.replace(inputDir, '.')}/index'`)
    .join('\n')}${controllers.length ? '\n' : ''}${controllers
    .map(
      (ctrl, i) =>
        `import controller${i}${
          ctrl[1] ? `, { middleware as ctrlMiddleware${ctrlMiddleware.indexOf(ctrl)} }` : ''
        } from '${ctrl[0].replace(inputDir, '.')}'`
    )
    .join('\n')}${middlewares.length ? '\n' : ''}${middlewares
    .map((m, i) => `import middleware${i} from '${m.replace(inputDir, '.')}'`)
    .join('\n')}\n\nexport default {\n  name: '/'${text}\n}\n`
}
