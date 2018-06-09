import React from 'react'
import {Link} from 'react-router-dom'
export default class SearchList extends React.Component{
    constructor(props){
        super(props)
        this.state={showResult:false}
    }
    onItemClick=(value,event)=>{
        console.log(value,event)
        event.preventDefault()
        console.log(value)
    }
    render(){
        let {data}=this.props

        let searchDom=null
        if(data.status==1){
            searchDom=data.content.order.map((v,i)=>{
                let title=""
                let icon=""
                let basePath=""
                if(v==="songs"){
                    title="单曲"
                    icon="icon-gequguanli"
                    basePath=""
                }else if(v==="albums"){
                    title="专辑"
                    icon="icon-zhuanji"
                    basePath="/album"
                }else if(v==="playlists"){
                    title="歌单"
                    icon="icon-gedan",
                    basePath="/playlist"
                }else if(v==="artists"){
                    title="歌手"
                    icon="icon-ttpodicon1"
                    basePath="/artist"
                }
                else{
                    title="视频"
                    icon="icon-ttpodicon"
                    basePath="/video"
                }
                return <div className="item" key={v}>
                         <h3 className="left"><i className={`iconfont ${icon}`}></i><em className="f-fl">{title}</em></h3>
                         <ul className="right">
                         { data.content[v].map((value,index)=>{
                             return <li key={value.id}>
                                    {
                                        v==="songs"?<a className="" title={value.name} onClick={this.onItemClick.bind(this,value)}>{value.name}</a>:<Link className="s-fc0 f-thide xtag" title={value.name} to={`${basePath}/${value.id}`}>{value.name}</Link>
                                    }
                                    </li>
                         })}
                        </ul>
                        </div>
            })
        }
        return <div className="search-wrap" >
                    {searchDom}
                    </div>
    }
}