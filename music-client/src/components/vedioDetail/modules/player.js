import React from 'react'
const URL =require("url-parse")
 class Player extends React.Component{
    render(){
        
        let {url,detail,getRef}=this.props
       
        return <div className="vedio-player">
                <h2 className="title"><span style={{marginRight:15}}>{"<"}</span>{detail.status===1?detail.content.name:null}</h2>
                    <video controls controlsList="nodownload" ref={getRef} autoPlay>
                    {url.status===1?url.content.map((v,k)=>{
                        var u=encodeURIComponent(v.url)
                           return <source src={`http://localhost:3000/vedio/play?target=${u}`} type="video/mp4" key={v.id}/>}):null}
                    </video>
                </div>
    }
}
export default Player