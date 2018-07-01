import { combineReducers } from 'redux'
import vedioDetail from './vedioDetailReducer'
import vedioComment from './vedioCommentReducer'
export default combineReducers({
    vedioDetail,
    vedioComment
})