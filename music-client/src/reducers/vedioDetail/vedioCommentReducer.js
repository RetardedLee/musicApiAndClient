import types from 'constants/actionTypes'
import initState from 'store/initState';
const vedioComment=(init=initState.vedioPlay.vedioComment,action)=>{
    if(action.type==types.vedio.VEDIO_COMMENT){
        return action.payload
    }
    return init;
}
export default vedioComment