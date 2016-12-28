# react-proxes-components

Elasticsearch React Components for the ProxES project.

## Demo & Examples

Live demo: [jrgns.github.io/react-proxes-components](http://jrgns.github.io/react-proxes-components/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-proxes-components is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-proxes-components.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-proxes-components --save
```

## Usage

```
var ProxesComponents = require('react-proxes-components');

<ProxesComponents>Example</ProxesComponents>
```

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

Copyright (c) Jade IT cc 2016.

ProxesComponents is an Open Source project licensed under the terms of
the LGPLv3 license.  Please see <http://www.gnu.org/licenses/lgpl-3.0.html>
for license text.

A commercial-friendly license allowing private forks and modifications of
ProxesComponents is available.  Please contact info@jadeit.co.za more detail.
