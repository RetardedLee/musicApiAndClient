import React from 'react'
import titleConfig from './titleConfig'
import {Link} from 'react-router-dom'
import moment from 'moment'
const TopTag=(props)=>{
    let {type,color,id,data,title,col,clickFun}=props
    if(data.status==1){
        return <dl key={col} className="rank-tag" >
                <dt style={{backgroundImage:`linear-gradient(45deg,${color[0]},${color[1]})`,width:"100%"}} onClick={(e)=>{clickFun(data.content.trackIds
)}} className="head"><span>{title}</span><span>{`${moment().format("MM月DD日")}更新`}</span></dt>
                {data.content.tracks.map((v,k)=>{

                    return <dd key={v.id}>{v.name}</dd>
                })}
                <dt className="link"><Link to={`/playlist/${id}`}>查看更多</Link></dt>
            </dl>
    }
    return null
    
}
export default class Offical extends React.Component{

    render(){
        let {props,state}=this
        let dom=null
        dom=titleConfig.offical.map((v,k)=>{
            return <TopTag type={v.type} color={v.color} id={v.id} title={v.title} col={v.col} data={props.data[v.col]} clickFun={(e)=>{console.log(e)}} key={v.col}/> 
        })
        return <div className="offical">{dom}</div>
}
}