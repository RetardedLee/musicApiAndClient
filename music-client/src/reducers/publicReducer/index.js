import { combineReducers } from 'redux'
import searchSuggest from './searchReducer'
import login from './loginReducer'
import playList from './playListReducer'
import musicInfo from './musicInfoReducer'
import musicUrl from './musicUrlReducer'
import musicLyric from './musicLyricReducer'
export default combineReducers({
    searchSuggest,
    login,
    playList,
    musicInfo,
    musicLyric,
    musicUrl
})
