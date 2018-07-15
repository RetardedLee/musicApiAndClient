import types from 'constants/actionTypes'
import initState from 'store/initState';
const mvRelative=(init=initState.mvPlay.mvRelative,action)=>{
    if(action.type===types.mv.MV_RELATIVE){
        return action.payload
    }
    return init;
}
export default mvRelative