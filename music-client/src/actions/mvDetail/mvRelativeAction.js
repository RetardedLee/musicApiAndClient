import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const mvRelativeAction=(data)=>fetchData(types.mv.MV_RELATIVE,path.mv.mvRelative,data,"data")