import { compose, legacy_createStore, applyMiddleware } from 'redux';
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
// import { loggerMiddleware } from './middleware/logger';
import logger from 'redux-logger'

import { rootReducer } from './root-reduce';


const persistConfig={
  key:'root',
  storage,
  blacklist:['user'],
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

// const middleWares = [loggerMiddleware];
const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);

const composedEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

export const store = legacy_createStore(persistedReducer, undefined, composedEnhancers);


export const persistor = persistStore(store);