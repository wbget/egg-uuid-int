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

## 依赖说明

### 依赖的 egg 版本

| egg-uuid-int 版本 | egg 1.x |
| ----------------- | ------- |
| 1.x               | 😁      |
| 0.x               | ❌      |

### 依赖的插件

<!--

如果有依赖其它插件，请在这里特别说明。如

- security
- multipart

-->

## 开启插件

```js
// config/plugin.js
exports.uuint = {
  enable: true,
  package: 'egg-uuid-int'
};
```

## 使用场景

- [生成 int 类型的唯一标识](https://github.com/wbget/uuid-int)

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## License

[MIT](LICENSE)
