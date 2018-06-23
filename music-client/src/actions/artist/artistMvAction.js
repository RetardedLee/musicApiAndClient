import types from 'constants/actionTypes'
import path from 'constants/apiPath'
var qs = require('querystringify');
export const artistMvAction=(data)=>dispatch=>{
    let querystringify=qs.stringify(data,true)
    let type=types.artist.ARTIST_MV
        dispatch({
            type,
            payload: {
                content: null,
                status: 0
            }
        })
        return fetch(`${path.artist.artistMv}${querystringify}`, {
                credentials: 'include',
                method: "GET",
                cache: "no-cache",
                mode: "cors"
            }).then(response => {
                if(response.status >= 200 && response.status < 300){
                    return response
                }else{
                    dispatch({payload:{
                        content:{
                            data:[],
                            hasmore:false
                        },
                        status:-5
                    },type})
                    throw new Error("fetch error")
                    
                }
            }).then(response=>response.json())
            .then(body => {
                if (body.code == 200) {
                 if(body.mvs.length){
                    dispatch({
                        payload: {
                            content: {
                                data:body.mvs,
                                hasmore:body.hasMore
                            },
                            status: 1
                        },
                        type
                    })
                 }else{
                    dispatch({payload:{
                        content:{
                            data:[],
                            hasmore:false
                        },
                        status:-1
                    },type})
                 }    
                } else {
                    dispatch({payload:{
                        content:{
                            data:[],
                            hasmore:false
                        },
                        status:-5
                    },type})
                }
                return body
            })
    
}
