const boundary = '--------------------------sampleBoundary'

const buildStringChunk = ([key, value]: [string, string | number]) =>
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
      entry[1] instanceof Buffer
        ? buildFileChunk(entry as [string, Buffer])
        : buildStringChunk(entry as [string, string | number])
    )
  )

  return { boundary, buffer: Buffer.concat([...values, Buffer.from('--\r\n', 'utf8')]) }
}
