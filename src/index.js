import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { reducer } from "./store/reducer";
import { Provider } from "react-redux";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
