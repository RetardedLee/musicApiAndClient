import types from 'constants/actionTypes'
import initState from 'store/initState';
import {combineReducers} from 'redux'
const newAlbum=(init=initState.music.newTest.newAlbum,action)=>{
    if(action.type==types.music.newTest.NEW_ALBUM){
        return action.payload
    }
    return init;
}
export default combineReducers({
    newAlbum
}) 