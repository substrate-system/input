# Input
[![tests](https://img.shields.io/github/actions/workflow/status/substrate-system/input/nodejs.yml?style=flat-square)](https://github.com/substrate-system/input/actions/workflows/nodejs.yml)
[![types](https://img.shields.io/npm/types/@substrate-system/input?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![install size](https://flat.badgen.net/packagephobia/install/@substrate-system/input?cache-control=no-cache)](https://packagephobia.com/result?p=@substrate-system/input)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![Common Changelog](https://nichoth.github.io/badge/common-changelog.svg)](./CHANGELOG.md)
[![license](https://img.shields.io/badge/license-Big_Time-blue?style=flat-square)](LICENSE)


Inputs with style. Use this web component, and it will forward any relevant
attributes to the inner `input` element, like an `id` or `name`, for example.
`aria-*` attributes are handled intelligently too.

[See a live demo](https://substrate-system.github.io/input/)

<details><summary><h2>Contents</h2></summary>

<!-- toc -->

- [Install](#install)
- [CSS](#css)
  * [Import CSS](#import-css)
- [Use](#use)
  * [JS](#js)
  * [HTML](#html)
  * [pre-built](#pre-built)
- [API](#api)
  * [Attributes](#attributes)
  * [Events](#events)

<!-- tocstop -->

</details>

## Install

```sh
npm i -S @substrate-system/input
```

## CSS

### Import CSS

```js
import '@substrate-system/input/css'
```

Or minified:
```js
import '@substrate-system/input/min/css'
```

## Use

This calls the global function `customElements.define`. Just import, then use
the tag in your HTML.

### JS
```js
import { SubstrateInput } from '@substrate-system/input'

// TAG property

document.body.innerHTML += `
<${SubstrateInput.TAG}></${SubstrateInput.TAG}>
`
```

### HTML
```html
<div>
    <substrate-input></substrate-input>
</div>
```

### pre-built
This package exposes minified JS and CSS files too. Copy them to a location that is
accessible to your web server, then link to them in HTML.

#### copy
```sh
cp ./node_modules/@substrate-system/input/dist/index.min.js ./public/substrate-input.min.js
cp ./node_modules/@substrate-system/input/dist/style.min.css ./public/substrate-input.css
```

#### HTML

```html
<head>
    <link rel="stylesheet" href="./substrate-input.css">
</head>
<body>
    <!-- ... -->
    <script type="module" src="./substrate-input.min.js"></script>
</body>
```

## API

### Attributes

#### Component attributes

These are handled by `substrate-input` directly.

| Attribute | Description |
|-----------|-------------|
| `label` | Text content for the `<label>` element rendered above the input. When omitted, no label is rendered. |
| `id` | Forwarded to the inner `<input>` element. Removed from the host element. When omitted, a random id is generated for the input. |

#### `input` element attributes

These are forwarded directly to the inner `<input>` element.

`accept`, `alt`, `autocomplete`, `autocapitalize`, `autocorrect`,
`autofocus`, `capture`, `dirname`, `disabled`, `enterkeyhint`, `form`,
`inputmode`, `list`, `max`, `maxlength`, `min`, `minlength`, `multiple`,
`name`, `pattern`, `placeholder`, `readonly`, `required`, `size`,
`spellcheck`, `step`, `tabindex`, `title`, `type`, `value`

#### ARIA attributes

All ARIA attributes are forwarded to the inner `<input>` element and
removed from the host element.

`aria-activedescendant`, `aria-atomic`, `aria-autocomplete`,
`aria-braillelabel`, `aria-brailleroledescription`, `aria-busy`,
`aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colindextext`,
`aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`,
`aria-description`, `aria-details`, `aria-disabled`, `aria-dropeffect`,
`aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`,
`aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`,
`aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`,
`aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`,
`aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`,
`aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`,
`aria-rowindex`, `aria-rowindextext`, `aria-rowspan`, `aria-selected`,
`aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`,
`aria-valuenow`, `aria-valuetext`

### Events

`substrate-input` does not emit any custom events. All native `<input>`
events (`change`, `input`, `focus`, `blur`, etc.) bubble up through the
component as normal.

```js
const el = document.querySelector('substrate-input')
el.addEventListener('input', ev => {
    console.log(ev.target.value)
})
```

