import * as fs from 'fs';
import * as path from 'path';

const version = process.argv[2].split('v')[1];

console.log(process.argv, version);

fs.readdirSync(path.join(__dirname, '../packages')).forEach(dir => {
  const jsonPath = path.join(__dirname, '../packages', dir, 'package.json');
  const packageJson = require(jsonPath);
  const json = {
    ...packageJson,
    version,
    ...(dir !== 'aspida'
      ? { peerDependencies: { aspida: `^${version}`, ...packageJson.peerDependencies } }
      : {}),
  };

  fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2), 'utf8');
});
