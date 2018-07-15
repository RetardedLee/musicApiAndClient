import { combineReducers } from 'redux'
import vedioDetail from './vedioDetailReducer'
import vedioComment from './vedioCommentReducer'
import vedioRelative from './vedioRelativeReducer'
import vedioUrl from './vedioUrlReducer'
export default combineReducers({
    vedioDetail,
    vedioComment,
    vedioRelative,
    vedioUrl
})