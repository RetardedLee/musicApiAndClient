import types from 'constants/actionTypes'
import initState from 'store/initState';
const vedioList=(init=initState.vedio.vedioList,action)=>{
    if(action.type==types.vedio.VEDIO_LIST){
        return action.payload
    }
    return init;
}
export default vedioList