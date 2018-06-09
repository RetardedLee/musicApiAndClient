import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const loginMobiAction=(data)=>fetchData(types.public.LOGINMOBI,path.public.loginMobi,data,"profile")
