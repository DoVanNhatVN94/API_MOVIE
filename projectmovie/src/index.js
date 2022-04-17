import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./redux/RootReducer/RootReducer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";


const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
