// tags
import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const hotTagAction=(data)=>fetchData(types.music.playList.HOTTAG,path.music.playList.hotTag,data,"tags")