# ProbWorksようにカスタマイズしたaspida
aspidaのリポジトリ
https://github.com/aspida/aspida

## 開発の進め方
### openapi2aspidaを改造し、デバックする方法
1. `packages/openapi2aspida`のファイルをいじる
2. `npm run build:all`でbuildする
3. `playground/gulliber-works_spec`で`npm run generate`コマンドを実行する

### aspida/aspida-axios/aspida-swrを改造し、デバックする方法
1. `packages/*`の任意ファイルをいじる
2. `npm run build:all`でbuildする
3. `playground/gulliber-works`で`npm statr`コマンドを実行する

### パッケージを公開する方法
