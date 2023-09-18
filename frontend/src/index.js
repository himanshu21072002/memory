import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {legacy_createStore as createStore} from 'redux'
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import "./index.css"
import App from "./app";
import reducers from "./reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
    <App />
  </Provider>
);

