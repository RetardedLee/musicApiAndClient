import { combineReducers } from 'redux'
import banner from './bannerReducer'
import recList from './recListReducer'
export default combineReducers({
    banner,
    recList
})