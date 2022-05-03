import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./redux/RootReducer/RootReducer";
import * as signalR from "@aspnet/signalr";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { DOMAIN, DOMAIN_BE } from "./util/setting";

const store = createStore(rootReducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// export const connection = new signalR.HubConnectionBuilder()
//   .withUrl(`${DOMAIN}/DatVeHub`)
//   .configureLogging(signalR.LogLevel.Information)
//   .build();

export const connection = new signalR.HubConnectionBuilder()
  .withUrl(`${DOMAIN}/DatVeHub`)
  .configureLogging(signalR.LogLevel.Information)
  .build();

// connection.on("send", (data) => {
//   console.log(data);
// });
// connection.on("send", (data) => {
//   console.log(data);
// });

connection
  .start()
  .then(() => {
    root.render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  })
  .catch((error) => {
    console.log(error);
  });
