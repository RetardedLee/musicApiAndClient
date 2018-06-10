import types from 'constants/actionTypes'
import initState from 'store/initState';
import {combineReducers} from 'redux'
console.log()
const rankSugre=(init=initState.music.ranking.rankSugre,action)=>{
    console.log(action)
    if(action.type==types.music.ranking.RANKING_SUGRE){
        return action.payload
    }
    return init;
}
const rankNew=(init=initState.music.ranking.rankNew,action)=>{
    if(action.type==types.music.ranking.RANKING_NEW){
        return action.payload
    }
    return init;
}
const rankOriginal=(init=initState.music.ranking.rankOriginal,action)=>{
    if(action.type==types.music.ranking.RANKING_ORIGINAL){
        return action.payload
    }
    return init;
}
const rankHot=(init=initState.music.ranking.rankHot,action)=>{
    if(action.type==types.music.ranking.RANKING_HOT){
        return action.payload
    }
    return init;
}
export default combineReducers({
        rankSugre,
        rankNew,
        rankOriginal,
        rankHot
}) 