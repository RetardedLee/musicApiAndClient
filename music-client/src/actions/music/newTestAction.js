import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const newTestAction=(data)=>fetchData(types.music.recommend.NEWTEST,path.music.recommend.newTest,data,"result")