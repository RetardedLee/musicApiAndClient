import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const mvDetailAction=(data)=>fetchData(types.mv.MV_DETAIL,path.mv.mvDetail,data,"data")