import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PortScannerPage from "./pages/PortScannerPage";
import Store from "./store/Store";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <PortScannerPage />
    </Store>
  </React.StrictMode>,
  document.getElementById("root")
);
