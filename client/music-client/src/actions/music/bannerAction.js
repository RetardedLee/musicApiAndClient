import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const bannerAction=(data)=>fetchData(types.music.recommend.BANNER,path.music.recommend.banner,data,"banners")