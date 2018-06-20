import React from 'react'
import {withRouter} from 'react-router-dom'
import actions from 'action/artist'
import createContainer from 'utils/createContainer'
import "./index.scss"
 class Artist extends React.Component{
    render(){
        console.log(this.props)
        return <div>歌手列表</div>
    }
}
export default createContainer(withRouter(Artist),"playlist",actions)