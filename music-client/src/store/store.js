import syncReducers from 'reducer/publicReducer'
import { applyMiddleware, createStore,compose } from 'redux';
import {combineReducers} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import initState from './initState'
const middlewares = [thunk];
 
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
 
  middlewares.push(logger);
}
 
const store = compose(applyMiddleware(...middlewares))(createStore)(syncReducers);
export const createRootReducer = (asyncReducers) => {
  return combineReducers({
      ...asyncReducers,
      public:syncReducers
    })
  }
  
  export const injectReducer = ( key, reducer ) => {
    let asyncReducers={}
    asyncReducers[key] = reducer
    store.replaceReducer(createRootReducer(asyncReducers))

  }

export default store