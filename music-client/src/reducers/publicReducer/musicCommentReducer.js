import types from 'constants/actionTypes'
import initState from 'store/initState';
const musicComment=(init=initState.public.musicComment,action)=>{
    if(action.type==types.public.MUSIC_COMMENT){
        return action.payload
    }
    return init;
}
export default musicComment