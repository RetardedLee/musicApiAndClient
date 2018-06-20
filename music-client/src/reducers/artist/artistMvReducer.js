import types from 'constants/actionTypes'
import initState from 'store/initState';
const artistMv=(init=initState.artist.artistMv,action)=>{
    if(action.type==types.artist.ARTIST_MV){
        return action.payload
    }
    return init;
}
export default artistMv