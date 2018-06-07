import { combineReducers } from 'redux'
import searchSuggest from './searchReducer'
import login from './loginReducer'
import playList from './playListReducer'
var publicReducer=combineReducers({
    searchSuggest,
    login,
    playList
})
export default combineReducers({
    public:publicReducer
})