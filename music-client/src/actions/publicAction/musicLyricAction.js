import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const musicLyricAction=(data)=>fetchData(types.public.MUSIC_LYRIC,path.public.musicLyric,data,"lrc")
