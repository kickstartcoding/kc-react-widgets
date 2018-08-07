import React, {Component} from 'react';
import {render} from 'react-dom';

import logo from './logo.svg';
import './index.css';

import { Button } from '../../src';

function Code({children}) {
  const text = children
    .replace(/\n\s*/g, "\n")
    .replace(/^\s+/g, '')
    .replace(/\s+$/g, '');
  return (
    <pre className={'Code'}>{text}</pre>
  );
}

class App extends Component {
  state = {
    button1: false,
  }

  render() {
    return (
      <div className="App">

        <header className="App-navigation">
          <img src={logo} className="App-logo" alt="bird" />
          <h1 className="App-title">
            KC Widgets
          </h1>
          <div className="App-rightNav">
            A React widget component collection by <a
            href="http://kickstartcoding.com/">Kickstart Coding</a>
          </div>
        </header>

        <div className="App-mainContent">

          <h1>Introduction</h1>

          <p>KC React Widgets is a suite of pre-styled react widgets.</p>

          <p>The widgets have a noticeable "3D", skeumorphic appearance, and
          are good for bold call-to-action widgets, such as "launch
          buttons".</p>

          <h1>Installation</h1>
          <div className="App-library">
            <div>
              <pre>npm install --save kc-react-widgets</pre>
              <strong>OR</strong>
              <pre>yarn add kc-react-widgets</pre>
            </div>
            <Code>{`
              import React, {Component} from 'react';
              import {Button} from 'kc-react-widgets';
            `}</Code>
          </div>

          <h1>Usage</h1>
          <div className="App-library">
            <div>
              <h3>Type</h3>
              <Button type="default">Default</Button>
              <Button type="primary">Primary</Button>
              <Button type="success">Success</Button>
              <Button type="warning">Warning</Button>
              <Button type="danger">Danger</Button>
            </div>
            <Code>{`
              <Button type="default">Default</Button>
              <Button type="primary">Primary</Button>
              <Button type="success">Success</Button>
              <Button type="warning">Warning</Button>
              <Button type="danger">Danger</Button>
            `}</Code>
          </div>

          <div className="App-library">
            <div>
              <h3>Size</h3>
              <Button size="small">Small</Button>
              <Button size="medium">Medium</Button>
              <Button size="large">Large</Button>
              <Button size="gigantic">Gigantic</Button>
            </div>
            <Code>{`
              <Button size="small">Small</Button>
              <Button size="medium">Medium</Button>
              <Button size="large">Large</Button>
              <Button size="gigantic">Gigantic</Button>
            `}</Code>
          </div>

          <div className="App-library">
            <div>
              <h3>Depth</h3>
              <Button depth="flat">Flat</Button>
              <Button depth="shallow">Shallow</Button>
              <Button depth="medium">Medium</Button>
              <Button depth="tall">Tall</Button>
              <Button depth="towering">Towering</Button>
            </div>
            <Code>{`
              <Button size="small">Small</Button>
              <Button size="medium">Medium</Button>
              <Button size="large">Large</Button>
              <Button size="gigantic">Gigantic</Button>
            `}</Code>
          </div>

          <div className="App-library">
            <div>
              <h3>Shape</h3>
              <Button shape="square">Square</Button>
              <Button shape="rounded">Rounded</Button>
              <Button shape="round">Round</Button>
            </div>
            <Code>{`
              <Button shape="square">Square</Button>
              <Button shape="rounded">Rounded</Button>
              <Button shape="round">Round</Button>
            `}</Code>
          </div>

          <div className="App-library">
            <div>
              <h3>With Image</h3>
              <Button icon={logo}>Icon</Button>
              <Button iconRight={logo}>Icon (Right)</Button>
              <Button iconEmoji={'☑'}>Icon Emoji</Button>
              <Button iconEmojiRight={'▽'}>Icon Emoji (Right)</Button>
            </div>
            <Code>{`
              <Button icon={logo}>Icon</Button>
              <Button iconRight={logo}>Icon (Right)</Button>
              <Button iconEmoji={'☑'}>Icon Emoji</Button>
              <Button iconEmojiRight={'▽'}>Icon Emoji (Right)</Button>
            `}</Code>
          </div>

          <div className="App-library">
            <div>
              <h3>Toggle me {this.state.button1.toString()}</h3>
              <Button
                value={this.state.button1}
                type="danger"
                height="towering"
                size="large"
                onChange={ev => this.setState({button1: ev.target.value})}
                >Toggle me</Button>
            </div>
            <Code>{`
              <Button
                value={this.state.button1}
                type="danger"
                height="towering"
                size="large"
                onChange={ev => this.setState({toggle: ev.target.value})}
                >Toggle me</Button>
            `}</Code>
          </div>
          <div className="App-library">
            <div>
              <h3>Customizing Colors</h3>
              <Button
                type="primary"
                style={{"--kcw-primary": "blue"}}
              >Button</Button>
            </div>
            <Code>{`
              .Button {--kcw-primary: blue; }
              OR
              <Button
                type="primary"
                style={{"--kcw-primary": "blue"}}
              >Button</Button>
            `}</Code>
          </div>


        </div>

      </div>
    );
  }
}


render(<App/>, document.querySelector('#demo'))
