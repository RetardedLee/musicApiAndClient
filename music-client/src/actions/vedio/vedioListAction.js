import types from 'constants/actionTypes'
import path from 'constants/apiPath'
var qs = require('querystringify');
export const vedioListAction=(data)=>dispatch=>{
    let querystringify=qs.stringify(data,true)
    let type=types.vedio.VEDIO_LIST
        dispatch({
            type,
            payload: {
                content: {
                data:[],
                hasMore:false
                },
                status: 0
            }
        })
        return fetch(`${path.vedio.vedioList}${querystringify}`, {
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
                            hasMore:false
                        },
                        status:-5
                    },type})
                    throw new Error("fetch error")
                    
                }
            }).then(response=>response.json())
            .then(body => {
                if (body.code == 200 && body.data) {
                 
                        dispatch({
                            payload: {
                                content: {
                                    data:body.data,
                                    hasMore:body.hasMore
                                },
                                status: 1
                            },
                            type
                        })
                
                    
                } else {
                     dispatch({
                        payload: {
                            content: {
                                data:[],
                                hasMore:false
                            },
                            status: -1
                        },
                        type
                    })
                }
                return body
            })
    
}
