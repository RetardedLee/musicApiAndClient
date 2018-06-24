import types from 'constants/actionTypes'
import initState from 'store/initState';
const userPlaylist=(init=initState.user.userPlaylist,action)=>{
    if(action.type==types.user.USER_PLAYLIST){
        return action.payload
    }
    return init;
}
export default userPlaylist