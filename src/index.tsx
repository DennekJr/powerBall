import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <App />
        </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
