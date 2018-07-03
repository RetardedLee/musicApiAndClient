import React from 'react'
import vedio from '../../vedio';
 class Player extends React.Component{
    render(){
        let {url,detail}=this.props
        return <div className="vedio-player">
                <h2 className="title">{detail.status===1?detail.content.title:null}</h2>
                    <video controls controlsList="nodownload">
                    {url.status===1?url.content.map((v,k)=><source src={v.url} type="video/mp4" key={v.id}/>):null}
                    </video>
                </div>
    }
}
export default Player