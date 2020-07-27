import fs from 'fs'
import { Method, parse } from './parseInterface'

type FileData = {
  name: string
  isDir: false
  methods: Method[]
}

type DirData = {
  name: string
  isDir: true
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
        const methods = parse(fs.readFileSync(`${input}/${dirent.name}`, 'utf8'), 'Methods')

        if (!methods || methods.every(({ props }) => !Object.keys(props).length)) return

        tree.children.push({ name: dirent.name, isDir: false, methods })
      }
    })

  return tree
}
