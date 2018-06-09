import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const userInfoAction=(data)=>fetchData(types.public.USERINFO,path.public.userInfo,data,"userInfo")