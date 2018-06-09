import { combineReducers } from 'redux'
import banner from './bannerReducer'
import recList from './recListReducer'
import recMv from './recMvReducer'
import newTest from './newTestReducer'
import excusive from './excusiveReducer'
export default combineReducers({
    banner,
    recList,
    recMv,
    newTest,
    excusive
})