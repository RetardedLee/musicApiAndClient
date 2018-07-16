import types from 'constants/actionTypes'
import initState from 'store/initState';
const mvDetail=(init=initState.mvPlay.mvDetail,action)=>{
    if(action.type===types.mv.MV_DETAIL){
        return action.payload
    }
    return init;
}
export default mvDetail