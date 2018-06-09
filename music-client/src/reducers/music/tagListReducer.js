import types from 'constants/actionTypes'
import initState from 'store/initState';
const tagList=(init=initState.music.playList.tagList,action)=>{
    if(action.type==types.music.playList.TAGLIST){
        return action.payload
    }
    return init;
}
export default tagList
