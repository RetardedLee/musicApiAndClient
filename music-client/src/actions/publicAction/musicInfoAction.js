import types from 'constants/actionTypes'
import path from 'constants/apiPath'
import fetchData from 'utils/fetchData'
export const musicInfoAction=(data)=>({type:types.public.MUSIC_INFO,payload:{status:1,content:data}})
