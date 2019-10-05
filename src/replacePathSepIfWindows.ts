export default (path: string) =>
  process.platform === 'win32' ? path.replace(/(^C:)?\\/g, '/') : path
