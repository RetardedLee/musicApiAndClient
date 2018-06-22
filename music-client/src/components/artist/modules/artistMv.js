import React from 'react'
import {formatNumber} from 'utils/numberUtil'
import defaultImg from 'static/defaultAva.jpg'
import {Link} from 'react-router-dom'
export default class ArtistMv extends React.Component{
     constructor(props){
         super(props)
        
     }
     componentDidMount(){
        
     }
    render(){
        let {data}=this.props
        return <div className="artist-mv">
                
                <ul className="vedio-list rec-list">{data.data.map((value,index)=>{
            return <li className="rec-item" key={value.id}>
            <Link to={`/vedio/${value.id}`} className="block">
                <p className="relative"  ><img src={`${value.imgurl}?param=230y130`} onError={(e)=>{e.target.src=defaultImg}}/>
                <span className="listens"><i className="iconfont icon-shipin1"></i>{formatNumber(value.playCount)}</span>

                </p>
                <p className="desc" title={value.name}>{value.name}</p>
            </Link>
        </li>   
        })}</ul> 
        </div>
    }
}
