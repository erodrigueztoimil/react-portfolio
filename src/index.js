import React from "react";
import ReactDOM from "react-dom";

// mdbootstrap css
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

// react bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// local css
import "./assets/styles/index.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
