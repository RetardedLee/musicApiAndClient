import types from 'constants/actionTypes'
import path from 'constants/apiPath'
var qs = require('querystringify');
export const musicLyricAction=(data)=>dispatch=>{
    let querystringify=qs.stringify(data,true)
        dispatch({
            type:types.public.MUSIC_LYRIC,
            payload: {
                content: null,
                status: 0
            }
        })
        return fetch(`${path.public.musicLyric}${querystringify}`, {
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
                    },type:types.public.MUSIC_LYRIC})
                    throw new Error("fetch error")
                    
                }
            }).then(response=>response.json())
            .then(body => {
                if (body.code == 200 && !body.nolyric && body.lrc.lyric) {
                 
                        dispatch({
                            payload: {
                                content: body.lrc.lyric,
                                status: 1
                            },
                            type:types.public.MUSIC_LYRIC
                        })
                
                    
                } else {
                     dispatch({
                        payload: {
                            content: null,
                            status: -1
                        },
                        type:types.public.MUSIC_LYRIC
                    })
                }
                return body
            })
    
}
