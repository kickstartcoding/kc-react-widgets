import React, {Component} from 'react';
import {render} from 'react-dom';

import logo from './logo.svg';
import './index.css';

import { Button } from '../../src';

class App extends Component {
  state = {
    button1: false,
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="bird" />
          <h1 className="App-title">
            KC Widgets - Buttons
          </h1>
        </header>

        <div className="App-library">
          <div>
            <h1>Type</h1>
            <Button type="default">Default</Button>
            <Button type="primary">Primary</Button>
            <Button type="success">Success</Button>
            <Button type="warning">Warning</Button>
            <Button type="danger">Danger</Button>
          </div>

          <div>
            <h1>Size</h1>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
            <Button size="gigantic">Gigantic</Button>
          </div>

          <div>
            <h1>Depth</h1>
            <Button depth="flat">Flat</Button>
            <Button depth="shallow">Shallow</Button>
            <Button depth="medium">Medium</Button>
            <Button depth="tall">Tall</Button>
            <Button depth="towering">Towering</Button>
          </div>

          <div>
            <h1>Shape</h1>
            <Button shape="square">Square</Button>
            <Button shape="rounded">Rounded</Button>
            <Button shape="round">Round</Button>
          </div>

          <div>
            <h1>With Image</h1>
            <Button icon={logo}>Icon</Button>
            <Button iconRight={logo}>Icon (Right)</Button>
            <Button iconEmoji={'☑'}>Icon Emoji</Button>
            <Button iconEmojiRight={'▽'}>Icon Emoji (Right)</Button>
          </div>

        </div>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="bird" />
          <h1 className="App-title">
            Kickstart Component Library - Toggles
          </h1>
        </header>
        <div className="App-library">
          <div>
            <h1>Toggle me {this.state.button1.toString()}</h1>
            <Button
              value={this.state.button1}
              type="danger"
              height="towering"
              size="large"
              onChange={ev => this.setState({button1: ev.target.value})}
              >Toggle me</Button>
          </div>
        </div>
      </div>
    );
  }
}


render(<App/>, document.querySelector('#demo'))
