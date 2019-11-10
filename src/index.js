import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TestApp from './TestApp';
import Welcome from './welcome/welcome'
import Home from './home/home'
import * as serviceWorker from './serviceWorker';


//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <html>
    <body>
      <div id="app">
        <div id="scroll-container" style={{overflow: "hidden"}}>
          <Home />
      </div>
      </div>
    </body>
  </html>, document.getElementById('root'));
//ReactDOM.render(<div>hejo</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
