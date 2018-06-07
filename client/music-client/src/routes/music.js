import React from 'react'
import { withRouter } from 'react-router-dom'
import Loadable from 'react-loadable'
import createContainer from 'utils/createContainer'
import Music from 'component/music'
export default{
        path:"/music",
        component:withRouter(Music),
    }