import types from 'constants/actionTypes'
import initState from 'store/initState';
const mvComment=(init=initState.mvPlay.mvComment,action)=>{
    if(action.type===types.mv.MV_COMMENT){
        return action.payload
    }
    return init;
}
export default mvComment