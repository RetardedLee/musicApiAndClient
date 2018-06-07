import friendRouter from './friend'
import playlistRouter from './playlist'
import musicRouter from './music'
import vedioRouter from './vedio'
import App from 'component/root/App';
import createContainer from 'utils/createContainer'
import actions from 'action/publicAction'
let AppContainer=createContainer(App,"public",actions)
let routes=[
    {
        component:AppContainer,
        routes:[
            musicRouter,
            playlistRouter,
            friendRouter,
            vedioRouter
        ]
    }
]
export default routes