# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.14.0](https://github.com/m-mitsuhide/axios-mock-server/compare/v0.13.2...v0.14.0) (2019-10-12)


### Documentation

* fix Dependabot badge ([f190e07](https://github.com/m-mitsuhide/axios-mock-server/commit/f190e07))


### Features

* **cli:** add default input config ([c49f8a0](https://github.com/m-mitsuhide/axios-mock-server/commit/c49f8a0))
* **main:** add auto path through ([da17d79](https://github.com/m-mitsuhide/axios-mock-server/commit/da17d79))

### [0.13.2](https://github.com/m-mitsuhide/axios-mock-server/compare/v0.13.1...v0.13.2) (2019-10-10)


### Refactors

* **axios:** move to devDependencies ([edb860e](https://github.com/m-mitsuhide/axios-mock-server/commit/edb860e))
* **cli:** delete replacePathSepIfWindows ([0547552](https://github.com/m-mitsuhide/axios-mock-server/commit/0547552))

### [0.13.1](https://github.com/m-mitsuhide/axios-mock-server/compare/v0.13.0...v0.13.1) (2019-10-07)


### Bug Fixes

* **main:** correspond es5 for ie11 ([7ba004c](https://github.com/m-mitsuhide/axios-mock-server/commit/7ba004c))
* **package.json:** conflict ([8f9deac](https://github.com/m-mitsuhide/axios-mock-server/commit/8f9deac))

## [0.13.0](https://github.com/m-mitsuhide/axios-mock-server/compare/v0.12.1...v0.13.0) (2019-10-06)


### Bug Fixes

* **cli:** add eslint-disable comment ([8465697](https://github.com/m-mitsuhide/axios-mock-server/commit/8465697))


### Documentation

* update README.md ([9bd4e9a](https://github.com/m-mitsuhide/axios-mock-server/commit/9bd4e9a))


### Features

* **cli:** change $route -> $mock ([4a8f19d](https://github.com/m-mitsuhide/axios-mock-server/commit/4a8f19d))

### [0.12.1](https://github.com/m-mitsuhide/axios-mock-server/compare/v0.12.0...v0.12.1) (2019-10-02)


### Bug Fixes

* **cli:** change route file write rules ([75cf691](https://github.com/m-mitsuhide/axios-mock-server/commit/75cf691))
* **deps:** bump chokidar from 3.2.0 to 3.2.1 ([79f0af0](https://github.com/m-mitsuhide/axios-mock-server/commit/79f0af0))
* **main:** copy response ([0dc3ba3](https://github.com/m-mitsuhide/axios-mock-server/commit/0dc3ba3))

## [0.12.0](https://github.com/m-mitsuhide/axios-mock-server/compare/v0.11.0...v0.12.0) (2019-10-01)


### Bug Fixes

* **deps:** bump chokidar from 3.1.1 to 3.2.0 ([bc22406](https://github.com/m-mitsuhide/axios-mock-server/commit/bc22406))


### Features

* **main:** ignore directory path of baseURL ([acd6cc1](https://github.com/m-mitsuhide/axios-mock-server/commit/acd6cc1))
* **mock server:** add restore method ([0883db8](https://github.com/m-mitsuhide/axios-mock-server/commit/0883db8))


### Refactors

* **test:** add untransformData ([b626f9c](https://github.com/m-mitsuhide/axios-mock-server/commit/b626f9c))

## [0.11.0](https://github.com/m-mitsuhide/axios-mock-server/compare/v0.10.0...v0.11.0) (2019-09-29)


### Bug Fixes

* **deps:** bump chokidar from 3.0.2 to 3.1.1 ([55dd8cd](https://github.com/m-mitsuhide/axios-mock-server/commit/55dd8cd))
* **jest:** ignore examples ([d2a9c75](https://github.com/m-mitsuhide/axios-mock-server/commit/d2a9c75))


### Documentation

* add README.md for Japanese ([5839148](https://github.com/m-mitsuhide/axios-mock-server/commit/5839148))
* fix examples ([93c90ae](https://github.com/m-mitsuhide/axios-mock-server/commit/93c90ae))
* translate README.md ([8c97c12](https://github.com/m-mitsuhide/axios-mock-server/commit/8c97c12))
* update .mockserverrc ([7a963c0](https://github.com/m-mitsuhide/axios-mock-server/commit/7a963c0))
* update README.md ([f72bea6](https://github.com/m-mitsuhide/axios-mock-server/commit/f72bea6))
* update README.md ([ffef998](https://github.com/m-mitsuhide/axios-mock-server/commit/ffef998))


### Features

* **cli:** infer extension and import type ([2a545d4](https://github.com/m-mitsuhide/axios-mock-server/commit/2a545d4))
* **log:** add status ([e1e849d](https://github.com/m-mitsuhide/axios-mock-server/commit/e1e849d))


### Refactors

* **cli:** clarify codes ([e88a43e](https://github.com/m-mitsuhide/axios-mock-server/commit/e88a43e))
* **mockserver:** set-client method ([5f4d9c3](https://github.com/m-mitsuhide/axios-mock-server/commit/5f4d9c3))

## [0.10.0](https://github.com/m-mitsuhide/axios-mock-server/compare/v0.9.0...v0.10.0) (2019-09-11)


### Features

* **arguments:** add params ([c228a5a](https://github.com/m-mitsuhide/axios-mock-server/commit/c228a5a))
* **log:** change output format ([72fb5d4](https://github.com/m-mitsuhide/axios-mock-server/commit/72fb5d4))
* **main:** add log methods ([b49b121](https://github.com/m-mitsuhide/axios-mock-server/commit/b49b121))
* **response:** add Object style for type error ([4f3d8dc](https://github.com/m-mitsuhide/axios-mock-server/commit/4f3d8dc))


### Refactors

* use require function without default in CommonJS ([7fe1c9e](https://github.com/m-mitsuhide/axios-mock-server/commit/7fe1c9e))


### Tests

* add case of method is undefined ([9221979](https://github.com/m-mitsuhide/axios-mock-server/commit/9221979))

## [0.9.0](https://github.com/m-mitsuhide/axios-mock-server/compare/v0.8.1...v0.9.0) (2019-09-08)


### Features

* **mockserver:** remove 'restore' method ([bb186f9](https://github.com/m-mitsuhide/axios-mock-server/commit/bb186f9))

### [0.8.1](https://github.com/m-mitsuhide/axios-mock-server/compare/v0.8.0...v0.8.1) (2019-09-07)


### Bug Fixes

* **CLI:** change path '/aaa/index.js' to '/aaa' ([3667fda](https://github.com/m-mitsuhide/axios-mock-server/commit/3667fda))

## [0.8.0](https://github.com/m-mitsuhide/axios-mock-server/compare/v0.7.0...v0.8.0) (2019-09-07)


### Bug Fixes

* **chokidar:** change watcher config ([0552255](https://github.com/m-mitsuhide/axios-mock-server/commit/0552255))
* **test:** add path pattern ([094d526](https://github.com/m-mitsuhide/axios-mock-server/commit/094d526))


### Features

* **toDataURI:** delete from repository ([8aa7223](https://github.com/m-mitsuhide/axios-mock-server/commit/8aa7223))

## [0.7.0](https://github.com/m-mitsuhide/axios-mock-server/compare/v0.6.0...v0.7.0) (2019-09-04)


### Bug Fixes

* **adapter:** delete utils.ts ([afdcd82](https://github.com/m-mitsuhide/axios-mock-server/commit/afdcd82))
* **main:** add values and params ([adb9384](https://github.com/m-mitsuhide/axios-mock-server/commit/adb9384))


### Features

* **CLI:** extend multiple input ([bd1cdad](https://github.com/m-mitsuhide/axios-mock-server/commit/bd1cdad))
* **main:** add factory ([3942401](https://github.com/m-mitsuhide/axios-mock-server/commit/3942401))
* **main:** delete axios-mock-adapter ([d53aa6c](https://github.com/m-mitsuhide/axios-mock-server/commit/d53aa6c))

## [0.6.0](https://github.com/m-mitsuhide/axios-mock-server/compare/v0.5.0...v0.6.0) (2019-09-01)


### Features

* **NeDB:** delete from dependencies ([65db40d](https://github.com/m-mitsuhide/axios-mock-server/commit/65db40d))

## [0.5.0](https://github.com/m-mitsuhide/axios-mock-server/compare/v0.4.0...v0.5.0) (2019-09-01)


### Bug Fixes

* **main:** transform request data ([1057694](https://github.com/m-mitsuhide/axios-mock-server/commit/1057694))


### Features

* **Nedb:** add async methods ([488e9f6](https://github.com/m-mitsuhide/axios-mock-server/commit/488e9f6))

## [0.4.0](https://github.com/m-mitsuhide/axios-mock-server/compare/v0.3.0...v0.4.0) (2019-08-31)


### Features

* **CLI:** add outputExt to config ([965f292](https://github.com/m-mitsuhide/axios-mock-server/commit/965f292))

## [0.3.0](https://github.com/m-mitsuhide/axios-mock-server/compare/v0.2.0...v0.3.0) (2019-08-30)


### Features

* **CLI:** add 'watch' and 'build' ([45b41b6](https://github.com/m-mitsuhide/axios-mock-server/commit/45b41b6))

## [0.2.0](https://github.com/m-mitsuhide/axios-mock-server/compare/v0.1.0...v0.2.0) (2019-08-28)


### Bug Fixes

* **deps:** [security] bump eslint-utils from 1.4.0 to 1.4.2 ([7f797b5](https://github.com/m-mitsuhide/axios-mock-server/commit/7f797b5))


### Documentation

* fix CHANGELOG.md ([8c91ed1](https://github.com/m-mitsuhide/axios-mock-server/commit/8c91ed1))


### Features

* **cli:** add command line arguments parser ([9e6e24e](https://github.com/m-mitsuhide/axios-mock-server/commit/9e6e24e))
* **main:** change function to class ([248cb18](https://github.com/m-mitsuhide/axios-mock-server/commit/248cb18))

## [0.1.0](https://github.com/m-mitsuhide/axios-mock-server/compare/v0.0.1...v0.1.0) (2019-08-21)


### Documentation

* add badges ([c7d613b](https://github.com/m-mitsuhide/axios-mock-server/commit/c7d613b))
* add GitHub templates ([97a257d](https://github.com/m-mitsuhide/axios-mock-server/commit/97a257d))


### Features

* **change:** response of HTTP methods ([254c1a9](https://github.com/m-mitsuhide/axios-mock-server/commit/254c1a9))
* **changing:** separated datastore ([b5bf246](https://github.com/m-mitsuhide/axios-mock-server/commit/b5bf246))
* **http post:** multipart/form-data ([daaebfa](https://github.com/m-mitsuhide/axios-mock-server/commit/daaebfa))

### 0.0.1 (2019-08-18)


### Bug Fixes

* test ([7c31ad6](https://github.com/m-mitsuhide/axios-mock-server/commit/7c31ad6))
* url params ([a5c4631](https://github.com/m-mitsuhide/axios-mock-server/commit/a5c4631))


### Documentation

* add README.md ([7e6ed38](https://github.com/m-mitsuhide/axios-mock-server/commit/7e6ed38))


### Refactors

* fix implicit 'any' type ([1a9863d](https://github.com/m-mitsuhide/axios-mock-server/commit/1a9863d))
