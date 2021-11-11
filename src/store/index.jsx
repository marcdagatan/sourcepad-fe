import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const ENV = process.env.NODE_ENV;

let composeEnhancers = compose;

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const devToolsCondition = typeof window === 'object' && reduxDevTools;

if (ENV !== 'production' && devToolsCondition) {
  composeEnhancers = reduxDevTools({});
}

const enhancer = composeEnhancers(applyMiddleware(thunk));
const persistedReducer = persistReducer({ key: 'root', storage }, reducers);

const store = createStore(persistedReducer, {}, enhancer);
const persistor = persistStore(store);

const Root = ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Root, store };
