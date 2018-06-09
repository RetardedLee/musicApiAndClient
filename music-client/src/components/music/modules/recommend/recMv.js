import React from 'react'
import {Link} from 'react-router-dom'
import {formatNumber} from 'utils/numberUtil'
export default class RecMv extends React.Component{
    
    render(){
        let {state,props}=this
        if(props.data.status===1){
            return <ul className="recmv rec-list">
                        {props.data.content.map((v,k)=>{
                            return <li className="rec-item" key={v.id}>
                                        <Link to={`/mv/${v.id}`} className="block">
                                            <p className="relative"><img src={v.picUrl}/>
                                            <span className="listens"><i className="iconfont icon-shipin1"></i>{formatNumber(v.playCount)}</span>
                                            <span className="reason">{v.copywriter}</span>
                                            </p>
                                            <p className="desc" title={v.name}>{v.name}</p>
                                        </Link>
                                        <Link className="block" to={`/artist/${v.artistId}`} className="link">{v.artistName}</Link>
                                    </li>
                        })}
            
        </ul>
        }
        return null
        
        
    }
}