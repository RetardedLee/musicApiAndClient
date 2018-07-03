import types from 'constants/actionTypes'
import initState from 'store/initState';
const vedioRelative=(init=initState.vedioPlay.vedioRelative,action)=>{
    if(action.type==types.vedio.VEDIO_RELATIVE){
        return action.payload
    }
    return init;
}
export default vedioRelative