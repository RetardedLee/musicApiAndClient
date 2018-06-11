import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const newAlbumAction=(data)=>fetchData(types.music.newTest.NEW_ALBUM,path.music.newTest.newAlbum,data,"albums",true)