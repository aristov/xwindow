# xwindow

This module exports a cross-platform window instance object.
* In the browser it just exports the global window object
* In NodeJS it exports the newly created [JSDOM](https://www.npmjs.com/package/jsdom) window instance

Thus, DOM-dependent modules become compatible and can be used both in NodeJS and in the browser.

## Installation

```shell
npm install xwindow
```

## Usage

### CommonJS

```js
const window = require('xwindow')
```

### ES2015

```js
import window from 'xwindow'
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

[The MIT License (MIT)](https://raw.githubusercontent.com/aristov/window/master/LICENSE)
