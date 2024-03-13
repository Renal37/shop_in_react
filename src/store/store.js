import { compose, legacy_createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootRecuder } from "./root-reduce";



    const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
        Boolean
      );
  
  const composedEnhancers = compose(applyMiddleware(...middleWares));
  
  export const store = legacy_createStore(rootRecuder, undefined, composedEnhancers);