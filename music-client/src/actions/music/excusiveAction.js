import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const excusiveAction=(data)=>fetchData(types.music.recommend.EXCLUSIVE,path.music.recommend.excusive,data,"result")