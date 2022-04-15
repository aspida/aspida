import https from 'https'
import http from 'http'
import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import { OpenAPIV3 } from 'openapi-types'

const getText = (url: string) =>
  new Promise<string>(resolve => {
    ;(url.startsWith('https') ? https : http)
      .get(url, res => {
        let body = ''
        res.setEncoding('utf8')

        res.on('data', chunk => {
          body += chunk
        })

        res.on('end', () => {
          resolve(body)
        })
      })
      .on('error', e => {
        console.log(`Could not get: ${url}\n`, e)
      })
  })

type DocType = Record<string, any>
type DocInfo = { url: string; doc: DocType }
const hasExternalRegExp = /"\$ref":"[^#].+?"/g

const fetchExternalDocs = async (docs: DocType, inputDir: string) => {
  const docList: DocInfo[] = []
  const fetchingUrls: string[] = []

  const fetchDocs = (d: DocType, input: string) =>
    Promise.all(
      (JSON.stringify(d).match(hasExternalRegExp) ?? []).map(async ref => {
        const [, url] = ref.match(/"\$ref":"(.+?)[#"]/)!

        if (fetchingUrls.includes(url)) return
        fetchingUrls.push(url)

        const filePath = url.startsWith('http') ? url : path.posix.join(path.dirname(input), url)

        const text = await (filePath.startsWith('http')
          ? getText(filePath)
          : fs.promises.readFile(filePath, 'utf8'))
        const doc: DocType = filePath.endsWith('.json') ? JSON.parse(text) : yaml.load(text)
        docList[fetchingUrls.indexOf(url)] = { url, doc }

        await fetchDocs(doc, filePath)
      })
    )

  await fetchDocs(docs, inputDir)
  return docList
}

const getComponentInfo = (docList: DocInfo[], url: string, prop: string) => {
  const data = docList.find(d => d.url === url)!.doc
  const target = prop ? prop.split('/').reduce((prev, current) => prev[current], data) : data

  if (target.name) return { type: 'parameters', data: target }
  return { type: 'schemas', data: target }
}

const genExternalTypeName = (docList: DocInfo[], url: string, prop: string) =>
  `External${docList.findIndex(d => d.url === url)}${prop ? `_${prop.split('/').pop()}` : ''}`

const resolveExternalDocs = async (docs: OpenAPIV3.Document, inputDir: string) => {
  const externalDocs = await fetchExternalDocs(docs, inputDir)
  const componentsInfoList: { url: string; prop: string; name: string }[] = []
  const replacedExternalDocs = externalDocs.map((selfDoc: DocInfo) => {
    let docsString = JSON.stringify(selfDoc.doc)
    ;(docsString.match(/"\$ref":".+?"/g) ?? []).forEach(refs => {
      const targetText = refs.replace('"$ref":"', '').slice(0, -1)
      const [urlBase, propBase = '/'] = targetText.split('#')
      const url = urlBase || selfDoc.url
      const prop = propBase.slice(1)
      const info = getComponentInfo(externalDocs, url, prop)
      const name = genExternalTypeName(externalDocs, url, prop)
      docsString = docsString.replace(targetText, `#/components/${info.type}/${name}`)
      componentsInfoList.push({ url, prop, name })
    })

    return { url: selfDoc.url, doc: JSON.parse(docsString) }
  })

  return {
    externalDocs: replacedExternalDocs,
    components: componentsInfoList.reduce((prev, { url, prop, name }) => {
      const info = getComponentInfo(replacedExternalDocs, url, prop)
      return { ...prev, [info.type]: { ...prev[info.type], [name]: info.data } }
    }, {} as DocType)
  }
}

export default async (docs: OpenAPIV3.Document, inputDir: string): Promise<OpenAPIV3.Document> => {
  const { externalDocs, components } = await resolveExternalDocs(docs, inputDir)

  let docsString = JSON.stringify(docs)
  ;(docsString.match(hasExternalRegExp) ?? []).forEach(refs => {
    const targetText = refs.replace('"$ref":"', '').slice(0, -1)
    const [url, propBase = '/'] = targetText.split('#')
    const prop = propBase.slice(1)

    const info = getComponentInfo(externalDocs, url, prop)
    components[info.type] = components[info.type] || {}
    const name = genExternalTypeName(externalDocs, url, prop)
    Object.assign(components[info.type], { [name]: info.data })
    docsString = docsString.replace(targetText, `#/components/${info.type}/${name}`)
  })
  const resolved: OpenAPIV3.Document = JSON.parse(docsString)
  resolved.components = resolved.components || {}
  ;(Object.keys(components) as (keyof OpenAPIV3.ComponentsObject)[]).forEach(key => {
    resolved.components![key] = {
      ...resolved.components![key],
      ...components[key]
    }
  })

  return resolved
}
