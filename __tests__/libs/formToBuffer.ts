const boundary = '--------------------------sampleBoundary'

const buildStringChunk = ([key, value]: [string, string]) =>
  Buffer.from(
    ['', `Content-Disposition: form-data; name="${key}"`, '', value, `--${boundary}`].join('\r\n'),
    'utf8'
  )

const buildFileChunk = ([key, value]: [string, Buffer]) =>
  Buffer.concat([
    Buffer.from(
      [
        '',
        `Content-Disposition: form-data; name="${key}"; filename="logo.png"`,
        'Content-Type: application/octet-stream',
        '',
        ''
      ].join('\r\n'),
      'utf8'
    ),
    value,
    Buffer.from(`\r\n--${boundary}`, 'utf8')
  ])

export default (formData: [string, string | number | Buffer][]) => {
  const values = [Buffer.from(`--${boundary}`, 'utf8')]

  formData.forEach(entry =>
    values.push(
      /(string|number)/.test(typeof entry[1])
        ? buildStringChunk(entry as [string, string])
        : buildFileChunk(entry as [string, Buffer])
    )
  )

  return { boundary, buffer: Buffer.concat([...values, Buffer.from('--\r\n', 'utf8')]) }
}
