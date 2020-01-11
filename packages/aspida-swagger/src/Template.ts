export interface Template {
  baseURL: string
  types?: string
  files: {
    file: string[]
    methods: string
  }[]
}
