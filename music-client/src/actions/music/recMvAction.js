import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const recMvAction=(data)=>fetchData(types.music.recommend.RECMV,path.music.recommend.recMv,data,"result")