const { JSDOM } = require('jsdom')
const { window } = new JSDOM

module.exports = window
