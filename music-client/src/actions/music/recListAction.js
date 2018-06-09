import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const recListAction=(data)=>fetchData(types.music.recommend.RECLIST,path.music.recommend.recList,data,"recommend")