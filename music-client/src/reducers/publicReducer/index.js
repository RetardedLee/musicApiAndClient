import { combineReducers } from 'redux'
import searchSuggest from './searchReducer'
import login from './loginReducer'
import playList from './playListReducer'
export default combineReducers({
    searchSuggest,
    login,
    playList
})
