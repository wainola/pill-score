import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";

import "semantic-ui-css/semantic.min.css";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import rootReducer from "./rootReducer";
import { userLoggedIn } from "./actions/user";

const middlewares = [ thunk, logger];
const enhancers = applyMiddleware(...middlewares);

const store = createStore(
  rootReducer,
  composeWithDevTools(enhancers)
);

if (localStorage.getItem('user')) {
  const user = JSON.parse(localStorage.getItem('user'));

  // TODO: set authorization header;
  store.dispatch(userLoggedIn({ data: user }));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
