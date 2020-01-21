export default (indent: string, importName: string, newUrl: string, trailingSlash: boolean) => {
  const quotation = newUrl.includes('${') || importName ? '`' : "'"
  return `${indent}  $get: (${
    importName ? `query?: ${importName}` : ''
  }) => ${quotation}\${prefix}${newUrl}${trailingSlash ? '/' : ''}${
    importName ? `\${query ? \`?\${dataToURLString(query)}\` : ''}` : ''
  }${quotation}`
}
