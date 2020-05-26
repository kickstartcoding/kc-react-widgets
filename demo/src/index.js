import React, { useState } from 'react';
import {render} from 'react-dom';

import logo from './logo.svg';
import './index.css';

import {
  Button,
  Dropdown,
  Card,
  Modal,
  Input,
} from '../../src';

function Code({children}) {
  const text = children
    .replace(/\n\s*/g, "\n")
    .replace(/^\s+/g, '')
    .replace(/\s+$/g, '');
  return (
    <pre className={'Code'}>{text}</pre>
  );
}

const NAV_ARRAY = [
  'Introduction',
  'Common',
  'Button',
  'Dropdown',
  'Card',
  'Modal',
  'Input',
];

function App() {
  const [button1, setButton1] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [input1, setInput1] = useState('');
  return (
    <div className="App">

      <header className="App-navigation">
        <img src={logo} className="App-logo" alt="bird" />
        <h1 className="App-title">
          KC React Widgets
        </h1>
        <div className="App-rightNav">
          A React widget component collection by <a
          href="http://kickstartcoding.com/">Kickstart Coding</a>
        </div>
      </header>

      <div className="App-sidebar">
        <div className="App-toc">
          <h1>Navigation</h1>
          {
            NAV_ARRAY.map(item => (
              <a href={'#' + item} key={item}>
                {/*{window.location.hash === ('#' + item) ? '&rdquo;' : ''}*/}
                {item}
              </a>
            ))
          }
        </div>
      </div>

      <div className="App-mainContent">

        <h1 id="Introduction">Introduction</h1>

        <p>KC React Widgets is a suite of styled react widgets.</p>

        <p>The widgets have a noticeable "3D", skeumorphic appearance, and
        are good for bold call-to-action widgets, such as "launch buttons".</p>

        <h2>Installation</h2>
        <div className="App-library">
          <div>
            <div>
              <Code>npm install --save kc-react-widgets</Code>
              <Code>yarn add kc-react-widgets</Code>
            </div>
          </div>
          <Code>{`
            import React, {useState} from 'react';
            /* etc */
            import {Button} from 'kc-react-widgets';
          `}</Code>
        </div>

        <h1 id="Common">Common</h1>
        <p>Thes properties can be used on all the different KC widgets. They
        are demoed here using the Button widget.</p>

        <h3>Type</h3>
        <div className="App-library">
          <div>
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

        <h3>Size</h3>
        <div className="App-library">
          <div>
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

        <h3>Depth</h3>
        <div className="App-library">
          <div>
            <Button depth="flat">Flat</Button>
            <Button depth="shallow">Shallow</Button>
            <Button depth="medium">Medium</Button>
            <Button depth="tall">Tall</Button>
            <Button depth="towering">Towering</Button>
          </div>
          <Code>{`
            <Button depth="flat">Flat</Button>
            <Button depth="shallow">Shallow</Button>
            <Button depth="medium">Medium</Button>
            <Button depth="tall">Tall</Button>
            <Button depth="towering">Towering</Button>
          `}</Code>
        </div>

        <h3>Shape</h3>
        <div className="App-library">
          <div>
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

        <h3>Customizing Colors</h3>
        <div className="App-library">
          <div>
            <Button
              type="primary"
              style={{"--kc-primary": "rebeccapurple"}}
            >Button</Button>
          </div>
          <Code>{`
            .kc-Button {--kc-primary: rebeccapurple; }
            OR
            <Button
              type="primary"
              style={{"--kc-primary": "rebeccapurple"}}
            >Button</Button>
          `}</Code>
        </div>

        <h1 id="Button">Button</h1>
        <h3>Default vs Quick Press</h3>
        <div className="App-library">
          <div>
            <Button depth="towering">Default</Button>
            <Button depth="towering" quickPress>Quick press</Button>
          </div>
          <Code>{`
            <Button depth="towering">Normal press</Button>
            <Button depth="towering" quickPress>Quick press</Button>
          `}</Code>
        </div>

        <h3>With Image</h3>
        <div className="App-library">
          <div>
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

        <h3>As Toggle ({button1.toString()})</h3>
        <div className="App-library">
          <div>
            <Button
              value={button1}
              type="danger"
              depth="towering"
              size="large"
              onChange={ev => setButton1(ev.target.value)}
              >Toggle me</Button>
          </div>
          <Code>{`
            <Button
              value={this.state.button1}
              type="danger"
              depth="towering"
              size="large"
              onChange={ev => this.setState({toggle: ev.target.value})}
              >Toggle me</Button>
          `}</Code>
        </div>

        <h1 id="Dropdown">
          Dropdown
        </h1>

        <h3>Basic</h3>
        <div className="App-library">
          <div>
            <div>
              <Button
                value={dropdown1}
                iconEmojiRight={dropdown1 ? '△' : '▽'}
                onClick={() => setDropdown1(!dropdown1)}
              >Show</Button>
              <Dropdown visible={dropdown1}>
                <p>Example Contents</p>
                <p>Example Contents</p>
                <p>Example Contents</p>
              </Dropdown>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.</p>
            </div>
          </div>
          <Code>{`
              <Button
                value={dropdown1}
                iconEmojiRight={dropdown1 ? '△' : '▽'}
                onClick={() => setDropdown1(!dropdown1)}
              >Show</Button>

              <Dropdown visible={dropdown1}>
                <p>Example Contents</p>
              </Dropdown>
          `}</Code>
        </div>

        <h3>Rightward</h3>
        <div className="App-library">
          <div>
            <div>
              <Button
                value={dropdown2}
                iconEmojiRight={dropdown2 ? '<' : '>'}
                onClick={() => setDropdown2(!dropdown2)}
              >Show</Button>

              <Dropdown visible={dropdown2} direction="right">
                <p>Example Contents</p>
                <p>Example Contents</p>
                <p>Example Contents</p>
              </Dropdown>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.</p>
            </div>
          </div>
          <Code>{`
              <Button
                value={dropdown2}
                iconEmojiRight={dropdown2 ? '<' : '>'}
                onClick={() => setDropdown2(!dropdown2)}
              >Show</Button>

              <Dropdown
                  visible={dropdown2}
                  direction="right">
                <p>Example Contents</p>
              </Dropdown>
          `}</Code>
        </div>

        <h1 id="Card">
          Card
        </h1>

        <div className="App-library">
          <div>
            <div>
              <Card>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.</p>
              </Card>
              <Card inset>
                <p>Lorem ipsum dolor sit amet</p>
              </Card>
            </div>
          </div>
          <Code>{`
              <Card>
                <p>Example Contents</p>
              </Card>
              <Card inset>
                <p>Example Contents</p>
              </Card>
          `}</Code>
        </div>

        <h1 id="Modal">
          Modal
        </h1>

        <h3>Basic</h3>
        <div className="App-library">
          <div>
            <div>
              <Button onClick={() => setModal1(true)}>Show Modal</Button>
              <Modal
                  visible={modal1}
                  onBackdropClick={() => setModal1(false)}>
                <Card type="primary">Modal title</Card>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.</p>
                <Button onClick={() => setModal1(false)}>Okay</Button>
              </Modal>
            </div>
          </div>
          <Code>{`
              <Button onClick={() => setModal1(true)}>Show Modal</Button>
              <Modal visible={modal1} onBackdropClick={() => setModal2(false)}>
                <Card type="primary">Modal title</Card>
                <p>Lorem ipsum dolor</p>
                <Button onClick={() => setModal1(false)}>Okay</Button>
              </Modal>
          `}</Code>
        </div>

        <h3>Bare children</h3>
        <div className="App-library">
          <div>
            <div>
              <Button onClick={() => setModal2(true)}>Show Modal</Button>
              <Modal
                  visible={modal2}
                  onBackdropClick={() => setModal2(false)}
                  bareChildren>
                <Card type="primary">Modal title</Card>
                <Card>
                  <p>Lorem ipsum dolor</p>
                </Card>
                <Card>
                  <Button onClick={() => setModal2(false)}>Okay</Button>
                </Card>
              </Modal>
            </div>
          </div>
          <Code>{`
              <Button onClick={() => setModal2(true)}>Show Modal</Button>
              <Modal
                  visible={modal2}
                  onBackdropClick={() => setModal2(false)}
                  bareChildren>
                <Card type="primary">Modal title</Card>
                <Card>
                  <p>Lorem ipsum dolor</p>
                </Card>
                <Card>
                  <Button onClick={() => setModal2(false)}>Okay</Button>
                </Card>
              </Modal>
          `}</Code>
        </div>


        <h1 id="Input">
          Input
        </h1>

        <div className="App-library">
          <div>
            <Input
              placeholder="Username"
              value={input1}
              onChange={ev => setInput1(ev.target.value)}
            />
            <Input raised
              placeholder="Username"
              value={input1}
              onChange={ev => setInput1(ev.target.value)}
            />
            <Input
              placeholder="Email"
              type="email"
              value={input1}
              onChange={ev => setInput1(ev.target.value)}
            />
            <div style={{ marginTop: "20px" }}>
              <Input flat
                placeholder="Username"
                value={input1}
                onChange={ev => setInput1(ev.target.value)}
              />
            </div>
          </div>
          <Code>{`
            <Input
              placeholder="Username"
              value={input1}
              onChange={ev => setInput1(ev.target.value)}
            />
            <Input raised
              placeholder="Username"
              value={input1}
              onChange={ev => setInput1(ev.target.value)}
            />
            <Input flat
              placeholder="Username"
              value={input1}
              onChange={ev => setInput1(ev.target.value)}
            />
          `}</Code>
        </div>


      </div>
    </div>
  );
}

render(<App/>, document.querySelector('#demo'))
