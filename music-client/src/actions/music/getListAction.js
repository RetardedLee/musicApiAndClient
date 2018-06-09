// playlists
import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const getListAction=(data)=>fetchData(types.music.playList.TAGLIST,path.music.playList.tagList,data,"playlists")