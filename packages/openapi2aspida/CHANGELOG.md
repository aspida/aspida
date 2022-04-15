# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.19.0](https://github.com/aspida/openapi2aspida/compare/v0.18.0...v0.19.0) (2022-03-11)

### Features

- add "or undefined" explicitly to support exactOptionalPropertyTypes (https://github.com/aspida/openapi2aspida/pull/187)


## [0.18.0](https://github.com/aspida/openapi2aspida/compare/v0.17.0...v0.18.0) (2022-03-07)


### Bug Fixes

* drop support for current required behavior and just provide the conversion follow specs (https://github.com/aspida/openapi2aspida/pull/179)
* escape description comment (https://github.com/aspida/openapi2aspida/pull/179)
* fix when query param to be required (https://github.com/aspida/openapi2aspida/pull/179#r817536624)

## [0.17.0](https://github.com/aspida/openapi2aspida/compare/v0.16.5...v0.17.0) (2022-01-13)


### Features

* add gitignore ([45ea965](https://github.com/aspida/openapi2aspida/commit/45ea965c1c646b4be9ed965b55e2135d2f100160))


### Bug Fixes

* include response schemas that has no application/ prefixed content-typent-type ([#154](https://github.com/aspida/openapi2aspida/issues/154)) ([3692baf](https://github.com/aspida/openapi2aspida/commit/3692baff8e98a036f8427a8fc41c74f7ef1f8034))


### Documentation

* add Description about outuput dir option ([4bbac97](https://github.com/aspida/openapi2aspida/commit/4bbac97fd280819ee1fbc947d5a3ebf566b2a743))

### [0.16.5](https://github.com/aspida/openapi2aspida/compare/v0.16.4...v0.16.5) (2021-07-22)


### Bug Fixes

* array one of ([955105f](https://github.com/aspida/openapi2aspida/commit/955105f3c5b4b91d8db5a004c9a61487d21598fd))

### [0.16.4](https://github.com/aspida/openapi2aspida/compare/v0.16.3...v0.16.4) (2021-05-15)


### Bug Fixes

* convert names that begin with a number ([9b2dcfa](https://github.com/aspida/openapi2aspida/commit/9b2dcfa63f821bf106acbc82cbfaf474707c5731))
* update aspida@1.7.0 ([89e28db](https://github.com/aspida/openapi2aspida/commit/89e28dbb562213cd0872f99bbc2ecfa1b383d0b7))

### [0.16.3](https://github.com/aspida/openapi2aspida/compare/v0.16.2...v0.16.3) (2021-04-20)


### Bug Fixes

* support application/* content of reqBody ([71bb213](https://github.com/aspida/openapi2aspida/commit/71bb213d9f4e86fba1acc8ddc464456d23dd6d7b))

### [0.16.2](https://github.com/aspida/openapi2aspida/compare/v0.16.1...v0.16.2) (2021-04-16)


### Bug Fixes

* support binary format of response ([22ccc37](https://github.com/aspida/openapi2aspida/commit/22ccc377ce24f5227036bcee6807b2ba78bf6a95))

### [0.16.1](https://github.com/aspida/openapi2aspida/compare/v0.16.0...v0.16.1) (2021-03-16)


### Bug Fixes

* change type name rule to UpperCamelCase ([5665b3d](https://github.com/aspida/openapi2aspida/commit/5665b3d38111b44800ce36bde6356de60ba80b10))

## [0.16.0](https://github.com/aspida/openapi2aspida/compare/v0.15.3...v0.16.0) (2021-03-15)


### Features

* change Blob to File | ReadStream ([990a31a](https://github.com/aspida/openapi2aspida/commit/990a31a29763afd653dbd87d559de35da6d2c48e))
* convert description to tsdoc ([1e5aef7](https://github.com/aspida/openapi2aspida/commit/1e5aef774e4f69c74a705d9ad0fb2c1aae1658d4))


### Bug Fixes

* rename [@types](https://github.com/types).ts to @types/index.ts ([e6cba05](https://github.com/aspida/openapi2aspida/commit/e6cba05d62c3320ca3c51fb6f6d2f634a349bb62))
* support type only import ([defe3c5](https://github.com/aspida/openapi2aspida/commit/defe3c5c0621d09f036f43929d880b51c3586282))
* update aspida@1.6.3 ([9d730c9](https://github.com/aspida/openapi2aspida/commit/9d730c9b483176a0d2e0838d3327a4c51ebd79c2))

### [0.15.3](https://github.com/aspida/openapi2aspida/compare/v0.15.2...v0.15.3) (2021-02-09)


### Bug Fixes

* update aspida@1.4.1 ([a7f1053](https://github.com/aspida/openapi2aspida/commit/a7f10537e2c946d146dcc14497a98563f9049d69))

### [0.15.2](https://github.com/aspida/openapi2aspida/compare/v0.15.1...v0.15.2) (2021-02-04)


### Bug Fixes

* add js-yaml to dependencies ([cb2540f](https://github.com/aspida/openapi2aspida/commit/cb2540f79bd1f3652193f03109aead446a1727d3))
* update swagger2openapi@7.0.5 ([10504ce](https://github.com/aspida/openapi2aspida/commit/10504ce6ae1f57de591b5518b4a3dfd742bb88f3))

### [0.15.1](https://github.com/aspida/openapi2aspida/compare/v0.15.0...v0.15.1) (2021-01-22)


### Bug Fixes

* update aspida and openapi-types ([a9cde95](https://github.com/aspida/openapi2aspida/commit/a9cde950cd2939418cf8779850a1a1529b0a9ab3))

## [0.15.0](https://github.com/aspida/openapi2aspida/compare/v0.14.0...v0.15.0) (2021-01-06)


### Features

* update aspida@1.2.1 ([965f754](https://github.com/aspida/openapi2aspida/commit/965f754939ab5ae702154d3bbafddc31cddd24ab))

## [0.14.0](https://github.com/aspida/openapi2aspida/compare/v0.13.0...v0.14.0) (2020-11-25)


### ⚠ BREAKING CHANGES

* change reqHeaders to optional

### Features

* add nullable ([1ff57a0](https://github.com/aspida/openapi2aspida/commit/1ff57a006b49f98e3fca4b8323a5ba9235db87e2))
* change reqHeaders to optional ([25c94f3](https://github.com/aspida/openapi2aspida/commit/25c94f3c65731c108592d1a2195fc35dd1def8b3))

## [0.13.0](https://github.com/aspida/openapi2aspida/compare/v0.12.0...v0.13.0) (2020-11-14)


### ⚠ BREAKING CHANGES

* change property without required to strict

### Features

* change property without required to strict ([8452b49](https://github.com/aspida/openapi2aspida/commit/8452b49aeb20a6c053990d70df8a9ea269faa84f))

## [0.12.0](https://github.com/aspida/openapi2aspida/compare/v0.11.0...v0.12.0) (2020-11-07)


### Features

* update aspida@0.22.2 ([e95a13b](https://github.com/aspida/openapi2aspida/commit/e95a13bd720651a78dfbf42c7ceb1d1f14e297c9))


### Bug Fixes

* convert allOf/oneOf/anyOf ([7cccbfb](https://github.com/aspida/openapi2aspida/commit/7cccbfb6fd75c29ddc4e16067c359120f2fb8763))

## [0.11.0](https://github.com/aspida/openapi2aspida/compare/v0.10.1...v0.11.0) (2020-09-02)


### Features

* update aspida@0.21.0 ([c3c9976](https://github.com/aspida/openapi2aspida/commit/c3c9976db1d06fb8b8e7e43fa765073a5d19ed00))

### [0.10.1](https://github.com/aspida/openapi2aspida/compare/v0.10.0...v0.10.1) (2020-08-27)


### Bug Fixes

* improve of yaml discrimination ([d663ba4](https://github.com/aspida/openapi2aspida/commit/d663ba451d858aeab06b6c3e5c2bbf81844d7365))


### Documentation

* update README ([52becb9](https://github.com/aspida/openapi2aspida/commit/52becb9f5264f26b9db7a13da7eab1edd60f36a0))

## [0.10.0](https://github.com/aspida/openapi2aspida/compare/v0.9.0...v0.10.0) (2020-07-30)


### ⚠ BREAKING CHANGES

* remove aspida-mock supporting

### Features

* remove aspida-mock supporting ([76dde8d](https://github.com/aspida/openapi2aspida/commit/76dde8d5eb2bfbe7ffe6dd57d66f42e0afb34de4))
* update aspida ([5c2adf2](https://github.com/aspida/openapi2aspida/commit/5c2adf2c503820c21b2d1890133fc13efbb197b4))


### Documentation

* update README ([1906088](https://github.com/aspida/openapi2aspida/commit/19060884421f5647d1cb0a19088fc7ad6aa3db06))

## [0.9.0](https://github.com/aspida/openapi2aspida/compare/v0.8.0...v0.9.0) (2020-06-26)


### Features

* rename hoge.ts to hoge/index.ts ([0cd3fec](https://github.com/aspida/openapi2aspida/commit/0cd3fecf3964aabe97769719290645328c2d07e5))
* update aspida@0.19.2 ([817d128](https://github.com/aspida/openapi2aspida/commit/817d12867611e98c73df9d87bf3ae2d3abfb7039))

## [0.8.0](https://github.com/aspida/openapi2aspida/compare/v0.7.1...v0.8.0) (2020-06-15)


### ⚠ BREAKING CHANGES

* update aspida@0.18.0

### Features

* update aspida@0.18.0 ([61d8596](https://github.com/aspida/openapi2aspida/commit/61d8596dc66a7bfd4dda7fb9d619e7e7af71c4fa))

### [0.7.1](https://github.com/aspida/openapi2aspida/compare/v0.7.0...v0.7.1) (2020-06-07)


### Bug Fixes

* support local file refs ([7b69860](https://github.com/aspida/openapi2aspida/commit/7b69860e6d3071f623c8366a17f1fe77717d7a92))

## [0.7.0](https://github.com/aspida/openapi2aspida/compare/v0.6.1...v0.7.0) (2020-06-06)


### Features

* support external refs ([7cbd9be](https://github.com/aspida/openapi2aspida/commit/7cbd9be2b401e9e15021110c87edf0c29f6f61d2))
