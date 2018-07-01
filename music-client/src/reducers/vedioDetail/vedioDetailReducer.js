import types from 'constants/actionTypes'
import initState from 'store/initState';
const vedioDetail=(init=initState.vedioPlay.vedioDetail,action)=>{
    if(action.type==types.vedio.VEDIO_DETAIL){
        return action.payload
    }
    return init;
}
export default vedioDetail