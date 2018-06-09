import syncReducers from 'reducer/publicReducer'
import { applyMiddleware, createStore } from 'redux';
import {combineReducers} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import initState from './initState'
let store=createStore(syncReducers,applyMiddleware(thunk,logger))
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