
import types from 'constants/actionTypes'
import initState from 'store/initState';
const searchSuggest=(init=initState.public.searchSuggest,action)=>{
    if(action.type==types.public.SEARCHSUGGEST){
        return action.payload
    }
    return init;
}
export default searchSuggest