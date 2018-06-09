import types from 'constants/actionTypes'
import initState from 'store/initState';
const login=(init=initState.public.login,action)=>{
    if(action.type==types.public.LOGINMOBI || action.type==types.public.LOGINEMAIL || action.type==types.public.USERINFO){
        return action.payload
    }
    return init;
}
export default login