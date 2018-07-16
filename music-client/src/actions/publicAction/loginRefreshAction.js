
import path from 'constants/apiPath'
import {userInfoAction} from './userInfoAction'
console.log(userInfoAction) 
export const loginRefreshAction=(data)=>dispatch=>fetch(path.public.loginRefresh, {
                    credentials: 'include',
                    method: "GET",
                    cache: "no-cache",
                    mode: "cors"
                })
                .then((response)=>response.json())
                .then((json)=>{
                    console.log(json)
                    if(json.code === 301){
                        dispatch({
                        type:'USERINFO',
                        payload:{
                            status:-1,
                            content:null
                        }
                    })
                    }else if(json.code === 200 ){
                        return json
                    }
                })
