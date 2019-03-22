import React, { Component, useContext } from "react";
import ContextOne from "./states/ContextOne";
import ContextTwo from "./states/ContextTwo";

import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const { ContextOneState, ContextOneDispatch, ContextOneTypes } = useContext(
    ContextOne.Context
  );

  const { ContextTwoState, ContextTwoDispatch, ContextTwoTypes } = useContext(
    ContextTwo.Context
  );

  console.log(ContextTwoState, ContextOneState);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={() => ContextOneDispatch({ type: ContextOneTypes.UPDATE })}
        >
          Click
        </button>
      </header>
    </div>
  );
};

export default App;
