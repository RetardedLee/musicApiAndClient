import types from 'constants/actionTypes'
import initState from 'store/initState';
const userSubscribe=(init=initState.user.userSubscribe,action)=>{
    if(action.type==types.user.USER_SUBSCRIBE){
        return action.payload
    }
    return init;
}
export default userSubscribe