# egg-uuid-int

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-uuid-int.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-uuid-int
[travis-image]: https://img.shields.io/travis/eggjs/egg-uuid-int.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-uuid-int
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-uuid-int.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-uuid-int?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-uuid-int.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-uuid-int
[snyk-image]: https://snyk.io/test/npm/egg-uuid-int/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-uuid-int
[download-image]: https://img.shields.io/npm/dm/egg-uuid-int.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-uuid-int

<!--
Description here.
-->

## Install

```bash
$ npm i egg-uuid-int --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.uuint = {
  enable: true,
  package: 'egg-uuid-int'
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.uuint = {
  id: 0, // 0-511
  seed: 156015570 // a time
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

const uuid = app.uuint.uuid(); // a int uuid

- [snowflake for nodejs](https://github.com/wbget/uuid-int)

## License

[MIT](LICENSE)
