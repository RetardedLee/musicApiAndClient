import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const musicInfoAction=(data)=>fetchData(types.public.MUSIC_INFO,path.public.musicInfo,data,"songs")
