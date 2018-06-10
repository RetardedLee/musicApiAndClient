import { combineReducers } from 'redux'
import banner from './bannerReducer'
import recList from './recListReducer'
import recMv from './recMvReducer'
import newTest from './newTestReducer'
import excusive from './excusiveReducer'
import allTag from './allTagReducer'
import hotTag from './hotTagReducer'
import tagList from './tagListReducer'
import ranking from './rankingReducer'
export default combineReducers({
    banner,
    recList,
    recMv,
    newTest,
    excusive,
    allTag,
    hotTag,
    tagList,
    ranking
})