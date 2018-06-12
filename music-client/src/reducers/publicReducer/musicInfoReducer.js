import types from 'constants/actionTypes'
import initState from 'store/initState';
const musicInfo=(init=initState.public.musicInfo,action)=>{
    if(action.type==types.public.MUSIC_INFO){
        return action.payload
    }
    return init;
}
export default musicInfo