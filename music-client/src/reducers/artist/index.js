import { combineReducers } from 'redux'
import artistAlbum from './artistAlbumReducer'
import artistMv from './artistMvReducer'
import artistSurvey from './artistSurveyReducer'
import artistDesc from './artistDescReducer'
export default combineReducers({
    artistAlbum,
    artistDesc,
    artistMv,
    artistSurvey
})