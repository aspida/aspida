# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.13.0](https://github.com/aspidajs/aspida/compare/v0.12.2...v0.13.0) (2020-02-01)


### Features

* **aspida:** delete option exports ([9ff50b3](https://github.com/aspidajs/aspida/commit/9ff50b392b4337eb662d47ad282129b3516646fc))
* **openapi:** support deprecated option ([67cf07b](https://github.com/aspidajs/aspida/commit/67cf07bc33648274679e0aeef3ecfbdc3ec788e5))
* **openapi:** support required option ([d24d694](https://github.com/aspidajs/aspida/commit/d24d6943c7345f9c8fc13f1d738091804fff7e0e))


### Bug Fixes

* **openapi:** remove dir before build ([c1689f4](https://github.com/aspidajs/aspida/commit/c1689f47a8c70811e75a692abbe6399ceb6f57a9))

### [0.12.2](https://github.com/aspidajs/aspida/compare/v0.12.1...v0.12.2) (2020-01-28)


### Features

* **mock:** add middleware ([de47b61](https://github.com/aspidajs/aspida/commit/de47b61131aa31beba744d814f412681712971df))
* **openapi:** support openapi.json of strapi ([3d18e16](https://github.com/aspidajs/aspida/commit/3d18e1662bdf895b752d4535b480c041bc100c53))


### Bug Fixes

* **aspida:** support files with the same name ([d2a8ca4](https://github.com/aspidajs/aspida/commit/d2a8ca4b137234ca79d1590dd36e943d1d87fad9))
* **deps:** bump rimraf from 3.0.0 to 3.0.1 ([8ac2c61](https://github.com/aspidajs/aspida/commit/8ac2c613ca131b804c57549287243063362805a9))
* **mock:** add method param and mockMiddleware ([2ff522b](https://github.com/aspidajs/aspida/commit/2ff522bbd1c246521136fb2273ce3c4dd3438391))

### [0.12.1](https://github.com/aspidajs/aspida/compare/v0.12.0...v0.12.1) (2020-01-22)


### Features

* **pathpida:** delete import from $path.ts ([0ae29a7](https://github.com/aspidajs/aspida/commit/0ae29a75587898eb7085d4429a6372134850ff1d))
* **pathpida:** delete question from query ([3388adf](https://github.com/aspidajs/aspida/commit/3388adfe482d6b82fcb0fb0c55b037cee5688823))


### Bug Fixes

* **mock:** fix baseURL and release v0.2.3 ([c32c932](https://github.com/aspidajs/aspida/commit/c32c9329afb77ef553d4125a209a449dae7d9967))
* **mock:** release v0.2.2 ([cb97a53](https://github.com/aspidajs/aspida/commit/cb97a5368101c458255db538462ae4082a1eeb60))

## [0.12.0](https://github.com/aspidajs/aspida/compare/v0.11.0...v0.12.0) (2020-01-20)


### Features

* **openapi:** integrate openapi 3.0 ([642c7a4](https://github.com/aspidajs/aspida/commit/642c7a4e7e3886bc2ea87ecda5feb1358ce6c647))
* add aspida-path ([d798eba](https://github.com/aspidajs/aspida/commit/d798eba851e962703c91ae54b7a0710ab06e2b12))
* add trailingSlash and refactor files ([5afb85c](https://github.com/aspidajs/aspida/commit/5afb85ca53418b80867895e94a281714fdad48d3))


### Bug Fixes

* **mock:** add trailingSlash ([8b90f83](https://github.com/aspidajs/aspida/commit/8b90f8337a8f69340e38284eb428d999df05eb79))
* **mock:** separate mock client ([954ac8f](https://github.com/aspidajs/aspida/commit/954ac8f3855034d7ef6da76cf4f56fa43bc04c6a))

## [0.11.0](https://github.com/aspidajs/aspida/compare/v0.10.0...v0.11.0) (2020-01-18)


### Features

* **axios:** update for mock ([000a6fd](https://github.com/aspidajs/aspida/commit/000a6fd343672d083f42c3bbcd0004611a545c7b))
* **mock:** optimize for aspida ([c1dc848](https://github.com/aspidajs/aspida/commit/c1dc848864c3a02df88bfa4c2f99cf19d0bd3073))
* remake axios-mock-server to aspida-mock ([fa99ad0](https://github.com/aspidajs/aspida/commit/fa99ad0aca3db0be1dc5f3240afaf44753c6330a))


### Bug Fixes

* update tests ([5323dd2](https://github.com/aspidajs/aspida/commit/5323dd28573b6353b5599e360b38e1cbcdafdfb2))


### Refactors

* **aspida:** delete optionToRequest ([760b1f5](https://github.com/aspidajs/aspida/commit/760b1f5ce04fb41a35a887a0a4979e30a8f22785))

## [0.10.0](https://github.com/aspidajs/aspida/compare/v0.9.0...v0.10.0) (2020-01-12)


### Features

* add baseURL to config ([b150a3d](https://github.com/aspidajs/aspida/commit/b150a3d2c02907d0882a5984681f55e4fa8b89bf))
* **aspida:** change config file for common use ([08d3ed5](https://github.com/aspidajs/aspida/commit/08d3ed5638746fc883d4a25773222cadf2d80b54))


### Bug Fixes

* lint ([10de823](https://github.com/aspidajs/aspida/commit/10de823b224582d9dd0e21dbf8c3420a94fe22d1))

## [0.9.0](https://github.com/aspidajs/aspida/compare/v0.8.0...v0.9.0) (2020-01-09)


### Features

* add aspida.config.js ([dc97979](https://github.com/aspidajs/aspida/commit/dc97979f1932dd29e5fcd5b573dfe0fc24d9ecfd))


### Bug Fixes

* **ci:** publish command ([3b96b02](https://github.com/aspidajs/aspida/commit/3b96b02c1ff417c6db02d72e88cae7bcdedc24bc))


### Refactors

* **aspida:** delete URLSearchParams polyfill ([53b2184](https://github.com/aspidajs/aspida/commit/53b2184c5870404f4b8ffa711309657bbfe29b87))
* **mock:** delete URLSearchParams polyfill ([d6596ed](https://github.com/aspidajs/aspida/commit/d6596ed982b1a0cc6773ca92272b552f8cd8b7fd))


### Documentation

* **aspida:** rewirte for config file ([04c65f4](https://github.com/aspidajs/aspida/commit/04c65f43a4833e5e6b3872e5312977f1a8d075e3))

## [0.8.0](https://github.com/aspidajs/aspida/compare/v0.7.0...v0.8.0) (2020-01-07)


### Features

* add aspida clients ([2dd9fc2](https://github.com/aspidajs/aspida/commit/2dd9fc2540f7959145e72a9b4a3b79baf35e3819))
* redesign for aspida client ([0ee43fd](https://github.com/aspidajs/aspida/commit/0ee43fdc3656cde0f725ab236e3d64ef6f78030c))


### Bug Fixes

* typecheck config ([2d9b0f5](https://github.com/aspidajs/aspida/commit/2d9b0f56c487fb73145efca782cd82e8573a97f9))


### Refactors

* merge npm scripts ([ac070a0](https://github.com/aspidajs/aspida/commit/ac070a011273710cf98d3180cf9e3232e270cf05))
* monorepo ([d97babc](https://github.com/aspidajs/aspida/commit/d97babced029dcbc06c391358ae2bcecb99636f5))
* monorepo for aspida ([75b12ef](https://github.com/aspidajs/aspida/commit/75b12efdf6a6a704bcc2b1e1956a9d28e8d5dad7))
* use ts-morph ([3d10079](https://github.com/aspidajs/aspida/commit/3d100792a561cf3aa457da83e0db462c632d58ad))

## [0.7.0](https://github.com/aspidajs/aspida/compare/v0.6.2...v0.7.0) (2019-11-23)


### Features

* **cli:** delete baseurl option ([9fc0bf3](https://github.com/aspidajs/aspida/commit/9fc0bf36c657a78175369422d7b6814855a87ab7))

### [0.6.2](https://github.com/aspidajs/aspida/compare/v0.6.1...v0.6.2) (2019-11-01)


### Bug Fixes

* control the comma when index.ts is alone ([4d668d1](https://github.com/aspidajs/aspida/commit/4d668d1))

### [0.6.1](https://github.com/aspidajs/aspida/compare/v0.6.0...v0.6.1) (2019-10-25)


### Bug Fixes

* **builder:** ignore  files other than ts ([17ca0a8](https://github.com/aspidajs/aspida/commit/17ca0a8))


### Documentation

* add contribution section and how to build on local ([fed3110](https://github.com/aspidajs/aspida/commit/fed3110))
* add how to watch file changes ([cb15b3d](https://github.com/aspidajs/aspida/commit/cb15b3d))


### Refactors

* define command interface ([428922d](https://github.com/aspidajs/aspida/commit/428922d))
* define template interface which is used to build and write ([0a7cf33](https://github.com/aspidajs/aspida/commit/0a7cf33))
* implements build command objects ([47638c0](https://github.com/aspidajs/aspida/commit/47638c0))
* implements command interface ([1ac82b7](https://github.com/aspidajs/aspida/commit/1ac82b7))
* refactor cli interface to explicit what argument are usable ([7812353](https://github.com/aspidajs/aspida/commit/7812353))
* rename command class name for build ([eaf2c6d](https://github.com/aspidajs/aspida/commit/eaf2c6d))
* return early to make code nest shallow ([21f83de](https://github.com/aspidajs/aspida/commit/21f83de))
* return early to make code nest shallow ([a054ee5](https://github.com/aspidajs/aspida/commit/a054ee5))

## [0.6.0](https://github.com/aspidajs/aspida/compare/v0.5.0...v0.6.0) (2019-10-20)


### Bug Fixes

* **audit:** update modules ([4ceb902](https://github.com/aspidajs/aspida/commit/4ceb902))


### Features

* **builder:** implement typed path values ([c7d13c1](https://github.com/aspidajs/aspida/commit/c7d13c1))

## [0.5.0](https://github.com/aspidajs/aspida/compare/v0.4.0...v0.5.0) (2019-10-19)


### Features

* **methods:** determine question flag of config ([8ba6336](https://github.com/aspidajs/aspida/commit/8ba6336))


### Refactors

* template builder ([fcc20ee](https://github.com/aspidajs/aspida/commit/fcc20ee))

## [0.4.0](https://github.com/aspidajs/aspida/compare/v0.3.1...v0.4.0) (2019-10-13)


### Features

* **builder:** format url string ([448b5f7](https://github.com/aspidajs/aspida/commit/448b5f7))

### [0.3.1](https://github.com/aspidajs/aspida/compare/v0.3.0...v0.3.1) (2019-10-13)


### Bug Fixes

* **builder:** add single quotes to property names ([516191f](https://github.com/aspidajs/aspida/commit/516191f))

### [0.3.0](https://github.com/aspidajs/aspida/compare/v0.2.0...v0.3.0) (2019-10-12)


### Features

* **cli:** correspond endpoint extension ([d3f8aeb](https://github.com/aspidajs/aspida/commit/d3f8aeb))

### [0.2.0](https://github.com/aspidajs/aspida/compare/v0.1.2...v0.2.0) (2019-10-10)


### Features

* **template:** export ApiInstance type ([bab8514](https://github.com/aspidajs/aspida/commit/bab8514))


### Refactors

* delete replacePathSepIfWindows ([07b05c7](https://github.com/aspidajs/aspida/commit/07b05c7))

### 0.1.2 (2019-10-10)


### Bug Fixes

* **tsconfig:** change target to es5 ([e8ea865](https://github.com/aspidajs/aspida/commit/e8ea865))

### 0.1.1 (2019-10-09)


### Bug Fixes

* **config:** change default input to apis ([7eb65c7](https://github.com/aspidajs/aspida/commit/7eb65c7))
* **template:** add AxiosInstance type ([5828743](https://github.com/aspidajs/aspida/commit/5828743))

### 0.1.0 (2019-10-08)


### Bug Fixes

* **test:** update $api.ts snapshot ([daaf4c5](https://github.com/aspidajs/aspida/commit/daaf4c5))


### Features

* **builder:** add index.ts file ([817bf07](https://github.com/aspidajs/aspida/commit/817bf07))
* **cli:** first commit ([962f4dd](https://github.com/aspidajs/aspida/commit/962f4dd))
* **test:** add $api.ts snapshot ([4453e6a](https://github.com/aspidajs/aspida/commit/4453e6a))
