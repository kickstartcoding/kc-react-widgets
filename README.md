# kc-react-widgets

[![npm package][npm-badge]][npm]

<!--
[![Travis][build-badge]][build]
[![Coveralls][coveralls-badge]][coveralls]
-->

KC React Widgets is a suite of pre-styled react widgets.

The widgets have a noticeable "3D", skeumorphic appearance, and are good for bold
call-to-action widgets, such as "launch buttons".

## Installation


```bash
npm install --save kc-react-widgets   # using NPM
yarn add kc-react-widgets             # using yarn
```


## Example use

```javascript
import React, {Component} from 'react';
import {Button} from '../../src';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button onClick={() => console.log('Hello world!')}>
          Click me!
        </Button>
      </div>
    );
  }
}
```


## Widgets available

* Button
  * Can be customized based on shape, color, 3D perspective depth
  * Can be used as a toggle (checkbox)


<!--
[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
-->
