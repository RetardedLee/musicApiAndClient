import types from 'constants/actionTypes'
import initState from 'store/initState';
const albumSong=(init=initState.album.albumSong,action)=>{
    if(action.type==types.album.ALBUM_SONG){
        return action.payload
    }
    return init;
}
export default albumSong