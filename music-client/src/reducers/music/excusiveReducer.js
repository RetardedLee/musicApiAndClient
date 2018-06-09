import types from 'constants/actionTypes'
import initState from 'store/initState';
const excusive=(init=initState.music.recommend.excusive,action)=>{
    if(action.type==types.music.recommend.EXCLUSIVE){
        return action.payload
    }
    return init;
}
export default excusive