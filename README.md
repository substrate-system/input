# input
![tests](https://github.com/substrate-system/input/actions/workflows/nodejs.yml/badge.svg)
[![types](https://img.shields.io/npm/types/@substrate-system/input?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![install size](https://packagephobia.com/badge?p=@substrate-system/input)](https://packagephobia.com/result?p=@substrate-system/input)
[![GZip size](https://img.badgesize.io/https%3A%2F%2Fesm.sh%2F%40substrate-system%2Finput%2Fes2022%2Finput.mjs?style=flat-square&compression=gzip)](https://esm.sh/@substrate-system/input/es2022/input.mjs)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![Common Changelog](https://nichoth.github.io/badge/common-changelog.svg)](./CHANGELOG.md)
[![license](https://img.shields.io/badge/license-Polyform_Small_Business-249fbc?style=flat-square)](LICENSE)


A parent web component to inherit from.

[See a live demo](https://substrate-system.github.io/input/)

<!-- toc -->

- [install](#install)
- [API](#api)
  * [ESM](#esm)
  * [Common JS](#common-js)
- [Use](#use)
  * [JS](#js)

<!-- tocstop -->

## install

```sh
npm i -S @substrate-system/input
```

## API

This exposes ESM and common JS via [package.json `exports` field](https://nodejs.org/api/packages.html#exports).

### ESM
```js
import { Input } from '@substrate-system/input'
```

### Common JS
```js
const { Input } = require('@substrate-system/input')
```

-----------------

## Use
Inherit from this module.

### JS
```js
import { Input } from '@substrate-system/input'

class FooBar extends Input {
    static tag = 'foo-bar'
}

// Use the static method `define`
FooBar.define()

document.body.innerHTML += `
    <foo-bar></foo-bar>
`
```
