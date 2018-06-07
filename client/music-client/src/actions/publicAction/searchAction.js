import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const searchAction=(data)=>fetchData(types.public.SEARCHSUGGEST,path.public.searchSuggest,data,"result")
