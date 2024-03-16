import { rootReducer } from './root-reduce';

import { compose, legacy_createStore, applyMiddleware } from 'redux';
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
// import { loggerMiddleware } from './middleware/logger';
import createSagaMiddleware from'redux-saga';

import { rootSaga } from './root-saga';

import logger from 'redux-logger'
// import { thunk } from 'redux-thunk';


const sagaMiddleware = createSagaMiddleware();

const middleWares = [
  process.env.NODE_ENV === 'development' && logger,
  // thunk,
  sagaMiddleware,
].filter(Boolean);
const composedEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const persistConfig={
  key:'root',
  storage,
  blacklist:['user'],
  whitelist:['cart']
}


const persistedReducer = persistReducer(persistConfig,rootReducer);

// const middleWares = [loggerMiddleware];



const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

export const store = legacy_createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);


export const persistor = persistStore(store);




