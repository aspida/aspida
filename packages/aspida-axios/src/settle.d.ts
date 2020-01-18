declare module 'axios/lib/core/settle' {
  const settle: (resolve: (res: any) => void, reject: (reason: any) => void, res: any) => void
  export = settle
}
