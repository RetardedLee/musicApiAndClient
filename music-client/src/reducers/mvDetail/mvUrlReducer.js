import types from 'constants/actionTypes'
import initState from 'store/initState';
const mvUrl=(init=initState.mvPlay.mvUrl,action)=>{
    if(action.type===types.mv.MV_URL){
        return action.payload
    }
    return init;
}
export default mvUrl