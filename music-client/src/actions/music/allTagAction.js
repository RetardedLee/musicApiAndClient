// sub
import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const allTagAction=(data)=>fetchData(types.music.playList.ALLTAG,path.music.playList.allTag,data,"sub")