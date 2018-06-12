import types from 'constants/actionTypes'
import initState from 'store/initState';
const musicUrl=(init=initState.public.musicUrl,action)=>{
    if(action.type==types.public.MUSIC_URL){
        return action.payload
    }
    return init;
}
export default musicUrl