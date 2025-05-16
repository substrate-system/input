# package name here
![tests](https://github.com/substrate-system/input/actions/workflows/nodejs.yml/badge.svg)
[![types](https://img.shields.io/npm/types/@substrate-system/input?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![install size](https://packagephobia.com/badge?p=@substrate-system/input)](https://packagephobia.com/result?p=@substrate-system/input)
[![GZip size](https://img.badgesize.io/https%3A%2F%2Fesm.sh%2F%40substrate-system%2Finput%2Fes2022%2Ffile.mjs?style=flat-square&compression=gzip)](https://esm.sh/@substrate-system/input/es2022/input.mjs)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![Common Changelog](https://nichoth.github.io/badge/common-changelog.svg)](./CHANGELOG.md)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

`<package description goes here>`

[See a live demo](https://substrate-system.github.io/input/)

<!-- toc -->

## install

Installation instructions

```sh
npm i -S @substrate-system/input
```

## API

This exposes ESM and common JS via [package.json `exports` field](https://nodejs.org/api/packages.html#exports).

### ESM
```js
import '@substrate-system/input'
```

### Common JS
```js
require('@substrate-system/input')
```

## CSS

### Import CSS

```js
import '@substrate-system/input/css'
```

Or minified:
```js
import '@substrate-system/input/css/min'
```

### Customize CSS via some variables

```css
input {
    --example: pink;
}
```

## use
This calls the global function `customElements.define`. Just import, then use
the tag in your HTML.

### JS
```js
import '@substrate-system/input'
```

### HTML
```html
<div>
    <input></input>
</div>
```

### pre-built
This package exposes minified JS and CSS files too. Copy them to a location that is
accessible to your web server, then link to them in HTML.

#### copy
```sh
cp ./node_modules/@substrate-system/input/dist/index.min.js ./public/input.min.js
cp ./node_modules/@substrate-system/input/dist/style.min.css ./public/input.css
```

#### HTML
```html
<head>
    <link rel="stylesheet" href="./input.css">
</head>
<body>
    <!-- ... -->
    <script type="module" src="./input.min.js"></script>
</body>
```
