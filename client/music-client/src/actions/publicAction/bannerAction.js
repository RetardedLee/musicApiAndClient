import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const bannerAction=(data)=>fetchData(types.public.BANNER,path.public.banner,data,"banners")