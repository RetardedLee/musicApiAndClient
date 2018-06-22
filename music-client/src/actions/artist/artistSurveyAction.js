import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const artistSurveyAction=(data)=>fetchData(types.artist.ARTIST_SURVERY,path.artist.artistSurvey,data,"artist")