import types from 'constants/actionTypes'
import initState from 'store/initState';
const allTag=(init="1",action)=>{
    if(action.type=="A"){
        return action.payload
    }
    return init;
}
export default allTag