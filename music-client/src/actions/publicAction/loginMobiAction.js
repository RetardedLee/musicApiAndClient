import types from 'constants/actionTypes'
import path from 'constants/apiPath'
var qs = require('querystringify');
export const loginMobiAction=(data)=>dispatch=>fetch(path.public.loginMobi, {
                    credentials: 'include',
                    method: "POST",
                    cache: "no-cache",
                    mode: "cors",
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'}, 
                    body:qs.stringify(data)
                })
                .then((response)=>response.json())
                .then((json)=>{
                    console.log(json)
                    if(json.code === 200){
                        dispatch({
                            type:types.public.LOGINMOBI,
                            payload:{
                                status:1,
                                content:json.profile
                        }
                    })
                    }else{
                        dispatch({
                            type:types.public.LOGINMOBI,
                            payload:{
                                status:-1,
                                content:null
                        }
                    })
                    }
                })
