import types from 'constants/actionTypes'
import path from 'constants/apiPath'
var qs = require('querystringify');
export const userSubscribeAction=(data)=>dispatch=>{
    let querystringify=qs.stringify(data,true)
    let type=types.user.USER_SUBSCRIBE
        dispatch({
            type,
            payload: {
                content: null,
                status: 0
            }
        })
        return fetch(`${path.user.userPlaylist}${querystringify}`, {
                credentials: 'include',
                method: "GET",
                cache: "no-cache",
                mode: "cors"
            }).then(response => {
                if(response.status >= 200 && response.status < 300){
                    return response
                }else{
                    dispatch({payload:{
                        content:null,
                        status:-5
                    },type})
                    dispatch({payload:{
                        content:null,
                        status:-5
                    },type:types.user.USER_PLAYLIST})
                    throw new Error("fetch error")
                    
                }
            }).then(response=>response.json())
            .then(body => {
                if (body.code == 200 ) {
                        let playlist=body.playlist.filter((v,k)=>{
                           
                            return data.id==v.creator.userId
                            
                        })
                        let sublist=body.playlist.filter((v,k)=>{
                            console.log(v.userId,v.creator.userId)
                            return data.id != v.creator.userId
                        })
                        console.log(playlist,sublist,"sfsdfsdfsdfsdfsdfsdf")
                        dispatch({
                            payload: {
                                content: {
                                    hasmore:body.more,
                                    data:sublist
                                },
                                status: 1
                            },
                            type
                        })
                        
                        dispatch({
                            payload: {
                                content: playlist,
                                status: 1
                            },
                            type:types.user.USER_PLAYLIST
                        })
                        
                    
                } else {
                     dispatch({
                        payload: {
                            content: null,
                            status: -1
                        },
                        type
                    })
                    dispatch({
                        payload: {
                            content: null,
                            status: -1
                        },
                        type:types.user.userPlaylist
                    })
                }
                return body
            })
    
}
