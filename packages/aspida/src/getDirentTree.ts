import fs from 'fs'
import { Doc, Method, parse } from './parseInterface'

export type FileData = {
  name: string
  isDir: false
  methods: Method[]
  doc: Doc | undefined
  $textForApiTypes: string
}

type DirData = {
  name: string
  isDir: true
  // eslint-disable-next-line no-use-before-define
  tree: DirentTree
}

export type DirentTree = { path: string; children: (FileData | DirData)[] }

export const getDirentTree = (input: string) => {
  const tree: DirentTree = { path: input, children: [] }

  fs.readdirSync(input, { withFileTypes: true })
    .filter(dirent => !dirent.name.startsWith('$') && !dirent.name.startsWith('@'))
    .sort((a, b) => (a.name < b.name ? -1 : 1))
    .forEach(dirent => {
      if (dirent.isDirectory()) {
        tree.children.push({
          name: dirent.name,
          isDir: true,
          tree: getDirentTree(`${input}/${dirent.name}`)
        })
      } else if (dirent.name.endsWith('.ts')) {
        const value = parse(fs.readFileSync(`${input}/${dirent.name}`, 'utf8'), 'Methods')

        if (!value?.methods.some(({ props }) => Object.keys(props).length)) return

        tree.children.push({
          name: dirent.name,
          isDir: false,
          ...value
        })
      }
    })

  return tree
}
