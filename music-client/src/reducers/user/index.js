import { combineReducers } from 'redux'
import userPlaylist from './userPlaylistReducer'
import userSubscribe from './userSubscribeReducer'
import userSubvery from './userSurveryReducer'
export default combineReducers({
    userPlaylist,
    userSubscribe,
    userSubvery
})