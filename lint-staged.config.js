module.exports = {
  '**/*.ts': () => 'tsc --project tsconfig.json --noEmit',
  '*.{js,ts}': ['eslint --fix --no-ignore', 'git add'],
  '*.{json,md,yml}': ['prettier --write', 'git add']
}
