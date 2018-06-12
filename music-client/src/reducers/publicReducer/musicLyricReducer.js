import types from 'constants/actionTypes'
import initState from 'store/initState';
const musicLyric=(init=initState.public.musicLyric,action)=>{
    if(action.type==types.public.MUSIC_LYRIC){
        return action.payload
    }
    return init;
}
export default musicLyric