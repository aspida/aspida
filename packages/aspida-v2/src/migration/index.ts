import fs from 'fs'
import path from 'path'
import type { AspidaConfig } from '../getConfigs'
import { DirentTree, getDirentTree } from './getDirentTree'

const rename = (dir: string) => {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(d => {
    if (d.isDirectory()) {
      if (d.name.startsWith('_')) {
        const newName = path.join(
          dir,
          d.name.replace(/^_(.+?)(?:(@number|@string)(.*))?$/, '[$1$2]$3')
        )
        fs.renameSync(path.join(dir, d.name), newName)
        rename(newName)
      } else {
        rename(path.join(dir, d.name))
      }
    } else {
      if (d.name.startsWith('_')) {
        const newName = path.join(
          dir,
          d.name.replace(/^_(.+?)(?:(@number|@string)(.*)?)?(\..+)$/, '[$1$2]$3$4')
        )
        fs.renameSync(path.join(dir, d.name), newName)
      }
    }
  })
}

const walk = (tree: DirentTree) => {
  tree.children.forEach(c => {
    if (c.isDir) {
      walk(c.tree)
    } else {
      const filePath = path.join(tree.path, c.name)
      fs.writeFileSync(
        filePath,
        "import { AspidaMethods } from 'aspida-v2'\n\n" +
          fs.readFileSync(filePath, 'utf8').replace(
            c.$textForApiTypes,
            `${c.doc ? `${c.doc}\n` : ''}export type Methods = AspidaMethods<{
${c.methods
  .map(
    m => `${m.doc ? `  ${m.doc}\n` : ''}  ${m.name}: {
    req: {
${
  m.props.query
    ? `${m.props.query.doc ? `      ${m.props.query.doc}\n` : ''}      query${
        m.props.query.hasQuestion ? '?' : ''
      }: ${m.props.query.value}`
    : ''
}
${
  m.props.reqHeaders
    ? `${m.props.reqHeaders.doc ? `      ${m.props.reqHeaders.doc}\n` : ''}      headers${
        m.props.reqHeaders.hasQuestion ? '?' : ''
      }: ${m.props.reqHeaders.value}`
    : ''
}
${
  m.props.reqFormat
    ? `${m.props.reqFormat.doc ? `      ${m.props.reqFormat.doc}\n` : ''}      format: ${
        m.props.reqFormat.value
      }`
    : ''
}
${
  m.props.reqBody
    ? `${m.props.reqBody.doc ? `      ${m.props.reqBody.doc}\n` : ''}      body${
        m.props.reqBody.hasQuestion ? '?' : ''
      }: ${m.props.reqBody.value}`
    : ''
}
    }
    res: {
${
  m.props.status
    ? `${m.props.status.doc ? `      ${m.props.status.doc}\n` : ''}      status: ${
        m.props.status.value
      }`
    : ''
}
${
  m.props.resHeaders
    ? `${m.props.resHeaders.doc ? `      ${m.props.resHeaders.doc}\n` : ''}      headers${
        m.props.resHeaders.hasQuestion ? '?' : ''
      }: ${m.props.resHeaders.value}`
    : ''
}
${
  m.props.resBody
    ? `${m.props.resBody.doc ? `      ${m.props.resBody.doc}\n` : ''}      body${
        m.props.resBody.hasQuestion ? '?' : ''
      }: ${m.props.resBody.value}`
    : ''
}
    }
  }`
  )
  .join('\n')
  .replace(/\n+/g, '\n')
  .replace(/ {4}(req|res): {\n {4}}\n/g, '')}
}>`
          ),
        'utf8'
      )
    }
  })
}

export default ({ input }: AspidaConfig) => {
  rename(input)
  walk(getDirentTree(input))
}
