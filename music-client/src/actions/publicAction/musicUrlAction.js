import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const musicUrlAction=(data)=>fetchData(types.public.MUSIC_URL,path.public.musicUrl,data,"data")
