import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './hoc/Test';

import logProps from './hoc/Index';
import Profiler from './profiler/Index';

const TestComponent = logProps(Test)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Now
        </a>

        <TestComponent />

        <Profiler />
      </header>
    </div>
  );
}

export default App;
