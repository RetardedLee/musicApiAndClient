import React from 'react'
import {withRouter} from 'react-router-dom'
 class Album extends React.Component{
    render(){
        console.log(this.props)
        return <div>专辑详情</div>
    }
}
export default withRouter(Album)