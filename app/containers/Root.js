import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import App from './App';
import piplReducer from '../reducers/pipl';
import piplSaga from '../sagas/pipl';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const middleware = [
  createLogger(),
  routerMiddleware(history),
  sagaMiddleware,
];

const store = createStore(
  combineReducers({
    pipl: piplReducer,
    router: routerReducer,
  }),
  applyMiddleware(...middleware),
);

sagaMiddleware.run(piplSaga);

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
