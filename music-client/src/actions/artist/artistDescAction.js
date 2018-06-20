import types from 'constants/actionTypes'
import path from 'constants/apiPath'
var qs = require('querystringify');
export const artistDescAction=(data)=>dispatch=>{
    let querystringify=qs.stringify(data,true)
    let type=types.artist.ARTIST_DESC
        dispatch({
            type,
            payload: {
                content: null,
                status: 0
            }
        })
        return fetch(`${path.artist.artistDesc}${querystringify}`, {
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
                            data:null,
                            hasmore:false
                        },
                        status:-5
                    },type})
                    throw new Error("fetch error")
                    
                }
            }).then(response=>response.json())
            .then(body => {
                var data={}
                if (body.code == 200 && body.mvs) {
                        if(body.briefDesc){
                            data["briefDesc"]=body.briefDesc
                        }
                        if(body.introduction){
                            data["introduction"]=body.introduction
                        }
                        if(body.topicData){
                            data["topicData"]=body.topicData
                        }
                        dispatch({
                            payload: {
                                content: {
                                    data,
                                },
                                status: 1
                            },
                            type
                        })
                
                    
                } else {
                    dispatch({payload:{
                        content:{
                            data:null,
                            hasmore:false
                        },
                        status:-5
                    },type})
                }
                return body
            })
    
}
