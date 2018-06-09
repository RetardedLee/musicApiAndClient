import types from 'constants/actionTypes'
import initState from 'store/initState';
const recMv=(init=initState.music.recommend.recMv,action)=>{
    if(action.type==types.music.recommend.RECMV){
        return action.payload
    }
    return init;
}
export default recMv