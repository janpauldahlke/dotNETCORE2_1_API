import * as React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import * as thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import * as ReactDOM from 'react-dom';
import App from './App';
import {rootReducer,AppStateInit } from './AppState';
import 'bootstrap/dist/css/bootstrap.css';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  rootReducer,
  AppStateInit.getInitialState(),
  //use compose to install redux dev tools like this
  compose(
    applyMiddleware(thunk.default, logger),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  ));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();