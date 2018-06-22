import React from 'react'
export default class ArtistSurvery extends React.Component{
     constructor(props){
         super(props)
        
     }
     componentDidMount(){
        
     }
    render(){
        let {data}=this.props
        return <div className="artist-survery">
                <div className="pic">
                    <img src={`${data.img1v1Url}?param=200y200`} alt={data.name}/>
                </div>
                <div className="info">
                    <span className="type">歌手</span>
                    <span className="name">{data.name}</span>{data.alias.map((k,v)=>{return <span className="alias" key={k}>{k}</span>})}
                    <div className="count"><i className="iconfont icon-cd_icon"></i>单曲数:<span>{data.musicSize}</span></div>
                    <div className="count"><i className="iconfont icon-zhuanji"></i>专辑数:<span>{data.albumSize}</span></div>
                    <div className="count"><i className="iconfont icon-ttpodicon"></i>mv数:<span>{data.mvSize}</span></div>
                </div>
                
        </div>
    }
}
