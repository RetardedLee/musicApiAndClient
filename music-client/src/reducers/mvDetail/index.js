import { combineReducers } from 'redux'
import mvDetail from './mvDetailReducer'
import mvComment from './mvCommentReducer'
import mvRelative from './mvRelativeReducer'
import mvUrl from './mvUrlReducer'
export default combineReducers({
    mvDetail,
    mvComment,
    mvRelative,
    mvUrl
})