import React from 'react'
import vedio from '../../vedio';
 class Player extends React.Component{
    render(){
        let {data}=this.props
        return <div className="vedio-player">
           <video src=""></video>
        </div>
    }
}
export default Player