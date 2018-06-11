import React from 'react'
import {Link } from 'react-router-dom'
import {formatNumber} from 'utils/numberUtil'
import Radio from 'component/common/radio'
import LoadingInfo from 'component/common/LoadingInfo'
import Pagination from 'rc-pagination' 
const Group=Radio.Group
const Button=Radio.Button
export default class Playlist extends React.Component{
    constructor(props){
        super(props)
            this.state={
                current:1,
                cat:"1001"
            }
        
    }
    onChange=(e)=>{
        let cat=e.target.value
        this.setState({
            cat,
            current:1
        },(e)=>{
            if(this.props.catChange){
                this.props.catChange({cat,offset:0,limit:10})
            }
        })
        
      
    }
    onPageChange=(e)=>{
        let {state}=this
        this.setState({
            current:e
        },()=>{
            if(this.props.catChange){
                this.props.catChange({cat:state.cat,offset:(e-1)*10,limit:10})
            }
        })
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
            list=<div><ul className="artist-list rec-list">{props.data.tagList.content.map((v,k)=>{
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
            
            })}</ul>
            <Pagination total={props.data.tagList.total} current={state.current} onChange={this.onPageChange}/>
            </div>
        }
        return <div className="playlist">
            <Group onChange={this.onChange} defaultValue="全部" style={{padding:"15px 0"}}>
                <Button key={"all"} value={"全部"}>全部</Button>
                {tags}   
            </Group>
            
            <LoadingInfo status={props.data.tagList.status} component={list}></LoadingInfo>
        </div>
    }
}