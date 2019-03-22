import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { CombinedProviders } from "./react-global-context";
import ContextOne from "./states/ContextOne";
import ContextTwo from "./states/ContextTwo";

ReactDOM.render(
  CombinedProviders([ContextOne.Provider, ContextTwo.Provider], <App />),
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
