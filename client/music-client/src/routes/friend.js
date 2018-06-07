import { withRouter } from 'react-router-dom'
import Friend from 'component/friend/'
export default{
        path:"/friend",
        component:withRouter(Friend),
        exact:true
    }