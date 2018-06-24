import types from 'constants/actionTypes'
import initState from 'store/initState';
const userSurvery=(init=initState.user.userSurvery,action)=>{
    if(action.type==types.user.USER_SURVERY){
        return action.payload
    }
    return init;
}
export default userSurvery