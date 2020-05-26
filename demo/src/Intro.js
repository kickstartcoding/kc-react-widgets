import React from 'react';

function Intro() {
  return (
    <div>
      <h1>Introduction</h1>

      <p>KC React Widgets is a suite of styled react widgets.</p>

      <p>The widgets have a noticeable "3D", skeumorphic appearance, and
      are good for bold call-to-action widgets, such as "launch buttons".</p>

      <h2>Features</h2>



      <h2>Installation</h2>
      <div className="App-library">
        <div>
          <pre>npm install --save kc-react-widgets</pre>
          <strong>OR</strong>
          <pre>yarn add kc-react-widgets</pre>
        </div>
        <Code>{`
          import React, {useState} from 'react';
          /* etc */
          import {Button} from 'kc-react-widgets';
        `}</Code>
      </div>
    </div>
  );
}

export default Intro
