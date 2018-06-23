import types from 'constants/actionTypes'
import path from 'constants/apiPath'
var qs = require('querystringify');
export const albumCommentAction=(data)=>dispatch=>{
    let querystringify=qs.stringify(data,true)
        let type=types.album.ALBUM_COMMENT
        dispatch({
            type,
            payload: {
                content: null,
                status: 0
            }
        })
        return fetch(`${path.album.albumComment}${querystringify}`, {
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
                    throw new Error("fetch error")
                    
                }
            }).then(response=>response.json())
            .then(body => {
                if (body.code == 200 && body.total && body.comments ) {
                    let hotComment=[]
                    if(body.hotComments){
                        hotComment=body.hotComments
                    }
                        dispatch({
                            payload: {
                                content: {comments:body.comments,hotComments:hotComment,total:body.total},
                                status: 1
                            },
                            type
                        })
                
                    
                } else {
                     dispatch({
                        payload: {
                            content: null,
                            status: -1
                        },
                        type
                    })
                }
                return body
            })
    
}
