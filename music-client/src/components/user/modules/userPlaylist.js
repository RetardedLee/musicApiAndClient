import React from 'react'
import {Link} from 'react-router-dom'
import {formatNumber} from 'utils/numberUtil'
export default class UserPlaylist extends React.Component{
     constructor(props){
         super(props)
     }
     componentDidMount(){
        
     }
    render(){
    
        let {data}=this.props
        return <div className="user-playlist">
        <ul className="list">
                {data.map((value,index)=>{
                    return <li className="rec-item" key={value.id}>
                                
                                    <p className="relative"><Link to={`/playlist/${value.id}`} className="block"><img src={`${value.coverImgUrl}?param=200y200`}/></Link>
                                    <span className="listens"><i className="iconfont icon-1"></i>{formatNumber(value.playCount)}</span>
                                    <span className="reason">{value.copywriter}</span>
                                    <span className="play"><i className="iconfont icon-bofang1"></i></span>
                                    </p>
                                    <p className="desc" title={value.name}>{value.name}</p>
                                    <p className="track">{value.trackCount}首</p>
                                
                            </li>
                })}
        </ul>
        </div>
    }
}
