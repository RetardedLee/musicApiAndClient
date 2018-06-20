import types from 'constants/actionTypes'
import initState from 'store/initState';
const artistAlbum=(init=initState.artist.artistAlbum,action)=>{
    if(action.type==types.artist.ARTIST_ALBUM){
        return action.payload
    }
    return init;
}
export default artistAlbum