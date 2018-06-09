import types from 'constants/actionTypes'
import initState from 'store/initState';
const banner=(init=initState.music.recommend.banner,action)=>{
    if(action.type==types.music.recommend.BANNER){
        return action.payload
    }
    return init;
}
export default banner