import fileType from 'file-type'

export default (file: Buffer | ArrayBuffer) =>
  `data:${(fileType(file) || { mime: '' }).mime};base64,${
    typeof window === 'undefined'
      ? file.toString('base64')
      : window.btoa(
          [].slice
            .call(new Uint8Array(file))
            .map(bin => String.fromCharCode(bin))
            .join('')
        )
  }`
