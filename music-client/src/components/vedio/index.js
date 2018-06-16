import React from 'react'
import createContainer from 'utils/createContainer'
import actions from 'action/vedio'

class Vedio extends React.Component{
    render(){
        console.log(this.props)
        return <div>视频</div>
    }
}
export default createContainer(Vedio,"vedio",actions)