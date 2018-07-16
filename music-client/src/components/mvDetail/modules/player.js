import React from 'react'
 class Player extends React.Component{
    render(){
        let {url,detail,getRef}=this.props
        return <div className="vedio-player">
                <h2 className="title"><span style={{marginRight:15}}>{"<"}</span>{detail.status===1?detail.content.title:null}</h2>
                    <video controls controlsList="nodownload" ref={getRef} autoPlay>
                    {url.status===1?
                    <source src={`http://localhost:3000/vedio/play?target=${url.content.url}`} type="video/mp4" />:null}
                    </video>
                </div>
    }
}
export default Player