import { combineReducers } from 'redux'
import albumComment from './albumCommentReducer'
import albumDetail from './albumDetailReducer'
import albumSong from './albumSongReducer'
export default combineReducers({
    albumComment,
    albumDetail,
    albumSong
})