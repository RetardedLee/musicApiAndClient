import types from 'constants/actionTypes'
import initState from 'store/initState';
const playListDetail=(init=initState.playList.playListDetail,action)=>{
    if(action.type==types.playList.PLAYLIST_DETAIL){
        return action.payload
    }
    return init;
}
export default playListDetail