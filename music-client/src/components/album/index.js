import React from 'react'
import {withRouter} from 'react-router-dom'
import createContainer from 'utils/createContainer'
import actions from 'action/album'
 class Album extends React.Component{
    render(){
        console.log(this.props)
        return <div>专辑详情</div>
    }
}
export default createContainer(withRouter(Album),"album",actions)