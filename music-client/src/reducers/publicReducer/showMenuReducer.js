
import types from 'constants/actionTypes'
import initState from 'store/initState';
const showMenu=(init=initState.public.showMenu,action)=>{
    if(action.type===types.public.SHOW_MENU){
        return action.content
    }
    return init;
}
export default showMenu