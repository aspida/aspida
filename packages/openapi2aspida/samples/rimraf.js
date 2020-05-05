// for $ npm run dev:openapi
require('fs')
  .readdirSync(__dirname)
  .filter(n => require('fs').statSync(`${__dirname}/${n}`).isDirectory())
  .forEach(n =>
    require('fs').rmdir(`${__dirname}/${n}`, { recursive: true }, err => {
      if (err) console.log(err)
    })
  )
