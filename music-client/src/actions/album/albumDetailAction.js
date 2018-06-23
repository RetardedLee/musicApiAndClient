import types from 'constants/actionTypes'
import path from 'constants/apiPath'
var qs = require('querystringify');
export const albumDetailAction=(data)=>dispatch=>{
    let querystringify=qs.stringify(data,true)
    let typeDetail=types.album.ALBUM_DETAIL
    let typeSong=types.album.ALBUM_SONG
        dispatch({
            type:typeSong,
            payload: {
                content: [],
                status: 0
            }
        })
        dispatch({
            type:typeDetail,
            payload: {
                content: null,
                status: 0
            }
        })
        return fetch(`${path.album.albumDetail}${querystringify}`, {
                credentials: 'include',
                method: "GET",
                cache: "no-cache",
                mode: "cors"
            }).then(response => {
                if(response.status >= 200 && response.status < 300){
                    return response
                }else{
                    dispatch({payload:{
                        content:[],
                        status:-5
                    },type:typeSong})
                    dispatch({payload:{
                        content:null,
                        status:-5
                    },type:typeDetail})
                    throw new Error("fetch error")
                }
            }).then(response=>response.json())
            .then(body => {
                if (body.code == 200) {
                 if(body.songs && body.songs.length){
                    dispatch({
                        payload: {
                            content: body.songs,
                            status: 1
                        },
                        type:typeSong
                    })
                 }
                 if(body.album && body.album != null){
                    dispatch({
                        payload: {
                            content: body.album,
                            status: 1
                        },
                        type:typeDetail
                    })
                 }
                        
                
                    
                } else {
                    dispatch({payload:{
                        content:[],
                        status:-1
                    },type:typeSong})
                    dispatch({payload:{
                        content:null,
                        status:-1
                    },type:typeDetail})

                }
                return body
            })
    
}
