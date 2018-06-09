import types from 'constants/actionTypes'
import initState from 'store/initState';
const newTest=(init=initState.music.recommend.newTest,action)=>{
    if(action.type==types.music.recommend.NEWTEST){
        return action.payload
    }
    return init;
}
export default newTest