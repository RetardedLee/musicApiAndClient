import types from 'constants/actionTypes'
import path from 'constants/apiPath'
var qs = require('querystringify')
export const loginEmailAction=(data)=>dispatch=>fetch(path.public.loginEmail, {
                    credentials: 'include',
                    method: "POST",
                    cache: "no-cache",
                    mode: "cors",
                    body:qs.stringify(data,true)
                })
                .then((response)=>response.json())
                .then((json)=>{
                    if(json.code === 200){
                        dispatch({
                            type:types.public.LOGINEMAIL,
                            payload:{
                                status:1,
                                content:json.profile
                        }
                    })
                    }else{
                        dispatch({
                            type:types.public.LOGINEMAIL,
                            payload:{
                                status:-1,
                                content:null
                        }
                    })
                    }
                })
