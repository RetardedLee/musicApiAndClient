import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const artistTopAction=(data)=>fetchData(types.music.artist.ARTIST_TOP,path.music.artist.artistList,data,"artists")