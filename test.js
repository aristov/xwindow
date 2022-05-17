const test = require('ava')
const window = require('./index')
const props = [
  'AbortController', 'AbortSignal', 'AbstractRange', 'AggregateError', 'Array', 'ArrayBuffer',
  'Atomics', 'Attr', 'Audio', 'BarProp', 'BigInt', 'BigInt64Array', 'BigUint64Array', 'Blob',
  'Boolean', 'CDATASection', 'CSSImportRule', 'CSSMediaRule', 'CSSRule', 'CSSStyleDeclaration',
  'CSSStyleRule', 'CSSStyleSheet', 'CharacterData', 'CloseEvent', 'Comment', 'CompositionEvent',
  'CustomElementRegistry', 'CustomEvent', 'DOMException', 'DOMImplementation', 'DOMParser',
  'DOMStringMap', 'DOMTokenList', 'DataView', 'Date', 'Document', 'DocumentFragment',
  'DocumentType', 'Element', 'Error', 'ErrorEvent', 'EvalError', 'Event', 'EventTarget', 'External',
  'File', 'FileList', 'FileReader', 'FinalizationRegistry', 'Float32Array', 'Float64Array',
  'FocusEvent', 'FormData', 'Function', 'HTMLAnchorElement', 'HTMLAreaElement', 'HTMLAudioElement',
  'HTMLBRElement', 'HTMLBaseElement', 'HTMLBodyElement', 'HTMLButtonElement', 'HTMLCanvasElement',
  'HTMLCollection', 'HTMLDListElement', 'HTMLDataElement', 'HTMLDataListElement',
  'HTMLDetailsElement', 'HTMLDialogElement', 'HTMLDirectoryElement', 'HTMLDivElement',
  'HTMLDocument', 'HTMLElement', 'HTMLEmbedElement', 'HTMLFieldSetElement', 'HTMLFontElement',
  'HTMLFormElement', 'HTMLFrameElement', 'HTMLFrameSetElement', 'HTMLHRElement', 'HTMLHeadElement',
  'HTMLHeadingElement', 'HTMLHtmlElement', 'HTMLIFrameElement', 'HTMLImageElement',
  'HTMLInputElement', 'HTMLLIElement', 'HTMLLabelElement', 'HTMLLegendElement', 'HTMLLinkElement',
  'HTMLMapElement', 'HTMLMarqueeElement', 'HTMLMediaElement', 'HTMLMenuElement', 'HTMLMetaElement',
  'HTMLMeterElement', 'HTMLModElement', 'HTMLOListElement', 'HTMLObjectElement',
  'HTMLOptGroupElement', 'HTMLOptionElement', 'HTMLOptionsCollection', 'HTMLOutputElement',
  'HTMLParagraphElement', 'HTMLParamElement', 'HTMLPictureElement', 'HTMLPreElement',
  'HTMLProgressElement', 'HTMLQuoteElement', 'HTMLScriptElement', 'HTMLSelectElement',
  'HTMLSlotElement', 'HTMLSourceElement', 'HTMLSpanElement', 'HTMLStyleElement',
  'HTMLTableCaptionElement', 'HTMLTableCellElement', 'HTMLTableColElement', 'HTMLTableElement',
  'HTMLTableRowElement', 'HTMLTableSectionElement', 'HTMLTemplateElement', 'HTMLTextAreaElement',
  'HTMLTimeElement', 'HTMLTitleElement', 'HTMLTrackElement', 'HTMLUListElement',
  'HTMLUnknownElement', 'HTMLVideoElement', 'HashChangeEvent', 'Headers', 'History', 'Image',
  'Infinity', 'InputEvent', 'Int16Array', 'Int32Array', 'Int8Array', 'Intl', 'JSON',
  'KeyboardEvent', 'Location', 'Map', 'Math', 'MediaList', 'MessageEvent', 'MimeType',
  'MimeTypeArray', 'MouseEvent', 'MutationObserver', 'MutationRecord', 'NaN', 'NamedNodeMap',
  'Navigator', 'Node', 'NodeFilter', 'NodeIterator', 'NodeList', 'Number', 'Object', 'Option',
  'PageTransitionEvent', 'Performance', 'Plugin', 'PluginArray', 'PopStateEvent',
  'ProcessingInstruction', 'ProgressEvent', 'Promise', 'Proxy', 'Range', 'RangeError',
  'ReferenceError', 'Reflect', 'RegExp', 'SVGAnimatedString', 'SVGElement', 'SVGGraphicsElement',
  'SVGNumber', 'SVGSVGElement', 'SVGStringList', 'SVGTitleElement', 'Screen', 'Selection', 'Set',
  'ShadowRoot', 'SharedArrayBuffer', 'StaticRange', 'Storage', 'StorageEvent', 'String',
  'StyleSheet', 'StyleSheetList', 'Symbol', 'SyntaxError', 'Text', 'TouchEvent', 'TreeWalker',
  'TypeError', 'UIEvent', 'URIError', 'URL', 'URLSearchParams', 'Uint16Array', 'Uint32Array',
  'Uint8Array', 'Uint8ClampedArray', 'ValidityState', 'WeakMap', 'WeakRef', 'WeakSet',
  'WebAssembly', 'WebSocket', 'WheelEvent', 'Window', 'XMLDocument', 'XMLHttpRequest',
  'XMLHttpRequestEventTarget', 'XMLHttpRequestUpload', 'XMLSerializer', 'XPathEvaluator',
  'XPathException', 'XPathExpression', 'XPathResult', 'alert', 'atob', 'blur', 'btoa',
  'captureEvents', 'clearInterval', 'clearTimeout', 'close', 'confirm', 'console', 'customElements',
  'decodeURI', 'decodeURIComponent', 'devicePixelRatio', 'document', 'encodeURI',
  'encodeURIComponent', 'escape', 'eval', 'event', 'external', 'focus', 'frameElement', 'frames',
  'getComputedStyle', 'getSelection', 'globalThis', 'history', 'innerHeight', 'innerWidth',
  'isFinite', 'isNaN', 'length', 'localStorage', 'location', 'locationbar', 'menubar', 'moveBy',
  'moveTo', 'name', 'navigator', 'onabort', 'onafterprint', 'onautocomplete', 'onautocompleteerror',
  'onbeforeprint', 'onbeforeunload', 'onblur', 'oncancel', 'oncanplay', 'oncanplaythrough',
  'onchange', 'onclick', 'onclose', 'oncontextmenu', 'oncuechange', 'ondblclick', 'ondrag',
  'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop',
  'ondurationchange', 'onemptied', 'onended', 'onerror', 'onfocus', 'onhashchange', 'oninput',
  'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onlanguagechange', 'onload', 'onloadeddata',
  'onloadedmetadata', 'onloadstart', 'onmessage', 'onmessageerror', 'onmousedown', 'onmouseenter',
  'onmouseleave', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onoffline', 'ononline',
  'onpagehide', 'onpageshow', 'onpause', 'onplay', 'onplaying', 'onpopstate', 'onprogress',
  'onratechange', 'onrejectionhandled', 'onreset', 'onresize', 'onscroll',
  'onsecuritypolicyviolation', 'onseeked', 'onseeking', 'onselect', 'onsort', 'onstalled',
  'onstorage', 'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle', 'onunhandledrejection',
  'onunload', 'onvolumechange', 'onwaiting', 'onwheel', 'open', 'origin', 'outerHeight',
  'outerWidth', 'pageXOffset', 'pageYOffset', 'parent', 'parseFloat', 'parseInt', 'performance',
  'personalbar', 'postMessage', 'print', 'prompt', 'queueMicrotask', 'releaseEvents', 'resizeBy',
  'resizeTo', 'screen', 'screenLeft', 'screenTop', 'screenX', 'screenY', 'scroll', 'scrollBy',
  'scrollTo', 'scrollX', 'scrollY', 'scrollbars', 'self', 'sessionStorage', 'setInterval',
  'setTimeout', 'status', 'statusbar', 'stop', 'toolbar', 'top', 'undefined', 'unescape',
  'webkitURL', 'window',
]

test('properties', t => {
  for(const prop of props) {
    t.true(window.hasOwnProperty(prop), 'window.' + prop)
  }
})

test('window.self', t => {
  t.true(window.self === window, 'window.self === window')
})

test('window.window', t => {
  t.true(window.window === window, 'window.window === window')
})
