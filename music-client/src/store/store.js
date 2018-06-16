import syncReducers from 'reducer/publicReducer'
import { applyMiddleware, createStore,compose } from 'redux';
import {combineReducers} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import initState from './initState'
import musicReducer from 'reducer/music'
import vedioReducer from 'reducer/vedio'
const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
 
  middlewares.push(logger);
}
const rootReducer=combineReducers({
  public:syncReducers,
  music:musicReducer,
  vedio:vedioReducer
}) 
const store = createStore(rootReducer,applyMiddleware(...middlewares));


export default store