import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const rankOriginalAction=(data={index:2})=>{
    return fetchData(types.music.ranking.RANKING_ORIGINAL,path.music.ranking.topList,data,"playlist")
}
export const rankHotAction=(data={index:1})=>{
    return fetchData(types.music.ranking.RANKING_HOT,path.music.ranking.topList,data,"playlist")
}
export const rankNewAction=(data={index:0})=>{
    return fetchData(types.music.ranking.RANKING_NEW,path.music.ranking.topList,data,"playlist")
}
export const rankSurgeAction=(data={index:3})=>{
    return fetchData(types.music.ranking.RANKING_SUGRE,path.music.ranking.topList,data,"playlist")
}
