# input
[![tests](https://img.shields.io/github/actions/workflow/status/substrate-system/input/nodejs.yml?style=flat-square)](https://github.com/substrate-system/input/actions/workflows/nodejs.yml)
[![types](https://img.shields.io/npm/types/@substrate-system/input?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![install size](https://flat.badgen.net/packagephobia/install/@substrate-system/input?cache-control=no-cache)](https://packagephobia.com/result?p=@substrate-system/input)
[![GZip size](https://flat.badgen.net/bundlephobia/minzip/@substrate-system/input)](https://bundlephobia.com/package/@substrate-system/input)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![Common Changelog](https://nichoth.github.io/badge/common-changelog.svg)](./CHANGELOG.md)
[![license](https://img.shields.io/badge/license-Big_Time-blue?style=flat-square)](LICENSE)


A parent web component to inherit from.

[See a live demo](https://substrate-system.github.io/input/)

<!-- toc -->

- [Install](#install)
- [Modules](#modules)
  * [ESM](#esm)
  * [Common JS](#common-js)
- [Use](#use)
  * [JS](#js)

<!-- tocstop -->

## Install

```sh
npm i -S @substrate-system/input
```

## Modules

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
