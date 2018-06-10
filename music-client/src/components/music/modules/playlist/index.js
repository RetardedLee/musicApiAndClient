import React from 'react'
import {Link } from 'react-router-dom'
import {formatNumber} from 'utils/numberUtil'
import Radio from 'component/common/radio'
import LoadingInfo from 'component/common/LoadingInfo' 
const Group=Radio.Group
const Button=Radio.Button
export default class Playlist extends React.Component{
    onChange=(e)=>{
        let cat=e.target.value
        if(this.props.catChange){
            this.props.catChange({cat})
        }
      
    }
    render(){
        let {state,props}=this
        let tags=null
        let list=null
        if(props.data.hotTag.status==1){
            tags=props.data.hotTag.content.map((k,v)=>{
                return <Button key={k.id} value={k.name}>{k.name}</Button>
            })
        }
        if(props.data.tagList.status==1){
            list=props.data.tagList.content.map((v,k)=>{
                return <li className="rec-item" key={v.id}>
                <Link to={`/playlist/${v.id}`} className="block">
                    <p className="relative"><img src={`${v.coverImgUrl}?param=130y130`} alt={v.name}/>
                    <span className="listens"><i className="iconfont icon-1"></i>{formatNumber(v.playCount)}</span>
                    <span className="creator" title={v.creator.nickname}><i className="iconfont icon-ren"></i>{v.creator.nickname}</span>
                    <span className="play"><i className="iconfont icon-bofang1"></i></span>
                    </p>
                    <p className="desc" title={v.name}>{v.name}</p>
                </Link>
            </li>
            })
        }
        return <div className="playlist">
            <Group onChange={this.onChange} defaultValue="全部" style={{padding:"15px 0"}}>
                <Button key={"all"} value={"全部"}>全部</Button>
                {tags}   
            </Group>
            <ul className="rec-list">
            <LoadingInfo status={props.data.tagList.status} component={list}></LoadingInfo>
            </ul>
        </div>
    }
}