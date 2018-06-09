import types from 'constants/actionTypes'
import initState from 'store/initState';
const allTag=(init=initState.music.playList.allTag,action)=>{
    if(action.type==types.music.playList.ALLTAG){
        return action.payload
    }
    return init;
}
export default allTag