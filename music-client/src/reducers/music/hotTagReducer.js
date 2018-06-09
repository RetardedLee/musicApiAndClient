import types from 'constants/actionTypes'
import initState from 'store/initState';
const hotTag=(init=initState.music.playList.hotTag,action)=>{
    if(action.type==types.music.playList.HOTTAG){
        return action.payload
    }
    return init;
}
export default hotTag
