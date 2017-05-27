import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';

import App from './App';

const history = createBrowserHistory();

const store = createStore(
  combineReducers({
    router: routerReducer,
  }),
  applyMiddleware(routerMiddleware(history)),
);

export default function Root() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          l<Route path="/" component={App} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}
