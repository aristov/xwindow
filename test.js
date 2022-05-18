const test = require('ava')
const { JSDOM } = require('jsdom')
const window = require('.')
const props = [
  'AbstractRange', 'Attr', 'Audio', 'BarProp', 'CDATASection', 'CSSImportRule', 'CSSMediaRule',
  'CSSRule', 'CSSStyleDeclaration', 'CSSStyleRule', 'CSSStyleSheet', 'CharacterData', 'CloseEvent',
  'Comment', 'CompositionEvent', 'CustomElementRegistry', 'CustomEvent', 'DOMException',
  'DOMImplementation', 'DOMParser', 'DOMStringMap', 'DOMTokenList', 'Document', 'DocumentFragment',
  'DocumentType', 'Element', 'ErrorEvent', 'Event', 'EventTarget', 'External', 'File', 'FileList',
  'FileReader', 'FocusEvent', 'FormData', 'HTMLAnchorElement', 'HTMLAreaElement',
  'HTMLAudioElement', 'HTMLBRElement', 'HTMLBaseElement', 'HTMLBodyElement', 'HTMLButtonElement',
  'HTMLCanvasElement', 'HTMLCollection', 'HTMLDListElement', 'HTMLDataElement',
  'HTMLDataListElement', 'HTMLDetailsElement', 'HTMLDialogElement', 'HTMLDirectoryElement',
  'HTMLDivElement', 'HTMLDocument', 'HTMLElement', 'HTMLEmbedElement', 'HTMLFieldSetElement',
  'HTMLFontElement', 'HTMLFormElement', 'HTMLFrameElement', 'HTMLFrameSetElement', 'HTMLHRElement',
  'HTMLHeadElement', 'HTMLHeadingElement', 'HTMLHtmlElement', 'HTMLIFrameElement',
  'HTMLImageElement', 'HTMLInputElement', 'HTMLLIElement', 'HTMLLabelElement', 'HTMLLegendElement',
  'HTMLLinkElement', 'HTMLMapElement', 'HTMLMarqueeElement', 'HTMLMediaElement', 'HTMLMenuElement',
  'HTMLMetaElement', 'HTMLMeterElement', 'HTMLModElement', 'HTMLOListElement', 'HTMLObjectElement',
  'HTMLOptGroupElement', 'HTMLOptionElement', 'HTMLOptionsCollection', 'HTMLOutputElement',
  'HTMLParagraphElement', 'HTMLParamElement', 'HTMLPictureElement', 'HTMLPreElement',
  'HTMLProgressElement', 'HTMLQuoteElement', 'HTMLScriptElement', 'HTMLSelectElement',
  'HTMLSlotElement', 'HTMLSourceElement', 'HTMLSpanElement', 'HTMLStyleElement',
  'HTMLTableCaptionElement', 'HTMLTableCellElement', 'HTMLTableColElement', 'HTMLTableElement',
  'HTMLTableRowElement', 'HTMLTableSectionElement', 'HTMLTemplateElement', 'HTMLTextAreaElement',
  'HTMLTimeElement', 'HTMLTitleElement', 'HTMLTrackElement', 'HTMLUListElement',
  'HTMLUnknownElement', 'HTMLVideoElement', 'HashChangeEvent', 'Headers', 'History', 'Image',
  'InputEvent', 'KeyboardEvent', 'Location', 'MediaList', 'MessageEvent', 'MimeType',
  'MimeTypeArray', 'MouseEvent', 'MutationObserver', 'MutationRecord', 'NamedNodeMap', 'Navigator',
  'Node', 'NodeFilter', 'NodeIterator', 'NodeList', 'Option', 'PageTransitionEvent', 'Performance',
  'Plugin', 'PluginArray', 'PopStateEvent', 'ProcessingInstruction', 'ProgressEvent', 'Range',
  'SVGAnimatedString', 'SVGElement', 'SVGGraphicsElement', 'SVGNumber', 'SVGSVGElement',
  'SVGStringList', 'SVGTitleElement', 'Screen', 'Selection', 'ShadowRoot', 'StaticRange', 'Storage',
  'StorageEvent', 'StyleSheet', 'StyleSheetList', 'Text', 'TouchEvent', 'TreeWalker', 'UIEvent',
  'ValidityState', 'WheelEvent', 'Window', 'XMLDocument', 'XMLHttpRequest',
  'XMLHttpRequestEventTarget', 'XMLHttpRequestUpload', 'XMLSerializer', 'XPathEvaluator',
  'XPathException', 'XPathExpression', 'XPathResult', 'alert', 'atob', 'blur', 'btoa',
  'captureEvents', 'close', 'confirm', 'customElements', 'devicePixelRatio', 'document', 'event',
  'external', 'focus', 'frameElement', 'frames', 'getComputedStyle', 'getSelection', 'history',
  'innerHeight', 'innerWidth', 'localStorage', 'location', 'locationbar', 'menubar', 'moveBy',
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
  'outerWidth', 'pageXOffset', 'pageYOffset', 'parent', 'personalbar', 'postMessage', 'print',
  'prompt', 'releaseEvents', 'resizeBy', 'resizeTo', 'screen', 'screenLeft', 'screenTop', 'screenX',
  'screenY', 'scroll', 'scrollBy', 'scrollTo', 'scrollX', 'scrollY', 'scrollbars', 'self',
  'sessionStorage', 'status', 'statusbar', 'stop', 'toolbar', 'top', 'webkitURL', 'window',
]

test('properties', t => {
  for(const prop of props) {
    t.true(window.hasOwnProperty(prop), 'window.' + prop)
  }
})

test('window.self', t => {
  t.is(window.self, window)
})

test('window.window', t => {
  t.is(window.window, window)
})

test('window.parent', t => {
  t.is(window.parent, window)
})

test('global.window', t => {
  delete require.cache[require.resolve('.')]
  global.window = (new JSDOM).window
  t.is(require('.'), global.window)
  delete global.window
})
