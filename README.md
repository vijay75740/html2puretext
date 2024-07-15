<div align="center" style="color: #cb3837;">
<h1>html2plaintext</h1>

![Known Vulnerabilities](https://snyk.io/test/github/vijay75740/html2puretext/badge.svg?targetFile=package.json)  ![supported node versions](https://img.shields.io/badge/node%20v-12.x%20%7C%2013.x%20%7C%2014.x%20%7C%2015.x%20%7C%2016.x%20%7C%2017.x%20%7C%2018.x-blue) 
 ![license: MIT](https://img.shields.io/npm/l/vue.svg) [![npm version](https://badge.fury.io/js/html2puretext.svg)](https://badge.fury.io/js/html2puretext) ![npm](https://img.shields.io/npm/dm/html2puretext)
<p>html2puretext is a robust library designed for converting HTML content into clean, readable plaintext. This utility simplifies the transformation process by efficiently handling various HTML elements, including lists, styles, and scripts.</p>
</div>

## Getting started

<p>Convert html-formatted text to plaintext</p>

<ul>
<li>strip tags</li>
<li>reformat ordered/unordered lists</li>
<li>treat whitespace like a browser</li>
<li>decode html entities</li>
</ul>

### Installation

This package can be installed using `npm`

```bash
npm install html2puretext
```

or, `yarn`

```bash
yarn add html2puretext
```

### Usage

```javascript
var h2p = require('html2puretext')

h2p('<p>Hello,\n   &amp; <em>my name is <a href="https://github.com/vijay75740/html2puretext">Vijay</a></em></p>')
// => "Hello, & my name is Vijay"
```

## Disclaimer

This package uses html code convert to normal text.

## Issues

If any issues are found, they can be reported [here](https://github.com/vijay75740/html2puretext/issues).

## License

This project is licensed under the [MIT](LICENSE) license.