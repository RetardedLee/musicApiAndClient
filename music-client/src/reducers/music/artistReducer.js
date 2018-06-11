import types from 'constants/actionTypes'
import initState from 'store/initState';
import {combineReducers} from 'redux'
const artistTop=(init=initState.music.artist.artistTop,action)=>{
    if(action.type==types.music.artist.ARTIST_TOP){
        return action.payload
    }
    return init;
}
export default combineReducers({
    artistTop
}) 