import types from 'constants/actionTypes'
import initState from 'store/initState';
const albumDetail=(init=initState.album.albumDetail,action)=>{
    if(action.type==types.album.ALBUM_DETAIL){
        return action.payload
    }
    return init;
}
export default albumDetail