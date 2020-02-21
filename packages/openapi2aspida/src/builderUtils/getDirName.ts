export default (text: string /* , methods: OpenAPIV3.PathItemObject */) => {
  if (text === '*') return '_any'
  if (!/^{/.test(text)) return text

  const valName = text.slice(1, -1)
  // const method = methodNames.find(name => methods[name]?.parameters?.find((param) => !isRefObject(param) && param.name === valName && param.in === 'path'))
  // return `_${valName}${method ? `@${type2value(methods[method]!.parameters!.filter((param) => !isRefObject(param) && param.name === valName && param.in === 'path')[0], '')}` : ''}`
  return `_${valName}`
}
