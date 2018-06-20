import React from 'react'
import App from 'component/root/App';
import createContainer from 'utils/createContainer'
import actions from 'action/publicAction'
import Music from './music'
import Vedio from './vedio'
import PlayList from './playlist'
import Artist from './artist'
let AppContainer=createContainer(App,"public",actions)
let routes=[
    {
        component:AppContainer,
        exact:true,   
        routes:[
            {
                path:"/music",
                component:Music,
            },
            {
                path:"/vedio",
                component:Vedio 
            },{
                path:"/playlist/:id",
                component:PlayList
            },
            ,{
                path:"/artist/:id",
                component:Artist
            }
        ]
    }
]
export default routes
