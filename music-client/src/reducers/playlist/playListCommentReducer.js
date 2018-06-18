import types from 'constants/actionTypes'
import initState from 'store/initState';
const playListComment=(init=initState.playList.playListComment,action)=>{
    if(action.type==types.playList.PLAYLIST_COMMENT){
        return action.payload
    }
    return init;
}
export default playListComment