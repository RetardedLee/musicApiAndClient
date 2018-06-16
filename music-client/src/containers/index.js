import React from 'react'
import App from 'component/root/App';
import createContainer from 'utils/createContainer'
import actions from 'action/publicAction'
import Music from './music'
import Vedio from './vedio'
let AppContainer=createContainer(App,"public",actions)
let routes=[
    {
        component:AppContainer,
        routes:[
            {
                path:"/music",
                component:Music/* lazyLoader(() => import('./music')) */,
            },
            {
                path:"/vedio",
                component:Vedio 
            }
        ]
    }
]
export default routes
