import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const vedioUrlAction=(data)=>fetchData(types.vedio.VEDIO_URL,path.vedio.vedioUrl,data,"urls")