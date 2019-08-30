export default (paths: string[]) =>
  process.platform === 'win32'
    ? paths.map(currentPath => currentPath.replace(/(^C:)?\\/g, '/'))
    : paths
