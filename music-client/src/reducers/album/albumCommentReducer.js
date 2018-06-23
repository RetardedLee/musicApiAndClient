import types from 'constants/actionTypes'
import initState from 'store/initState';
const albumComment=(init=initState.album.albumComment,action)=>{
    if(action.type==types.album.ALBUM_COMMENT){
        return action.payload
    }
    return init;
}
export default albumComment