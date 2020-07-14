# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.19.4](https://github.com/aspida/aspida/compare/v0.19.3...v0.19.4) (2020-06-27)


### Bug Fixes

* delete default input "server/api" ([24cd1af](https://github.com/aspida/aspida/commit/24cd1af4b7d6a709f57982dc5903aaf96f1fd0ee))
* ignore comma when parsing ([3a365fe](https://github.com/aspida/aspida/commit/3a365fe8c763dadb79966339cceac2121398420a))

### [0.19.3](https://github.com/aspida/aspida/compare/v0.19.2...v0.19.3) (2020-06-26)


### Bug Fixes

* remove 'index' from import path ([7889f6a](https://github.com/aspida/aspida/commit/7889f6a5a4779e080f8769a83415e21dded05fac))


### Documentation

* fix sample code ([79b3e62](https://github.com/aspida/aspida/commit/79b3e62cfbfe47296ccc25ea6684444a70641384))

### [0.19.2](https://github.com/aspida/aspida/compare/v0.19.1...v0.19.2) (2020-06-25)


### Bug Fixes

* prefix pattern ([c127df3](https://github.com/aspida/aspida/commit/c127df32ae06fd5e1108606064d088e2ebc025ec))

### [0.19.1](https://github.com/aspida/aspida/compare/v0.19.0...v0.19.1) (2020-06-25)


### Bug Fixes

* basePath ([87f1d67](https://github.com/aspida/aspida/commit/87f1d672c771239ef48129f7598edd74772e2053))

## [0.19.0](https://github.com/aspida/aspida/compare/v0.18.1...v0.19.0) (2020-06-25)


### Features

* add outputEachDir option to config ([6122a21](https://github.com/aspida/aspida/commit/6122a2167972e501260a943da44d5b11c8c655ae))
* assign strings to variable for uglify ([5b92af1](https://github.com/aspida/aspida/commit/5b92af1745269b16337b0d85c65cc6fecbffb1d0))


### Refactors

*  separate fs dependency from core logic ([2842e61](https://github.com/aspida/aspida/commit/2842e6182051fa6514504dbd07039ac1772a8091))


### Documentation

* add options and tips ([0c9cbcf](https://github.com/aspida/aspida/commit/0c9cbcfb310d3d10c638a6e63826eed0170a3f0e))

### [0.18.1](https://github.com/aspida/aspida/compare/v0.18.0...v0.18.1) (2020-06-19)


### Bug Fixes

* create imports path ([a14226a](https://github.com/aspida/aspida/commit/a14226a2cba01a5065eb65893e1beae48edf15c7))

## [0.18.0](https://github.com/aspida/aspida/compare/v0.17.0...v0.18.0) (2020-06-15)


### ⚠ BREAKING CHANGES

* change property name from data to body

### Features

* add default input dirs ([e9f7a18](https://github.com/aspida/aspida/commit/e9f7a18ea7418cac4b7f04a5d7522a78cbf32879))
* change property name from data to body ([42e0a90](https://github.com/aspida/aspida/commit/42e0a90d49da022710fc09e7d1c546c0fc06d4a8))

## [0.17.0](https://github.com/aspida/aspida/compare/v0.16.0...v0.17.0) (2020-06-14)


### Features

* support array type value of FormData ([855347a](https://github.com/aspida/aspida/commit/855347acbbc18f43ca341c0f6a6f96dc64514074))


### Bug Fixes

* **frourio:** support null response ([d4621bc](https://github.com/aspida/aspida/commit/d4621bc56253fe693252997e1c1c99fb2ae59f9e))
* **mock:** support null response ([350be0d](https://github.com/aspida/aspida/commit/350be0d1557c4214d8da40a96ff8de34c71a11fd))
* **openapi:** support for enum other than string ([3faaf32](https://github.com/aspida/aspida/commit/3faaf32392c1855c2d1bc0cc85ed6b7ada7fd185))

## [0.16.0](https://github.com/aspida/aspida/compare/v0.15.3...v0.16.0) (2020-05-20)


### Features

* **frourio:** export Validator ([a6e8d60](https://github.com/aspida/aspida/commit/a6e8d60ea8e3ab07e0d906edc06cffc51815ea13))
* add status prop to methods ([02826ca](https://github.com/aspida/aspida/commit/02826ca23a49cd7ecf6d8c10bc84f1a5720edd74))
* write file if changes ([1350545](https://github.com/aspida/aspida/commit/1350545356def8c6148cb1d90cada7493dd3f007))
* **server:** add config params ([052b77a](https://github.com/aspida/aspida/commit/052b77a9dd337c8d85839a64f350f739aa3ccc81))
* **server:** add static option to config ([068f546](https://github.com/aspida/aspida/commit/068f5463ea7a1b625bfc9aea917bc23a18e53eb2))
* **server:** change [@user](https://github.com/user).ts to [@middlewere](https://github.com/middlewere).ts ([e5d4c9a](https://github.com/aspida/aspida/commit/e5d4c9a97c86097489e4534a2143d8d84e03708c))
* **server:** clarify outputs ([4953877](https://github.com/aspida/aspida/commit/49538777a8a76b713e355e98dc33b36a661ca748))


### Bug Fixes

* **openapi:** detect parent or not ([d286b9f](https://github.com/aspida/aspida/commit/d286b9fed324b3175b503a9c1e3588c5224e2798))
* delete Blob type of FormData from req.body ([6fdd688](https://github.com/aspida/aspida/commit/6fdd688d7311175ff536dfdbf9338df3aef9aad4))
* middleware name ([f196f81](https://github.com/aspida/aspida/commit/f196f81e8c13a54ee08026b5551d2bfe34e50dfe))
* support application/octet-stream ([3a249c2](https://github.com/aspida/aspida/commit/3a249c2a6e05511e9f16d9be77f751e748ab15f6))
* **frourio:** add dependencies ([f658110](https://github.com/aspida/aspida/commit/f658110ab96aa75d67d4ed6b3063c1aa9a420ea9))
* **frourio:** format basePath ([cb4107d](https://github.com/aspida/aspida/commit/cb4107dde1d67af8f3499f82e9d7c7873162f0bd))
* **ky:** add type annotation ([f75e54b](https://github.com/aspida/aspida/commit/f75e54b9456856cf4932be101dbaf628a9488c54))

### [0.15.3](https://github.com/aspida/aspida/compare/v0.15.2...v0.15.3) (2020-05-13)


### Features

* **server:** add multer handler ([7d14265](https://github.com/aspida/aspida/commit/7d142656c27dd4fda1aa5aba954a1d71d4b242cc))
* **server:** add multer type ([b809ca7](https://github.com/aspida/aspida/commit/b809ca7d7b3e0b93401b00866e00925d3848f842))
* **server:** add simple tests ([71076ef](https://github.com/aspida/aspida/commit/71076efc7bd79615f8fc707288e86d7167a62f0a))
* **server:** support validation ([ec434af](https://github.com/aspida/aspida/commit/ec434afa56e86148890f513886e79ca22986e7d1))


### Bug Fixes

* required path of version command ([e8091f9](https://github.com/aspida/aspida/commit/e8091f9e54bf5cae409cd1da347ab3996351e090))
* **aspida:** ignore empty methods file ([f3bfb54](https://github.com/aspida/aspida/commit/f3bfb54d09e72bf8a347ba0daea973a442ddca15))
* **deps:** bump @types/helmet from 0.0.46 to 0.0.47 ([48f73d5](https://github.com/aspida/aspida/commit/48f73d551c40b59d7a7074099be759dacd4be9e5))
* **openapi:** for lint of typescript v3.9 ([b9085b5](https://github.com/aspida/aspida/commit/b9085b51b071404a7a7722a9a49a4b82097bc0db))
* **server:** change type definitions ([9948ec6](https://github.com/aspida/aspida/commit/9948ec60679d7bff6456f1719f24429ea14d8f42))


### Refactors

* **mock:** clarify types ([55e5ec8](https://github.com/aspida/aspida/commit/55e5ec8ebdba0bc60b88ec68b94df2f2115b11cf))
* **server:** remove form-data types ([1429b43](https://github.com/aspida/aspida/commit/1429b433afb77a36c202260dc72ba4ae34408921))

### [0.15.2](https://github.com/aspida/aspida/compare/v0.15.1...v0.15.2) (2020-05-07)


### Features

* **server:** add prototype ([9c4240b](https://github.com/aspida/aspida/commit/9c4240b06f565ec65821307da15af5607a7c8752))
* **server:** add start:server command ([472d115](https://github.com/aspida/aspida/commit/472d1158957c4862c8e9361483ab3d0743254c70))
* **server:** transform param to number ([dfc10a6](https://github.com/aspida/aspida/commit/dfc10a69668fcf116f98411459ad385357c4689a))


### Bug Fixes

* **aspida:** support duplicated path value types ([b61e625](https://github.com/aspida/aspida/commit/b61e625b59fec4012bfed530908ccbd297fabbb8))
* **openapi:** support additionalProperties ([11c14ee](https://github.com/aspida/aspida/commit/11c14ee76b4ebe5c446ef6a84e2af88bcecdb1b8))
* **openapi:** support duplicated path value type ([e590088](https://github.com/aspida/aspida/commit/e590088b49de47457041449bd50d59cb1f54178e))
* **openapi:** support paths common parameters ([edbc5b2](https://github.com/aspida/aspida/commit/edbc5b24b41a22bfee60a293d439e42c313d45ce))
* **openapi:** support properties of $ref ([13c234c](https://github.com/aspida/aspida/commit/13c234c2ec1dc915e6855d9fcdc95c82bc818d5d))

### [0.15.1](https://github.com/aspida/aspida/compare/v0.15.0...v0.15.1) (2020-04-28)


### Bug Fixes

* **mock:** detect if resBody is pojo when copying ([cd84cbe](https://github.com/aspida/aspida/commit/cd84cbee811cf8e521d0bb1fd835a778eba24b8c))
* **openapi:** output of endpoints without props ([270544e](https://github.com/aspida/aspida/commit/270544e5728f3258db63f8c0798bfe0c449d7351))

## [0.15.0](https://github.com/aspida/aspida/compare/v0.14.7...v0.15.0) (2020-04-27)


### Features

* support export with type alias ([e69a153](https://github.com/aspida/aspida/commit/e69a153328675f73c296495f0e6854363a044587))


### Bug Fixes

* **deps:** bump chokidar from 3.3.1 to 3.4.0 ([c8bc1c7](https://github.com/aspida/aspida/commit/c8bc1c7062216183348e273bcd26bd05be4d3a5f))
* **pathpida:** support for duplicate filenames ([a5c4932](https://github.com/aspida/aspida/commit/a5c4932f18d0ba153c0eee5e48e347e863db2594))
* **pathpida:** support query params of object type ([3a4b281](https://github.com/aspida/aspida/commit/3a4b28166d62ce421972531c7418d640278e5ee1))

### [0.14.7](https://github.com/aspida/aspida/compare/v0.14.6...v0.14.7) (2020-04-17)


### Bug Fixes

* bracket notation of path value types ([082a4a8](https://github.com/aspida/aspida/commit/082a4a89062f1f6733da87c9a19227acbaaebfec))
* **deps:** bump swagger2openapi from 6.0.2 to 6.0.3 ([741862d](https://github.com/aspida/aspida/commit/741862dc66c3a5677a84fb72facffa094dc6e4bb))
* **mock:** parse path values ([9e8a6b7](https://github.com/aspida/aspida/commit/9e8a6b7fe4fef8924ee2d78e2a78f5a4415be45c))

### [0.14.6](https://github.com/aspida/aspida/compare/v0.14.5...v0.14.6) (2020-04-06)


### ⚠ BREAKING CHANGES

* **openapi:** delete aspida-mock and rimraf

### Features

* **node-fetch:** add node-fetch client ([7e1bd27](https://github.com/aspida/aspida/commit/7e1bd27c9418c42c45a41ff30047a9755dc9bb01))
* **openapi:** delete aspida-mock and rimraf ([a59d86e](https://github.com/aspida/aspida/commit/a59d86e2aae350fa54833bf4fb917bc78fe870b0))


### Bug Fixes

* **aspida:** support json with path value ([4c7dff0](https://github.com/aspida/aspida/commit/4c7dff01685fb0df0cef40449121b40a170b94bf))
* **deps:** [security] bump acorn from 6.4.0 to 6.4.1 ([9a6cee0](https://github.com/aspida/aspida/commit/9a6cee05d295fbf80f2a04f069f17ab9c98ab6ba))
* **deps:** bump minimist from 1.2.4 to 1.2.5 ([a27445c](https://github.com/aspida/aspida/commit/a27445c33da203bb3941a77afa9eabb51a9bf318))
* **deps:** bump swagger-parser from 8.0.4 to 9.0.0 ([1f2a25f](https://github.com/aspida/aspida/commit/1f2a25f267286378774ce1c5a44bbbdd2f706efd))
* **deps:** bump swagger-parser from 9.0.0 to 9.0.1 ([9ac9dbe](https://github.com/aspida/aspida/commit/9ac9dbe8168f8439a8bcc0fd5c6e6b2dcd8ad994))
* **deps:** bump swagger2openapi from 5.3.4 to 6.0.0 ([6fdf33a](https://github.com/aspida/aspida/commit/6fdf33aa1fe0abe61f9f310210612af875a5f23d))
* **deps:** bump swagger2openapi from 6.0.0 to 6.0.1 ([3437a3b](https://github.com/aspida/aspida/commit/3437a3bd702ff50c255864a3ddb3afa629182733))
* **deps:** bump swagger2openapi from 6.0.1 to 6.0.2 ([e86784f](https://github.com/aspida/aspida/commit/e86784fe77a0bdae3bfd41e7e7cde53f5814359e))
* **deps:** bump swagger2openapi in /packages/openapi2aspida ([06590bf](https://github.com/aspida/aspida/commit/06590bf76731e9503d07fb4034b934683b63b2b2))
* **mock:** support json with path value ([15677e2](https://github.com/aspida/aspida/commit/15677e21dd9a80db0237209a20269d0843ff4341))
* **openapi:** add ? for SwaggerModule of NestJS ([1676a07](https://github.com/aspida/aspida/commit/1676a0796855a58b19abeb085cddd2a5102c851c))
* **openapi:** delete default value of inputFile ([92d150e](https://github.com/aspida/aspida/commit/92d150e385e5d60f2911a61f71aa575ef32112e8))


### Refactors

* **mock:** clarify $mock.ts ([217c81a](https://github.com/aspida/aspida/commit/217c81ad259b6c4f2e37d6953daecb3e093308d7))
* **openapi:** delete eslint-disable comment ([baeb408](https://github.com/aspida/aspida/commit/baeb4085f9d796c4e0913816baad93cff7aa5b3f))

### [0.14.5](https://github.com/aspida/aspida/compare/v0.14.4...v0.14.5) (2020-03-12)


### Refactors

* **aspida:** parse semicolon ([329b99f](https://github.com/aspida/aspida/commit/329b99fa7a1bf9278ec273249656fcf75aa92a08))

### [0.14.4](https://github.com/aspida/aspida/compare/v0.14.3...v0.14.4) (2020-03-12)


### Bug Fixes

* **deps:** bump minimist from 1.2.3 to 1.2.4 ([d59b8b1](https://github.com/aspida/aspida/commit/d59b8b1d6292cb7fb250af860d9e943d94c38040))


### Refactors

* **aspida:** parse Array type ([c40a333](https://github.com/aspida/aspida/commit/c40a333668e4b20f2e07c282dd920f4b7a8529f7))
* **aspida:** parse comment ([d239153](https://github.com/aspida/aspida/commit/d23915362050112552b757853296a6878ee0fed8))
* **pathpida:** remove aspida from module ([782f917](https://github.com/aspida/aspida/commit/782f917951b19943b55184ccd78bbd31a1bfedc1))


### Documentation

* **aspida:** add tips of serializing params ([0d505f6](https://github.com/aspida/aspida/commit/0d505f681ed9dc7c8ce30c8b653c57eb3f834d2f))

### [0.14.3](https://github.com/aspida/aspida/compare/v0.14.2...v0.14.3) (2020-03-11)


### Bug Fixes

* **aspida:** add test case ([a097e03](https://github.com/aspida/aspida/commit/a097e031d5bac4236bd73f135598aa5b8cf8235a))

### [0.14.2](https://github.com/aspida/aspida/compare/v0.14.0...v0.14.2) (2020-03-10)


### Features

* **openapi:** add aspida and mock to dependencies ([5d2a38a](https://github.com/aspida/aspida/commit/5d2a38ab9dc6a6edaa500f131b2d841f2e6bb1ff))


### Bug Fixes

* **deps:** bump minimist from 1.2.0 to 1.2.1 ([8f3b098](https://github.com/aspida/aspida/commit/8f3b09861ba52f3539704dfcf805b5be14f4834b))
* **deps:** bump minimist from 1.2.1 to 1.2.2 ([b59db7a](https://github.com/aspida/aspida/commit/b59db7a32cd1b1ab7372e431d43309d246c34778))
* **deps:** bump minimist from 1.2.2 to 1.2.3 ([e2ffb17](https://github.com/aspida/aspida/commit/e2ffb1705579b4b619d9ca9241f95584b9ce17a2))
* **deps:** bump swagger2openapi from 5.3.3 to 5.3.4 ([96e048f](https://github.com/aspida/aspida/commit/96e048f1d7fee500aeee7d354ce1d7350633f756))


### Refactors

* **aspida:** delete ts-morph ([396fba7](https://github.com/aspida/aspida/commit/396fba7e22bdcd90db4f08b9fdf0bf0597a25200))

### [0.14.1](https://github.com/aspida/aspida/compare/v0.14.0...v0.14.1) (2020-02-29)


### Refactors

* **aspida:** optimize processing of ts-morph ([336844c](https://github.com/aspida/aspida/commit/336844c61036d628751deb8747972f0c61f177b6))

## [0.14.0](https://github.com/aspida/aspida/compare/v0.13.0...v0.14.0) (2020-02-21)


### ⚠ BREAKING CHANGES

* rename reqData/resData to reqBody/resBody

### Features

* **openapi:** support mock ([4ee8936](https://github.com/aspida/aspida/commit/4ee893625162db5b140fb468debd94615a322342))
* **pathpida:** support next.js dynamic routing ([dbb5bb4](https://github.com/aspida/aspida/commit/dbb5bb4fb6c0863293114e843a99e2bf6cae71d2))


### Bug Fixes

* **aspida:** untransform data when mocking ([121c3e9](https://github.com/aspida/aspida/commit/121c3e9ecdfa469835496161be2f0cff2a8dec93))
* **openapi:** parse allOf/oneOf option ([53fb0f3](https://github.com/aspida/aspida/commit/53fb0f3143755d214828f7f9266adc7d57f19b91))


* rename reqData/resData to reqBody/resBody ([b22da5c](https://github.com/aspida/aspida/commit/b22da5c56bce7946b7e1f294c9b789fe2eef9500))


### Refactors

* **openapi:** buildV3.ts ([fb97adf](https://github.com/aspida/aspida/commit/fb97adfb99ce1384746e3ab8bf99bf8d9474777d))
* **openapi:** for mock ([c6fb3ce](https://github.com/aspida/aspida/commit/c6fb3cefeac296eeb1849358006bfc8c70acbe8d))

## [0.13.0](https://github.com/aspida/aspida/compare/v0.12.2...v0.13.0) (2020-02-01)


### Features

* **aspida:** delete option exports ([9ff50b3](https://github.com/aspida/aspida/commit/9ff50b392b4337eb662d47ad282129b3516646fc))
* **openapi:** support deprecated option ([67cf07b](https://github.com/aspida/aspida/commit/67cf07bc33648274679e0aeef3ecfbdc3ec788e5))
* **openapi:** support required option ([d24d694](https://github.com/aspida/aspida/commit/d24d6943c7345f9c8fc13f1d738091804fff7e0e))


### Bug Fixes

* **openapi:** remove dir before build ([c1689f4](https://github.com/aspida/aspida/commit/c1689f47a8c70811e75a692abbe6399ceb6f57a9))

### [0.12.2](https://github.com/aspida/aspida/compare/v0.12.1...v0.12.2) (2020-01-28)


### Features

* **mock:** add middleware ([de47b61](https://github.com/aspida/aspida/commit/de47b61131aa31beba744d814f412681712971df))
* **openapi:** support openapi.json of strapi ([3d18e16](https://github.com/aspida/aspida/commit/3d18e1662bdf895b752d4535b480c041bc100c53))


### Bug Fixes

* **aspida:** support files with the same name ([d2a8ca4](https://github.com/aspida/aspida/commit/d2a8ca4b137234ca79d1590dd36e943d1d87fad9))
* **deps:** bump rimraf from 3.0.0 to 3.0.1 ([8ac2c61](https://github.com/aspida/aspida/commit/8ac2c613ca131b804c57549287243063362805a9))
* **mock:** add method param and mockMiddleware ([2ff522b](https://github.com/aspida/aspida/commit/2ff522bbd1c246521136fb2273ce3c4dd3438391))

### [0.12.1](https://github.com/aspida/aspida/compare/v0.12.0...v0.12.1) (2020-01-22)


### Features

* **pathpida:** delete import from $path.ts ([0ae29a7](https://github.com/aspida/aspida/commit/0ae29a75587898eb7085d4429a6372134850ff1d))
* **pathpida:** delete question from query ([3388adf](https://github.com/aspida/aspida/commit/3388adfe482d6b82fcb0fb0c55b037cee5688823))


### Bug Fixes

* **mock:** fix baseURL and release v0.2.3 ([c32c932](https://github.com/aspida/aspida/commit/c32c9329afb77ef553d4125a209a449dae7d9967))
* **mock:** release v0.2.2 ([cb97a53](https://github.com/aspida/aspida/commit/cb97a5368101c458255db538462ae4082a1eeb60))

## [0.12.0](https://github.com/aspida/aspida/compare/v0.11.0...v0.12.0) (2020-01-20)


### Features

* **openapi:** integrate openapi 3.0 ([642c7a4](https://github.com/aspida/aspida/commit/642c7a4e7e3886bc2ea87ecda5feb1358ce6c647))
* add aspida-path ([d798eba](https://github.com/aspida/aspida/commit/d798eba851e962703c91ae54b7a0710ab06e2b12))
* add trailingSlash and refactor files ([5afb85c](https://github.com/aspida/aspida/commit/5afb85ca53418b80867895e94a281714fdad48d3))


### Bug Fixes

* **mock:** add trailingSlash ([8b90f83](https://github.com/aspida/aspida/commit/8b90f8337a8f69340e38284eb428d999df05eb79))
* **mock:** separate mock client ([954ac8f](https://github.com/aspida/aspida/commit/954ac8f3855034d7ef6da76cf4f56fa43bc04c6a))

## [0.11.0](https://github.com/aspida/aspida/compare/v0.10.0...v0.11.0) (2020-01-18)


### Features

* **axios:** update for mock ([000a6fd](https://github.com/aspida/aspida/commit/000a6fd343672d083f42c3bbcd0004611a545c7b))
* **mock:** optimize for aspida ([c1dc848](https://github.com/aspida/aspida/commit/c1dc848864c3a02df88bfa4c2f99cf19d0bd3073))
* remake axios-mock-server to aspida-mock ([fa99ad0](https://github.com/aspida/aspida/commit/fa99ad0aca3db0be1dc5f3240afaf44753c6330a))


### Bug Fixes

* update tests ([5323dd2](https://github.com/aspida/aspida/commit/5323dd28573b6353b5599e360b38e1cbcdafdfb2))


### Refactors

* **aspida:** delete optionToRequest ([760b1f5](https://github.com/aspida/aspida/commit/760b1f5ce04fb41a35a887a0a4979e30a8f22785))

## [0.10.0](https://github.com/aspida/aspida/compare/v0.9.0...v0.10.0) (2020-01-12)


### Features

* add baseURL to config ([b150a3d](https://github.com/aspida/aspida/commit/b150a3d2c02907d0882a5984681f55e4fa8b89bf))
* **aspida:** change config file for common use ([08d3ed5](https://github.com/aspida/aspida/commit/08d3ed5638746fc883d4a25773222cadf2d80b54))


### Bug Fixes

* lint ([10de823](https://github.com/aspida/aspida/commit/10de823b224582d9dd0e21dbf8c3420a94fe22d1))

## [0.9.0](https://github.com/aspida/aspida/compare/v0.8.0...v0.9.0) (2020-01-09)


### Features

* add aspida.config.js ([dc97979](https://github.com/aspida/aspida/commit/dc97979f1932dd29e5fcd5b573dfe0fc24d9ecfd))


### Bug Fixes

* **ci:** publish command ([3b96b02](https://github.com/aspida/aspida/commit/3b96b02c1ff417c6db02d72e88cae7bcdedc24bc))


### Refactors

* **aspida:** delete URLSearchParams polyfill ([53b2184](https://github.com/aspida/aspida/commit/53b2184c5870404f4b8ffa711309657bbfe29b87))
* **mock:** delete URLSearchParams polyfill ([d6596ed](https://github.com/aspida/aspida/commit/d6596ed982b1a0cc6773ca92272b552f8cd8b7fd))


### Documentation

* **aspida:** rewirte for config file ([04c65f4](https://github.com/aspida/aspida/commit/04c65f43a4833e5e6b3872e5312977f1a8d075e3))

## [0.8.0](https://github.com/aspida/aspida/compare/v0.7.0...v0.8.0) (2020-01-07)


### Features

* add aspida clients ([2dd9fc2](https://github.com/aspida/aspida/commit/2dd9fc2540f7959145e72a9b4a3b79baf35e3819))
* redesign for aspida client ([0ee43fd](https://github.com/aspida/aspida/commit/0ee43fdc3656cde0f725ab236e3d64ef6f78030c))


### Bug Fixes

* typecheck config ([2d9b0f5](https://github.com/aspida/aspida/commit/2d9b0f56c487fb73145efca782cd82e8573a97f9))


### Refactors

* merge npm scripts ([ac070a0](https://github.com/aspida/aspida/commit/ac070a011273710cf98d3180cf9e3232e270cf05))
* monorepo ([d97babc](https://github.com/aspida/aspida/commit/d97babced029dcbc06c391358ae2bcecb99636f5))
* monorepo for aspida ([75b12ef](https://github.com/aspida/aspida/commit/75b12efdf6a6a704bcc2b1e1956a9d28e8d5dad7))
* use ts-morph ([3d10079](https://github.com/aspida/aspida/commit/3d100792a561cf3aa457da83e0db462c632d58ad))

## [0.7.0](https://github.com/aspida/aspida/compare/v0.6.2...v0.7.0) (2019-11-23)


### Features

* **cli:** delete baseurl option ([9fc0bf3](https://github.com/aspida/aspida/commit/9fc0bf36c657a78175369422d7b6814855a87ab7))

### [0.6.2](https://github.com/aspida/aspida/compare/v0.6.1...v0.6.2) (2019-11-01)


### Bug Fixes

* control the comma when index.ts is alone ([4d668d1](https://github.com/aspida/aspida/commit/4d668d1))

### [0.6.1](https://github.com/aspida/aspida/compare/v0.6.0...v0.6.1) (2019-10-25)


### Bug Fixes

* **builder:** ignore  files other than ts ([17ca0a8](https://github.com/aspida/aspida/commit/17ca0a8))


### Documentation

* add contribution section and how to build on local ([fed3110](https://github.com/aspida/aspida/commit/fed3110))
* add how to watch file changes ([cb15b3d](https://github.com/aspida/aspida/commit/cb15b3d))


### Refactors

* define command interface ([428922d](https://github.com/aspida/aspida/commit/428922d))
* define template interface which is used to build and write ([0a7cf33](https://github.com/aspida/aspida/commit/0a7cf33))
* implements build command objects ([47638c0](https://github.com/aspida/aspida/commit/47638c0))
* implements command interface ([1ac82b7](https://github.com/aspida/aspida/commit/1ac82b7))
* refactor cli interface to explicit what argument are usable ([7812353](https://github.com/aspida/aspida/commit/7812353))
* rename command class name for build ([eaf2c6d](https://github.com/aspida/aspida/commit/eaf2c6d))
* return early to make code nest shallow ([21f83de](https://github.com/aspida/aspida/commit/21f83de))
* return early to make code nest shallow ([a054ee5](https://github.com/aspida/aspida/commit/a054ee5))

## [0.6.0](https://github.com/aspida/aspida/compare/v0.5.0...v0.6.0) (2019-10-20)


### Bug Fixes

* **audit:** update modules ([4ceb902](https://github.com/aspida/aspida/commit/4ceb902))


### Features

* **builder:** implement typed path values ([c7d13c1](https://github.com/aspida/aspida/commit/c7d13c1))

## [0.5.0](https://github.com/aspida/aspida/compare/v0.4.0...v0.5.0) (2019-10-19)


### Features

* **methods:** determine question flag of config ([8ba6336](https://github.com/aspida/aspida/commit/8ba6336))


### Refactors

* template builder ([fcc20ee](https://github.com/aspida/aspida/commit/fcc20ee))

## [0.4.0](https://github.com/aspida/aspida/compare/v0.3.1...v0.4.0) (2019-10-13)


### Features

* **builder:** format url string ([448b5f7](https://github.com/aspida/aspida/commit/448b5f7))

### [0.3.1](https://github.com/aspida/aspida/compare/v0.3.0...v0.3.1) (2019-10-13)


### Bug Fixes

* **builder:** add single quotes to property names ([516191f](https://github.com/aspida/aspida/commit/516191f))

### [0.3.0](https://github.com/aspida/aspida/compare/v0.2.0...v0.3.0) (2019-10-12)


### Features

* **cli:** correspond endpoint extension ([d3f8aeb](https://github.com/aspida/aspida/commit/d3f8aeb))

### [0.2.0](https://github.com/aspida/aspida/compare/v0.1.2...v0.2.0) (2019-10-10)


### Features

* **template:** export ApiInstance type ([bab8514](https://github.com/aspida/aspida/commit/bab8514))


### Refactors

* delete replacePathSepIfWindows ([07b05c7](https://github.com/aspida/aspida/commit/07b05c7))

### 0.1.2 (2019-10-10)


### Bug Fixes

* **tsconfig:** change target to es5 ([e8ea865](https://github.com/aspida/aspida/commit/e8ea865))

### 0.1.1 (2019-10-09)


### Bug Fixes

* **config:** change default input to apis ([7eb65c7](https://github.com/aspida/aspida/commit/7eb65c7))
* **template:** add AxiosInstance type ([5828743](https://github.com/aspida/aspida/commit/5828743))

### 0.1.0 (2019-10-08)


### Bug Fixes

* **test:** update $api.ts snapshot ([daaf4c5](https://github.com/aspida/aspida/commit/daaf4c5))


### Features

* **builder:** add index.ts file ([817bf07](https://github.com/aspida/aspida/commit/817bf07))
* **cli:** first commit ([962f4dd](https://github.com/aspida/aspida/commit/962f4dd))
* **test:** add $api.ts snapshot ([4453e6a](https://github.com/aspida/aspida/commit/4453e6a))
