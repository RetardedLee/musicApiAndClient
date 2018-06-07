
import types from 'constants/actionTypes'
import initState from 'store/initState';
const playList=(init=initState.public.playList,action)=>{
    if(action.type==types.public.PLAYLIST){
        return action.payload
    }
    return init;
}
export default playList