# xwindow

[![NPM Version](https://img.shields.io/npm/v/xwindow.svg)](https://www.npmjs.com/package/xwindow)
[![Node.js CI](https://github.com/aristov/xwindow/actions/workflows/node.js.yml/badge.svg)](https://github.com/aristov/xwindow/actions/workflows/node.js.yml)
[![Coverage Status](https://coveralls.io/repos/github/aristov/xwindow/badge.svg?branch=master)](https://coveralls.io/github/aristov/xwindow?branch=master)

This module exports a cross-platform window instance object.

* In the browser it just exports the global window object
* In NodeJS, it exports the newly created [JSDOM](https://www.npmjs.com/package/jsdom) window instance

Thus, DOM-dependent modules become compatible and can be used both in NodeJS and in the browser.

## Installation

```shell
npm install xwindow
```

## Usage

ES2015

```js
import window from 'xwindow'
```

CommonJS

```js
const window = require('xwindow')
```

## Example

```js
import window from 'xwindow'

const { document, CustomEvent, DocumentFragment, Node } = window

const node = document.createElement('div')
const fragment = new DocumentFragment

fragment.append(node)

if(node.nodeType === Node.ELEMENT_NODE) {
  node.dispatchEvent(new CustomEvent('answer', { detail : 42 }))
}
```

## License

[The MIT License (MIT)](https://raw.githubusercontent.com/aristov/xwindow/master/LICENSE)
