import React from 'react';
import { render } from 'react-dom';
import createSagaMiddleware from "redux-saga";
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import rootReducer from './reducers';
import { applyMiddleware, createStore } from "redux";
import { logger } from 'redux-logger';
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

