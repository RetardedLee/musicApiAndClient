import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const mvUrlAction=(data)=>fetchData(types.mv.MV_URL,path.mv.mvUrl,data,"data")