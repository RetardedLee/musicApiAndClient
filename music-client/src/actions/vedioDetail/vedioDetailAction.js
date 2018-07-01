import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const vedioDetailAction=(data)=>fetchData(types.vedio.VEDIO_DETAIL,path.vedio.vedioDetail,data,"data")