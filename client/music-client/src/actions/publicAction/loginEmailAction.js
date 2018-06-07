import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const loginEmailAction=(data)=>fetchData(types.public.LOGINEMAIL,path.public.loginEmail,data,"profile")
