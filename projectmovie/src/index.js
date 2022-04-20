import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import thunk from "redux-thunk"
import { Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux";
import { rootReducer } from "./redux/RootReducer/RootReducer";

import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";


const store = createStore(rootReducer,applyMiddleware(thunk));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
