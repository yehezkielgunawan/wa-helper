# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.2.0](https://github.com/yehezkielgunawan/wa-helper/compare/v1.1.0...v1.2.0) (2023-05-01)


### Features

* **api/shorten:** :sparkles: use api route to mask the env var ([e7f179d](https://github.com/yehezkielgunawan/wa-helper/commit/e7f179da38309056019625b5a51c612dae8a8aa2))
* change to next.js api route ([e60eb92](https://github.com/yehezkielgunawan/wa-helper/commit/e60eb92d790938bc3f50481b43c10c36ad47dc7b))
* **index.test.tsx:** :sparkles: create unit test case for generate WA button ([77486ae](https://github.com/yehezkielgunawan/wa-helper/commit/77486ae77ff043bb6806f6e157e70e883e918570))
* **index.text.tsx:** :sparkles: add base test file ([0ede08a](https://github.com/yehezkielgunawan/wa-helper/commit/0ede08a6d80763d1690dcbbc636791bf03a049a1))
* **next-seo:** :sparkles: use newest OG image ([8e7517c](https://github.com/yehezkielgunawan/wa-helper/commit/8e7517c15cce8719af4d6f9694e0bb74471d8391))
* **nextjs.yml:** :sparkles: setup github workflow ([b994a13](https://github.com/yehezkielgunawan/wa-helper/commit/b994a13cb4c95e3b9ab574e3aa260afa36e1516c))
* **package.json & pre-commit:** :sparkles: run prettier before commit through husky ([42e6095](https://github.com/yehezkielgunawan/wa-helper/commit/42e60950bc4ecd007684d4ba87e186227b130346))


### Bug Fixes

* **Button and main page:** :bug: also disable copy button if the phone num length &lt; 10 ([6874e39](https://github.com/yehezkielgunawan/wa-helper/commit/6874e39202bfa9a08e4c2281076f500478101b4f))
* Enable React Strict Mode ([c6cba15](https://github.com/yehezkielgunawan/wa-helper/commit/c6cba15edb2b95e92abfaa9cbe08e27073317a5c))
* **fetcher.ts:** :bug: back to client side post req ([4a886fa](https://github.com/yehezkielgunawan/wa-helper/commit/4a886fa28ba10b7b3d3b696a657e12893fceb883))
* **fetcher.ts:** :bug: change the API into github one ([de920b6](https://github.com/yehezkielgunawan/wa-helper/commit/de920b66d782923e81222903f72afc7972839648))
* **index.tsx:** :bug: fix url and data type from the country code ([410d343](https://github.com/yehezkielgunawan/wa-helper/commit/410d3437c3f39e6e202b119a14764baf6df310b5))
* **main page:** :bug: fix web whatsapp url ([3229dd7](https://github.com/yehezkielgunawan/wa-helper/commit/3229dd76b3ac70436a6f567850b0f1a01879f706))
* **main page:** :bug: remove unecessary + ([b97f154](https://github.com/yehezkielgunawan/wa-helper/commit/b97f1540cecc0c4977d39d4a5ea97de9c1b0b20e))
* **package.json:** :bug: add command typescript for CI ([77cabb9](https://github.com/yehezkielgunawan/wa-helper/commit/77cabb9aac321ce3b752e0e30e5b81037b435e07))
* **pre-commit:** :fire: remove redundant prettier check before commit ([bbaf7a6](https://github.com/yehezkielgunawan/wa-helper/commit/bbaf7a6314b12de7c71ac1d3060495ee33f2fcae))
* **release-please.yml:** :bug: hotfix release-please ([f0d41ce](https://github.com/yehezkielgunawan/wa-helper/commit/f0d41cec804ccd1037e847284e945345bbf84a1e))
* **release-please.yml:** :bug: remove permissions ([21082b6](https://github.com/yehezkielgunawan/wa-helper/commit/21082b6d5f1f93010701a259246c12f00b8feda8))
* remove duplicate key in API response ([0005680](https://github.com/yehezkielgunawan/wa-helper/commit/0005680c0f9b218f89ecff07d8663d56a86572c8))
* use environment variables from the server instead of the client ([127ebc8](https://github.com/yehezkielgunawan/wa-helper/commit/127ebc8e9a84667634a7804f42a91ffc224967cb))

## [1.1.0](https://github.com/yehezkielgunawan/wa-helper/compare/v1.0.1...v1.1.0) (2022-04-19)

### Features

- **main page:** :sparkles: add device checking logic ([02a7913](https://github.com/yehezkielgunawan/wa-helper/commit/02a7913b7f4c4fd0913da4c261cf5d382f31ba33))

### Bug Fixes

- **global.css:** :lipstick: fix focus color for forms ([63ac80b](https://github.com/yehezkielgunawan/wa-helper/commit/63ac80b15925003a4a042055f1f2beb2606ed8bc))

### [1.0.1](https://github.com/yehezkielgunawan/wa-helper/compare/v1.0.0...v1.0.1) (2022-04-19)

## 1.0.0 (2022-04-16)

### Features

- **baseConfig.ts:** :sparkles: add constant file to put the baseURL and API Key ([0e07860](https://github.com/yehezkielgunawan/wa-helper/commit/0e07860a8f31b291d75bdcf7c57274513ee454b2))
- **fetcher.ts and main page:** :sparkles: add shortener link for copy link feature ([b815f94](https://github.com/yehezkielgunawan/wa-helper/commit/b815f94fe72db0af43dd84b6d40f36fe1ecf028d))
- first initialization ([573a577](https://github.com/yehezkielgunawan/wa-helper/commit/573a577237f3b7d154c354f3c2b3311f66f0fd74))
- **headerComponent:** :sparkles: add github repo link ([5bc9b25](https://github.com/yehezkielgunawan/wa-helper/commit/5bc9b25ca694f6c425d2944b2d81ae52fe86e124))
- **Home page:** :sparkles: initialization base UI and fetch API ([9a0fc5e](https://github.com/yehezkielgunawan/wa-helper/commit/9a0fc5e51c1d6160c75562de16273e7bcf0ac15f))
- **main page:** :sparkles: finished whatsapp helper functionallity ([1a9d59a](https://github.com/yehezkielgunawan/wa-helper/commit/1a9d59a1754c8a969bbcd3c45738737d99644055))
