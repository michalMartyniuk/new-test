import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../store/rootReducer";
import App from "./App";

const HotApp = hot(App);
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <HotApp />
  </Provider>,
  document.getElementById("root")
);


