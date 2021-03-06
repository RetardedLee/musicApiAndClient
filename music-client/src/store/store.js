import syncReducers from 'reducer/publicReducer'
import { applyMiddleware, createStore } from 'redux';
import {combineReducers} from 'redux'
import thunk from 'redux-thunk'
import musicReducer from 'reducer/music'
import vedioReducer from 'reducer/vedio'
import playlistReducer from 'reducer/playlist'
import artistReducer from 'reducer/artist'
import albumReducer from 'reducer/album'
import userReducer from 'reducer/user'
import vedioDetailReducer from 'reducer/vedioDetail'
import mvReducer from 'reducer/mvDetail'

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
 
  middlewares.push(logger);
}
const rootReducer=combineReducers({
          public:syncReducers,
          music:musicReducer,
          vedio:vedioReducer,
          playlist:playlistReducer,
          artist:artistReducer,
          album:albumReducer,
          user:userReducer,
          vedioPlay:vedioDetailReducer,
          mvPlay:mvReducer
}) 
const store = createStore(rootReducer,applyMiddleware(...middlewares));


export default store