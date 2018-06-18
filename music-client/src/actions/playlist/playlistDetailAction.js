import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const playListDetailAction=(data)=>fetchData(types.playList.PLAYLIST_DETAIL,path.playList.playListDetail,data,"playlist")