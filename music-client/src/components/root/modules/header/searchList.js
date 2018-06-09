import React from 'react'
import {Link} from 'react-router-dom'
export default class SearchList extends React.Component{
    constructor(props){
        super(props)
    }
    onItemClick=(value,event)=>{
        console.log(value)
    }
    render(){
        let {data}=this.props
        console.log(data)
        let searchDom=null
        if(data.status==1){
            searchDom=data.content.order.map((v,i)=>{
                let title=""
                let icon=""
                if(v==="songs"){
                    title="单曲"
                    icon="icon-gequguanli"
                }else if(v==="albums"){
                    title="专辑"
                    icon="icon-zhuanji"
                }else if(v==="playlists"){
                    title="歌单"
                    icon="icon-gedan"
                }else if(v==="artists"){
                    title="歌手"
                    icon="icon-ttpodicon1"
                }
                else{
                    title="视频"
                    icon="icon-ttpodicon"
                }
                return <div className="item" key={v}>
                         <h3 className="left"><i className={`iconfont ${icon}`}></i><em className="f-fl">{title}</em></h3>
                         <ul className="right">
                         { data.content[v].map((value,index)=>{
                             return <li key={value.id}>
                                        <Link className="s-fc0 f-thide xtag" onClick={this.onItemClick.bind(this,v,value)} title={value.name} to="/hello">{value.name}</Link>
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