import types from 'constants/actionTypes'
import initState from 'store/initState';
const vedioUrl=(init=initState.vedioPlay.vedioUrl,action)=>{
    if(action.type==types.vedio.VEDIO_URL){
        return action.payload
    }
    return init;
}
export default vedioUrl