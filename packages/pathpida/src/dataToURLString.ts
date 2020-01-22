export default `const encode = (str: Parameters<typeof encodeURIComponent>[0]) =>
  encodeURIComponent(str).replace(
    /[!'()~]|%20|%00/g,
    match =>
      (({
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+',
        '%00': '\\x00'
      } as Record<string, string>)[match])
  )

const dataToURLString = (data: Record<string, any>) =>
  Object.keys(data)
    .map(key =>
      Array.isArray(data[key])
        ? data[key].map((v: string) => \`\${encode(key)}=\${encode(v)}\`).join('&')
        : \`\${encode(key)}=\${encode(data[key])}\`
    )
    .join('&')
`
