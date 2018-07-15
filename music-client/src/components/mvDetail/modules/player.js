import React from 'react'
 class Player extends React.Component{
    render(){
        let {url,detail,getRef}=this.props
        return <div className="vedio-player">
                <h2 className="title"><span style={{marginRight:15}}>{"<"}</span>{detail.status===1?detail.content.title:null}</h2>
                    <video controls controlsList="nodownload" ref={getRef}>
                    {url.status===1?url.content.map((v,k)=><source src={v.url} type="video/mp4" key={v.id}/>):null}
                    </video>
                </div>
    }
}
export default Player