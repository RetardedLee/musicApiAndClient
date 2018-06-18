import syncReducers from 'reducer/publicReducer'
import { applyMiddleware, createStore } from 'redux';
import {combineReducers} from 'redux'
import thunk from 'redux-thunk'
import musicReducer from 'reducer/music'
import vedioReducer from 'reducer/vedio'
import playlistReducer from 'reducer/playlist'
const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
 
  middlewares.push(logger);
}
const rootReducer=combineReducers({
  public:syncReducers,
  music:musicReducer,
  vedio:vedioReducer,
  playlist:playlistReducer
}) 
const store = createStore(rootReducer,applyMiddleware(...middlewares));


export default store