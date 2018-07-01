import {Link} from 'react-router-dom'
import React from 'react'
import {formatNumber} from 'utils/numberUtil'
import defaultImg from 'static/defaultAva.jpg'
export default class VedioList extends React.Component{
    mouseEnter=(item,e)=>{
        if(item.previewUrl){
            e.target.src=`${item.previewUrl}`
        }
       
    }
    moustLeave=(item,e)=>{
        e.target.src=`${item.coverUrl}?param=230y130`
    }
    render(){
        let{data}=this.props
        console.log(data)
        return <ul className="vedio-list rec-list">{data.map((value,index)=>{
            console.log(value)
            return <li className="rec-item" key={value.data.vid+Math.random()}>
            <Link to={`/vedio/${value.data.vid}`} className="block">
                <p className="relative" onMouseEnter={this.mouseEnter.bind(this,value.data)} onMouseLeave={this.moustLeave.bind(this,value.data)}><img src={`${value.data.coverUrl}?param=230y130`} onError={(e)=>{e.target.src=defaultImg}}/>
                <span className="listens"><i className="iconfont icon-shipin1"></i>{formatNumber(value.data.playTime)}</span>
                <span className="play"><i className="iconfont icon-bofang1"></i></span>
                </p>
                <p className="desc" title={value.data.title}>{value.data.title}</p>
                <div className="creator"><small>{`by `}</small>{value.data.creator?value.data.creator.nickname:"未知"}</div>
            </Link>
        </li>  
        })}</ul>
    }
}