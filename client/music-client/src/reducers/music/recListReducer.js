import types from 'constants/actionTypes'
import initState from 'store/initState';
const recList=(init=initState.music.recommend.recList,action)=>{
    if(action.type==types.music.recommend.RECLIST){
        return action.payload
    }
    return init;
}
export default recList