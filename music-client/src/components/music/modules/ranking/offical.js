import React from 'react'
import titleConfig from './titleConfig'
import {Link} from 'react-router-dom'
import moment from 'moment'
const TopTag=(props)=>{
    let {type,color,id,data,title,col,clickFun,updateTime}=props
    if(data.status==1){
        return <dl key={col} className="rank-tag" >
                <dt style={{backgroundImage:`linear-gradient(45deg,${color[0]},${color[1]})`,width:"100%"}} onClick={(e)=>{clickFun(data.content.trackIds
)}} className="head"><span className="title">{title}</span><span className="updatetime">{`${moment(updateTime).format("MM月DD日")}更新`}</span><i className="iconfont icon-bofang1"></i></dt>
                {data.content.tracks.map((v,k)=>{
                    var icon=""
                    if(type===1){
                        if(data.content.trackIds[k].lr==undefined){
                            icon="icon-new"
                        }else{
                            if(data.content.trackIds[k].lr > k){
                                icon="icon-down-copy"
                            }else{
                                icon="icon-up3"
                            }
                        }
                    }
                    return type===0?<dd key={v.id} className="rank-item"><i className="rk">{k+1}</i><i className="percent">{`${data.content.trackIds[k].ratio}%`}</i><span className="name" title={v.name}>{v.name}</span><span className="artist" title={v.ar[0].name}>{v.ar[0].name}</span></dd>:<dd key={v.id} className="rank-item"><i className="rk">{k+1}</i><i className={`iconfont ${icon}`}></i><span className="name" title={v.name}>{v.name}</span><span className="artist" title={v.ar[0].name}>{v.ar[0].name}</span></dd>
                })}
                <dt className="link"><Link to={`/playlist/${id}`}>查看全部<i className="iconfont icon-jiantoufuben"></i></Link></dt>
            </dl>
    }
    return null
    
}
export default class Offical extends React.Component{

    render(){
        let {props,state}=this
        let dom=null
        dom=titleConfig.offical.map((v,k)=>{
            return <TopTag type={v.type} color={v.color} id={v.id} title={v.title} col={v.col} data={props.data[v.col]} clickFun={(e)=>{console.log(e)}} key={v.col} updateTime={v.updateTime}/> 
        })
        return <div className="offical">{dom}</div>
}
}