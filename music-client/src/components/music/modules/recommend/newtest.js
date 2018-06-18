import React from 'react'
import {Link } from 'react-router-dom'
export default class Newtest extends React.Component{
    onClick(item){
        this.props.playMusic(item)
    }
    render(){
        let {props,state}=this
        if(props.data.status===1){
            return <ul className="newTest">
                        {props.data.content.map((v,k)=><li key={v.id} className="item">
                            <p className="rank">{props.musicInfo.status===1 && props.musicInfo.content[0].id===v.id?<i className="iconfont icon-zhengzaibofang" style={{color:"red",fontSize:20}}></i>:(k+1)}</p>
                            <div className="relative">
                                <img src={`${v.song.album.picUrl}?param=40y40`} className="block"/>
                                <i className="iconfont icon-bofang1" onClick={this.onClick.bind(this,v)}></i>
                            </div>
                            <div className="info">
                                <h3 className="name" title={v.name}>{v.name}</h3>
                                <h4 className="artist" title={v.song.artists[0].name}><Link to={`/artist/${v.song.artists[0].id}`} className="artist-link">{v.song.artists[0].name}</Link></h4>
                            </div>
                            
                        </li>)}
                    </ul>
        }
        return null
        
    }
}