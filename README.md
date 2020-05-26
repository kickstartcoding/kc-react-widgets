# kc-react-widgets

[![kc-react-widget][npm-badge]][npm]

<!--
[![Travis][build-badge]][build]
[![Coveralls][coveralls-badge]][coveralls]
-->

KC React Widgets is a suite of pre-styled react widgets.

The widgets have a noticeable "3D", skeumorphic appearance, and are good for bold
call-to-action widgets, such as "launch buttons".

## Demo

![GIF](https://github.com/kickstartcoding/kc-react-widgets/raw/master/demo/togglingsample.gif)

[View demo of all widgets](https://kickstartcoding.github.io/kc-react-widgets/index.html)


## Installation


```bash
npm install --save kc-react-widgets   # using NPM
yarn add kc-react-widgets             # using yarn
```


## Example use

```javascript
import React, {Component} from 'react';
import {Button} from 'kc-react-widgets';

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

All widgets can be customized based on shape, color, 3D perspective depth.

* Button
  * Can also be used as a toggle (checkbox)
* Input
* Modal
* Card
* Dropdown

## License

`kc-react-widget` is licensed under the MIT license.

## Contributions

Pull requests are welcome!


[npm-badge]: https://img.shields.io/npm/v/kc-react-widgets.png?style=flat-square
[npm]: https://www.npmjs.org/package/kc-react-widgets


<!--
[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
-->
