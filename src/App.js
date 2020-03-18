import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Counter from './Counter';
// import Buttons from './Buttons';
// import BtnGroup from './BtnGroup';
// import Component from './Component';

export default () => {

  return (
    <div className="App">
      <header className="App-header">
        <Counter count={5}/>
        {/* <Buttons /> */}
        <Component />
        <BtnGroup />
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
          Learn React
        </a>


      </header>
    </div>
  );
}

