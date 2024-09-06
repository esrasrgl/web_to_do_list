import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { Provider } from "react-redux";
import createStore from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
  <Provider store={createStore()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  </StrictMode>
);
