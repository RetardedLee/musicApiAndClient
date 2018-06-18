import { combineReducers } from 'redux'
import playListDetail from './playListDetailReducer'
import playListComment from './playListCommentReducer'
export default combineReducers({
    playListDetail,
    playListComment
})