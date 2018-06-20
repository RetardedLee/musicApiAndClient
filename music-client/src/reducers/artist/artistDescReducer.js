import types from 'constants/actionTypes'
import initState from 'store/initState';
const artistDesc=(init=initState.artist.artistDesc,action)=>{
    if(action.type==types.artist.ARTIST_DESC){
        return action.payload
    }
    return init;
}
export default artistDesc