
import types from 'constants/actionTypes'
import initState from 'store/initState';
const userInfo=(init=initState.public.userInfo,action)=>{
    if(action.type===types.public.USERINFO){
        return action.payload
    }
    return init;
}
export default userInfo