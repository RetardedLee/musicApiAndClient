import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const playListAction=(data)=>fetchData(types.public.PLAYLIST,path.public.playlist,data,"playlist")
