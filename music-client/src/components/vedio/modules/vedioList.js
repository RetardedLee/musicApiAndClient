import {Link} from 'react-router-dom'
import React from 'react'
import {formatNumber} from 'utils/numberUtil'
import defaultImg from 'static/defaultAva.jpg'
export default class VedioList extends React.Component{
   
    render(){
        let{data}=this.props
        
        return <ul className="vedio-list rec-list">{data.map((value,index)=>{
            return <li className="rec-item" key={index}>
            <Link to={`/vedio/${value.id}`} className="block">
                <p className="relative" ><img src={`${value.cover}?param=230y130`} onError={(e)=>{e.target.src=defaultImg}}/>
                <span className="listens"><i className="iconfont icon-shipin1"></i>{formatNumber(value.playCount)}</span>
                <span className="play"><i className="iconfont icon-bofang1"></i></span>
                </p>
                <p className="desc" title={value.name}>{value.name}</p>
                <div className="creator"><small>{`by `}</small>{value.artistName}</div>
            </Link>
        </li> 
        })}</ul>
    }
}