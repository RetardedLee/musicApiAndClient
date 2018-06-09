import React from 'react'
import {withRouter} from 'react-router-dom'
 class Friend extends React.Component{
    render(){
        console.log(this.props)
        return <div>朋友</div>
    }
}
export default withRouter(Friend)