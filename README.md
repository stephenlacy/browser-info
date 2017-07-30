#browser-info
[![Build Status](https://travis-ci.org/stevelacy/browser-info.png?branch=master)](https://travis-ci.org/stevelacy/browser-info)
[![NPM version](https://badge.fury.io/js/browser-info.png)](http://badge.fury.io/js/browser-info)


## Information

<table>
<tr>
<td>Package</td><td>browser-info</td>
</tr>
<tr>
<td>Description</td>
<td>Get browser info</td>
</tr>
</table>

## Usage

#### Install

```sh
$ npm install --save-dev browser-info
```

## Example

```js
var browserInfo = require('browser-info');

// on Browser
browserInfo();
 // => {name: 'Chrome', version: '42', fullVersion: '42.1246.0.12', os: 'Linux'}

// on Server
browserInfo(req.headers['user-agent']);
 // => same info
```

#### PRs welcome for additional features

## LICENSE [MIT](LICENSE)
